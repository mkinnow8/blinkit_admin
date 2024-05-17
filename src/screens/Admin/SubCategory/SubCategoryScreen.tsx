import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {OptionsButtonComponent} from '../../../components';
import {AddSubCategory} from './AddSubCategory';
import {COLORS} from '../../../resources';
import {ViewSubCategory} from './ViewSubCategory';
import {useFetchCategories} from '../../../hooks';

type Props = {};

export const SubCategoryScreen = (props: Props) => {
  const [page, setPage] = useState('Add Sub-Category');
  const {categories, isCategoryLoading} = useFetchCategories({});
  return (
    <View style={styles.container}>
      <OptionsButtonComponent
        page={page}
        setPage={setPage}
        button1={'Add Sub-Category'}
        button2={'View Sub-Categories'}
      />
      {page === 'Add Sub-Category' ? (
        <AddSubCategory
          categories={categories ? categories : []}
          isCategoryLoading={isCategoryLoading}
        />
      ) : (
        <ViewSubCategory
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
