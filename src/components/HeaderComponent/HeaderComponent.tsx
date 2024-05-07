import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS, ROUTE} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {SearchBar} from './SearchBarComponent';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const HeaderComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Delivery In</Text>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.deliveryTime}>9 minutes</Text>
            <Text style={styles.address}>
              Home - #2332, Phase 11, Sector 65{' '}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTE.PROFILE as never);
            }}>
            <Text>
              <Icon
                name="account-circle-outline"
                size={40}
                color={COLORS.BLACK}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {HeaderComponent};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  title: {
    color: COLORS.BLACK,
    fontSize: respFontSize(10),
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  deliveryTime: {
    color: COLORS.BLACK,
    fontSize: respFontSize(20),
    fontWeight: 'bold',
  },
  address: {
    color: COLORS.BLACK,
    fontSize: respFontSize(14),
  },
});
