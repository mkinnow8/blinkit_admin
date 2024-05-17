import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import {
  DropdownInputComponent,
  GreenButtonComponent,
  HeadingTextComponent,
  ImageInputComponent,
  LoginInputComponent,
} from '../../../components';
import {useAppSelector} from '../../../redux/hooks';
import {Asset} from 'react-native-image-picker';
import {COLORS} from '../../../resources';
import {createSubcategory, fetchCategories} from '../../../services/commonApis';
import {select} from 'redux-saga/effects';
import {useFetchCategories} from '../../../hooks';

type Props = {
  categories: Category[];
  isCategoryLoading: boolean;
};

export const AddSubCategory = ({categories, isCategoryLoading}: Props) => {
  const token = useAppSelector(state => state.User.token);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [subcategoryName, setSubcategoryName] = useState('');
  const [image, setImage] = useState<Asset[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addSubCategory = async () => {
    // console.log('Image ', image && image[0]);
    // const formData = new FormData();
    // if (image) {
    //   const localUri = image[0].uri;
    //   const filename = localUri?.split('/').pop();
    //   const match = /\.(\w+)$/.exec(filename);
    //   const type = match ? `image/${match[1]}` : `image`;
    //   formData.append('image', {uri: localUri, name: filename, type});
    // }
    // formData.append('name', categoryName);
    if (image && subcategoryName && selectedCategory) {
      const payload = {
        name: subcategoryName,
        category_id: selectedCategory._id,
        image: image && image[0].base64,
      };
      setIsLoading(true);
      const response = await createSubcategory({payload, token});
      if (response.status === 200) {
        ToastAndroid.show('Category Added!', ToastAndroid.SHORT);
        setSelectedCategory(undefined);
        setSubcategoryName('');
        setImage(null);
      } else {
        ToastAndroid.show('Operation Failed!', ToastAndroid.SHORT);
      }
      setIsLoading(false);
    } else {
      ToastAndroid.show('Enter All Data!', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <HeadingTextComponent text={'Add SubCategory'} />

      <DropdownInputComponent
        value={selectedCategory}
        setValue={setSelectedCategory}
        label={'Select Category*'}
        data={categories}
        isLoading={isCategoryLoading}
      />
      <LoginInputComponent
        placeholder="Sub Catergory name"
        label={'Sub Category Name'}
        value={subcategoryName}
        setValue={setSubcategoryName}
      />
      <ImageInputComponent image={image} setImage={setImage} />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        {isLoading ? (
          <GreenButtonComponent isLoading={true} />
        ) : (
          <GreenButtonComponent buttonText="ADD" onPress={addSubCategory} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(32),
  },
});
