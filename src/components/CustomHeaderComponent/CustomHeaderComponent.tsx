import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS} from '../../resources';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';

type Props = {
  title: string;
  rightIcon?: string;
};

export const CustomHeaderComponent = ({title, rightIcon}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color={COLORS.BLACK} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      {rightIcon && <Icon name={rightIcon} size={22} color={COLORS.BLACK} />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(8),
    paddingTop: responsiveHeight(48),
    borderBottomColor: COLORS.SILVER,
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  headerText: {
    color: COLORS.BLACK,
    flex: 1,
    fontWeight: '600',
    fontSize: responsiveWidth(14),
    marginLeft: responsiveWidth(12),
  },
});
