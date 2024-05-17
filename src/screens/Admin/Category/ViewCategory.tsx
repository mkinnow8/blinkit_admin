import {
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../resources';
import {useAppSelector} from '../../../redux/hooks';
import {deleteCategory, fetchCategories} from '../../../services/commonApis';
import {
  CommonDeleteModal,
  EditCategoryModal,
  ViewItemComponent,
} from '../../../components';

type Props = {};

export const ViewCategory = (props: Props) => {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [editCategoryModal, setEditCategoryModal] = useState<boolean>(false);
  const [deleteCategoryModal, setDeleteCategoryModal] =
    useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const token = useAppSelector(state => state.User.token);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await fetchCategories({token});
      if (response.status === 200) {
        setCategories(response.data);
        console.log('REsponse ', response.data);
      } else {
        ToastAndroid.show('Categories Not Fetched!', ToastAndroid.SHORT);
      }
      setIsLoading(false);
    })();
  }, [isUpdated]);

  const handleConfirmDelete = async () => {
    setDeleteCategoryModal(false);
    setIsLoading(true);
    const response = await deleteCategory({
      categoryId: selectedCategory?._id,
      token,
    });
    if (response.status === 200) {
      ToastAndroid.show('Category Deleted!', ToastAndroid.SHORT);
      const tempCategories = categories?.filter((category: Category) => {
        return selectedCategory?._id !== category._id;
      });
      setCategories(tempCategories ? tempCategories : null);
    } else {
      ToastAndroid.show('Operation Failed!', ToastAndroid.SHORT);
    }
    setIsLoading(false);
  };

  const handleCancelDelete = () => {
    setDeleteCategoryModal(false);
  };
  const onDelete = (item: any) => {
    setSelectedCategory(item);
    setDeleteCategoryModal(true);
  };
  const toggleUpdate = () => {
    setIsUpdated(!isUpdated);
  };
  return (
    <>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={categories}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ViewItemComponent
                item={item}
                setItem={setSelectedCategory}
                setEditModal={setEditCategoryModal}
                onDelete={onDelete}
              />
            )}
          />
        )}
      </View>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={editCategoryModal}
        onRequestClose={() => {
          setEditCategoryModal(!editCategoryModal);
        }}>
        <EditCategoryModal
          setModal={setEditCategoryModal}
          category={selectedCategory}
          toggleUpdate={toggleUpdate}
        />
      </Modal>
      <CommonDeleteModal
        visible={deleteCategoryModal}
        onConfirmDelete={handleConfirmDelete}
        onCancelDelete={handleCancelDelete}
        title="Delete Category"
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
