import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../resources';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {blinkitBackground, imagePlaceholder, uploadImage} from '../../assets';
import {Image} from 'react-native';

type Props = {
  image: Asset[] | null | undefined;
  setImage: React.Dispatch<React.SetStateAction<Asset[] | null | undefined>>;
};

export const ImageInputComponent = ({image, setImage}: Props) => {
  const addImage = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
    };
    launchImageLibrary(options, res => {
      if (!res.didCancel) {
        console.log('Base 64', res.assets[0].base64);

        setImage(res.assets);
      }
    });
  };
  return (
    <>
      <TouchableOpacity style={styles.inputContainer} onPress={addImage}>
        {image ? (
          <TouchableOpacity
            onPress={() => setImage(null)}
            style={{position: 'absolute', top: -20, right: -15, zIndex: 10}}>
            <Icon name="close-circle-outline" color={COLORS.RED} size={24} />
          </TouchableOpacity>
        ) : null}
        <View style={{borderWidth: 1, borderRadius: 8, overflow: 'hidden'}}>
          <Image
            source={image ? {uri: image[0].uri} : uploadImage}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: COLORS.GREY,
    height: responsiveHeight(100),
    width: responsiveHeight(100),
    marginTop: responsiveHeight(32),
    marginBottom: responsiveHeight(16),
    marginRight: responsiveWidth(16),
  },
  image: {
    height: responsiveHeight(100),
    width: responsiveHeight(100),
  },
});
