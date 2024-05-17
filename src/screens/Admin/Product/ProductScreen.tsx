import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../resources';
import {OptionsButtonComponent} from '../../../components';
import {AddProduct} from './AddProduct';
import {ViewProduct} from './ViewProduct';
import {useFetchCategories} from '../../../hooks';

type Props = {};

export const ProductScreen = (props: Props) => {
  const [page, setPage] = useState('Add Product');
  const {categories, isCategoryLoading} = useFetchCategories({});
  return (
    <View style={styles.container}>
      <OptionsButtonComponent
        page={page}
        setPage={setPage}
        button1={'Add Product'}
        button2={'View Products'}
      />
      {page === 'Add Product' ? (
        <AddProduct
          categories={categories ? categories : []}
          isCategoryLoading={isCategoryLoading}
        />
      ) : (
        <ViewProduct
          categories={categories ? categories : []}
          isCategoryLoading={isCategoryLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
