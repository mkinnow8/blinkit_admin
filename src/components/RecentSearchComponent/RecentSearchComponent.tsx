import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';

type Props = {};

export const RecentSearchComponet = (props: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={18} color={COLORS.BLACK} />
      <Text style={styles.text}>Recent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    borderRadius: 5,
    marginVertical: responsiveWidth(4),
    marginRight: responsiveWidth(8),
    padding: responsiveWidth(4),
  },
  text: {
    fontSize: respFontSize(11),
    color: COLORS.BLACK,
    marginLeft: responsiveWidth(4),
  },
});
