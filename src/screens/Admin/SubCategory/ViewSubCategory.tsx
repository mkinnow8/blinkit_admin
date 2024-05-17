import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../resources';
import {TouchableOpacity} from 'react-native';
import {
  CommonDeleteModal,
  DropdownInputComponent,
  EditSubCategoryModal,
  ViewItemComponent,
} from '../../../components';
import {
  deleteSubCategory,
  fetchCategories,
  fetchSubCategories,
} from '../../../services/commonApis';
import {useFetchCategories, useFetchSubCategories} from '../../../hooks';
import {Modal} from 'react-native';

type Props = {
  categories: Category[];
  isCategoryLoading: boolean;
};

export const ViewSubCategory = ({categories, isCategoryLoading}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = useAppSelector(state => state.User.token);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<Category>();
  const [deleteSubCategoryModal, setDeleteSubCategoryModal] =
    useState<boolean>(false);
  const [editSubCategoryModal, setEditSubCategoryModal] =
    useState<boolean>(false);

  const {subCategories, isSubCategoryLoading, setSubCategories, toggleUpdate} =
    useFetchSubCategories({
      selectedCategory,
    });
  const handleConfirmDelete = async () => {
    setDeleteSubCategoryModal(false);
    setIsLoading(true);
    const response = await deleteSubCategory({
      subCategoryId: selectedSubCategory?._id,
      token,
    });
    if (response.status === 200) {
      ToastAndroid.show('Sub Category Deleted!', ToastAndroid.SHORT);
      const tempSubCategories = subCategories?.filter(
        (subCategory: SubCategory) => {
          return selectedSubCategory?._id !== subCategory._id;
        },
      );
      setSubCategories(tempSubCategories ? tempSubCategories : null);
    } else {
      ToastAndroid.show('Operation Failed!', ToastAndroid.SHORT);
    }
    setIsLoading(false);
  };

  const handleCancelDelete = () => {
    setDeleteSubCategoryModal(false);
  };
  const onDelete = (item: any) => {
    setSelectedSubCategory(item);
    setDeleteSubCategoryModal(true);
  };
  return (
    <>
      <View style={styles.container}>
        <DropdownInputComponent
          value={selectedCategory}
          setValue={setSelectedCategory}
          label={'Select Category*'}
          data={categories}
          isLoading={isCategoryLoading}
        />
        {isSubCategoryLoading || isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={subCategories && subCategories}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ViewItemComponent
                item={item}
                onDelete={onDelete}
                setItem={setSelectedSubCategory}
                setEditModal={setEditSubCategoryModal}
              />
            )}
            keyExtractor={item => item._id}
          />
        )}
      </View>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={editSubCategoryModal}
        onRequestClose={() => {
          setEditSubCategoryModal(!editSubCategoryModal);
        }}>
        <EditSubCategoryModal
          setModal={setEditSubCategoryModal}
          subCategory={selectedSubCategory}
          categories={categories}
          toggleUpdate={toggleUpdate}
        />
      </Modal>
      <CommonDeleteModal
        visible={deleteSubCategoryModal}
        onConfirmDelete={handleConfirmDelete}
        onCancelDelete={handleCancelDelete}
        title="Delete Sub Category"
        message="Are you sure you want to delete this item?"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(32),
  },
});
