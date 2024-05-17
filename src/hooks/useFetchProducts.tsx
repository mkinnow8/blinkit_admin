import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  fetchCategories,
  fetchProductsBySubCategories,
  fetchSubCategories,
} from '../services/commonApis';
import {useAppSelector} from '../redux/hooks';

type Props = {
  selectedSubCategory: SubCategory | undefined;
};

export const useFetchProducts = ({selectedSubCategory}: Props) => {
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState();
  const token = useAppSelector(state => state.User.token);
  useEffect(() => {
    if (selectedSubCategory) {
      (async () => {
        setIsProductsLoading(true);
        const payload = {
          subcategory_id: selectedSubCategory._id,
        };
        const response = await fetchProductsBySubCategories({token, payload});
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          setProducts(undefined);
          ToastAndroid.show('Products Not Fetched!', ToastAndroid.SHORT);
        }
        setIsProductsLoading(false);
      })();
    }
  }, [selectedSubCategory]);
  return {products, isProductsLoading, setProducts};
};
