import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useAppSelector} from '../../../redux/hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useFetchCategories,
  useFetchProducts,
  useFetchSubCategories,
} from '../../../hooks';
import {
  CommonDeleteModal,
  DropdownInputComponent,
  ViewItemComponent,
} from '../../../components';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../../resources';
import {deleteProduct} from '../../../services/commonApis';
import {ToastAndroid} from 'react-native';

type Props = {
  categories: Category[];
  isCategoryLoading: boolean;
};

export const ViewProduct = ({categories, isCategoryLoading}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = useAppSelector(state => state.User.token);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [deleteProductModal, setDeleteProductModal] = useState<boolean>(false);

  const {subCategories, isSubCategoryLoading} = useFetchSubCategories({
    selectedCategory,
  });
  const {products, isProductsLoading, setProducts} = useFetchProducts({
    selectedSubCategory,
  });
  const handleConfirmDelete = async () => {
    setDeleteProductModal(false);
    setIsLoading(true);
    const response = await deleteProduct({
      productId: selectedProduct?._id,
      token,
    });
    if (response.status === 200) {
      ToastAndroid.show('Product Deleted!', ToastAndroid.SHORT);
      const tempProducts = products?.filter((product: Product) => {
        return selectedProduct?._id !== product._id;
      });
      setProducts(tempProducts ? tempProducts : null);
    } else {
      ToastAndroid.show('Operation Failed!', ToastAndroid.SHORT);
    }
    setIsLoading(false);
  };

  const handleCancelDelete = () => {
    setDeleteProductModal(false);
  };
  const onDelete = (item: any) => {
    setSelectedProduct(item);
    setDeleteProductModal(true);
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
        <DropdownInputComponent
          value={selectedSubCategory}
          setValue={setSelectedSubCategory}
          label={'Select SubCategory*'}
          data={subCategories}
          isLoading={isSubCategoryLoading}
        />
        {isProductsLoading || isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={products && products}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ViewItemComponent
                item={item}
                onDelete={onDelete}
                setItem={setSelectedProduct}
              />
            )}
          />
        )}
      </View>
      <CommonDeleteModal
        visible={deleteProductModal}
        onConfirmDelete={handleConfirmDelete}
        onCancelDelete={handleCancelDelete}
        title="Delete Product"
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
