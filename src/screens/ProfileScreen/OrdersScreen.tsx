import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {CustomHeaderComponent, OrderCardComponent} from '../../components';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {useAppSelector} from '../../redux/hooks';

type Props = {};

export const OrdersScreen = (props: Props) => {
  const ordersList = useAppSelector(state => state.Order.ordersList);
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeaderComponent title={'You Orders'} />
      <View style={styles.container}>
        <FlatList
          data={ordersList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <OrderCardComponent order={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(12),
    backgroundColor: COLORS.LIGHT_BLUE_3,
  },
});
