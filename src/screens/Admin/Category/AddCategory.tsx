import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import {useAppSelector} from '../../../redux/hooks';
import {Asset} from 'react-native-image-picker';
import {
  GreenButtonComponent,
  HeadingTextComponent,
  ImageInputComponent,
  LoginInputComponent,
} from '../../../components';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import {COLORS} from '../../../resources';
import {createCategory} from '../../../services/commonApis';

type Props = {};

export const AddCategory = (props: Props) => {
  const token = useAppSelector(state => state.User.token);
  const locale = useAppSelector(state => state.Locale.locale);
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState<Asset[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addCategory = async () => {
    console.log('Category ', categoryName);
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
    if (image && categoryName) {
      const payload = {
        name: categoryName,
        image: image && image[0].base64,
      };
      setIsLoading(true);
      const response = await createCategory({payload, token});
      if (response.status === 200) {
        ToastAndroid.show('Category Added!', ToastAndroid.SHORT);
        setCategoryName('');
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
      <HeadingTextComponent text={locale.addcategory} />

      <LoginInputComponent
        placeholder={locale.addcategory}
        value={categoryName}
        label={locale.addcategory}
        setValue={setCategoryName}
      />
      <ImageInputComponent image={image} setImage={setImage} />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        {isLoading ? (
          <GreenButtonComponent isLoading={true} />
        ) : (
          <GreenButtonComponent buttonText={locale.add} onPress={addCategory} />
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
