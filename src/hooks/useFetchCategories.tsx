import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchCategories} from '../services/commonApis';
import {useAppSelector} from '../redux/hooks';

type Props = {};

export const useFetchCategories = (props: Props) => {
  const [categories, setCategories] = useState();
  const [isCategoryLoading, setIsCategoryLoading] = useState<boolean>(false);
  const token = useAppSelector(state => state.User.token);
  useEffect(() => {
    (async function () {
      setIsCategoryLoading(true);
      const response = await fetchCategories({token});
      if (response.status === 200) {
        setCategories(response.data);
        console.log('REsponse ', response.data);
      } else {
        setCategories(undefined);
        ToastAndroid.show('Categories Not Fetched!', ToastAndroid.SHORT);
      }
      setIsCategoryLoading(false);
    })();
  }, []);

  return {categories, isCategoryLoading};
};
