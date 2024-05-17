import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';

type Item = {
  item: any;
  setItem: React.Dispatch<React.SetStateAction<any>>;
  setEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (item: any) => void;
};

export const ViewItemComponent = ({
  item,
  setItem,
  setEditModal,
  onDelete,
}: Item) => {
  const onEdit = () => {
    setItem(item);
    setEditModal ? setEditModal(true) : null;
  };
  return (
    <View style={[styles.rowContainer, {marginVertical: responsiveHeight(8)}]}>
      <Image source={{uri: item.image_url}} style={styles.image} />
      <View style={{flex: 1}}>
        <Text
          style={[styles.text, {fontWeight: 'bold'}]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.name}
        </Text>
      </View>
      <View style={[styles.rowContainer, {justifyContent: 'flex-end'}]}>
        <TouchableOpacity onPress={onEdit}>
          <Icon name="square-edit-outline" color={COLORS.BLACK} size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item)}>
          <Icon name="delete" color={COLORS.RED} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.BLACK,
    fontSize: respFontSize(11),
  },
  image: {
    width: responsiveWidth(56),
    height: responsiveHeight(56),
    marginRight: responsiveWidth(8),
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
