import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS, ROUTE} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const SearchBar = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => navigation.navigate(ROUTE.SEARCH as never)}>
        <View style={styles.iconContainer}>
          <Text>
            <Icon name="magnify" size={25} color={COLORS.BLACK} />
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search Product..."
            editable={false}
          />
        </View>
        <View style={styles.iconContainer}>
          <Text>
            <Icon name="microphone" size={25} color={COLORS.BLACK} />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.SILVER,
    borderBottomWidth: 1,
  },
  subContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 5,
    height: responsiveHeight(44),
    alignItems: 'center',
    paddingLeft: responsiveWidth(10),
  },
  iconContainer: {
    marginRight: responsiveWidth(4),
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    paddingLeft: responsiveWidth(10),
    width: responsiveWidth(305),
    fontSize: respFontSize(12),
    paddingVertical: responsiveHeight(4),
  },
});
