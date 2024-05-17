import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchCategories, fetchSubCategories} from '../services/commonApis';
import {useAppSelector} from '../redux/hooks';

type Props = {
  selectedCategory: Category | undefined;
};

export const useFetchSubCategories = ({selectedCategory}: Props) => {
  const [isSubCategoryLoading, setIsSubCategoryLoading] =
    useState<boolean>(false);
  const [subCategories, setSubCategories] = useState();
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const token = useAppSelector(state => state.User.token);
  useEffect(() => {
    if (selectedCategory) {
      (async () => {
        setIsSubCategoryLoading(true);
        const payload = {
          category_id: selectedCategory._id,
        };
        const response = await fetchSubCategories({token, payload});
        if (response.status === 200) {
          setSubCategories(response.data);
        } else {
          setSubCategories(undefined);
          ToastAndroid.show('Sub-Categories Not Fetched!', ToastAndroid.SHORT);
        }
        setIsSubCategoryLoading(false);
      })();
    }
  }, [selectedCategory, isUpdated]);
  const toggleUpdate = () => {
    setIsUpdated(!isUpdated);
  };
  return {subCategories, isSubCategoryLoading, setSubCategories, toggleUpdate};
};
