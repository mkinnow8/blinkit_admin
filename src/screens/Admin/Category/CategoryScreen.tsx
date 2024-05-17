import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {OptionsButtonComponent} from '../../../components';
import {COLORS} from '../../../resources';
import {AddCategory} from './AddCategory';
import {ViewCategory} from './ViewCategory';
import {useAppSelector} from '../../../redux/hooks';

type Props = {};

export const CategoryScreen = (props: Props) => {
  const locale = useAppSelector(state => state.Locale.locale);
  const [page, setPage] = useState(`${locale.addcategory}`);
  return (
    <View style={styles.container}>
      <OptionsButtonComponent
        page={page}
        setPage={setPage}
        button1={locale.addcategory}
        button2={locale.viewcategory}
      />
      {page === locale.addcategory ? <AddCategory /> : <ViewCategory />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
