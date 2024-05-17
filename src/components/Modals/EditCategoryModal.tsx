import {
  Animated,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {HeadingTextComponent} from '../HeadingTextComponent/HeadingTextComponent';
import {ImageInputComponent} from '../Inputs/ImageInputComponent';
import {LoginInputComponent} from '../Inputs/LoginInputComponent';
import {GreenButtonComponent} from '../Buttons/GreenButtonComponent';
import {Asset} from 'react-native-image-picker';
import {CommonModalContainer} from './CommonModalContainer';
import {ToastAndroid} from 'react-native';
import {updateCategory} from '../../services/commonApis';
import {useAppSelector} from '../../redux/hooks';
type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category;
  toggleUpdate: () => void;
};

export const EditCategoryModal = ({
  setModal,
  category,
  toggleUpdate,
}: Props) => {
  useEffect(() => {
    setImage([{uri: category.image_url}]);
    setCategoryName(category.name);
  }, []);
  const token = useAppSelector(state => state.User.token);
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState<Asset[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onClose = () => {
    setModal(false);
  };
  const onUpdate = async () => {
    if (categoryName && image) {
      let payload: any = {
        _id: category._id,
        name: categoryName,
      };
      if (image[0].uri != category.image_url) {
        payload = {...payload, image: image[0].base64};
      }
      setIsLoading(true);
      const response = await updateCategory({token, payload});
      if (response.status === 200) {
        ToastAndroid.show('Category Updated!', ToastAndroid.SHORT);
        toggleUpdate();
      } else {
        ToastAndroid.show('Operation Failed!', ToastAndroid.SHORT);
      }
      setIsLoading(false);
      setModal(false);
    } else {
      ToastAndroid.show('Enter All Data!', ToastAndroid.SHORT);
    }
  };
  return (
    <CommonModalContainer setModal={setModal} onClose={onClose}>
      <View style={styles.container}>
        <HeadingTextComponent text={'Update Category'} />
        <LoginInputComponent
          placeholder="catergory name"
          value={categoryName}
          label={'Category Name'}
          setValue={setCategoryName}
        />
        <ImageInputComponent image={image} setImage={setImage} />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          {isLoading ? (
            <GreenButtonComponent isLoading={true} />
          ) : (
            <GreenButtonComponent buttonText="Update" onPress={onUpdate} />
          )}
        </View>
      </View>
    </CommonModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingBottom: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(32),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(12),
  },
  headingText: {
    fontSize: responsiveWidth(18),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
