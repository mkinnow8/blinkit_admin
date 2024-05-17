import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {Pressable} from 'react-native';
import {ActivityIndicator} from 'react-native';

type Props = {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  data: any[] | undefined;
  isLoading?: boolean;
};

export const DropdownInputComponent = ({
  value,
  setValue,
  label,
  data,
  isLoading,
}: Props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <Pressable
        onPress={toggleDropdown}
        style={[styles.rowContainer, styles.inputContainer]}>
        <>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textInput}>
            {value ? `${value.name}` : label}
          </Text>
          <Icon
            name={dropdown ? 'chevron-down' : 'chevron-up'}
            color={COLORS.BLACK}
            size={24}
          />
        </>
      </Pressable>
      {dropdown && (
        <View style={[styles.dropdown]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}>
            {isLoading ? (
              <ActivityIndicator size="small" color={COLORS.BLACK} />
            ) : (
              data?.map(data => {
                return (
                  <TouchableOpacity
                    key={data._id}
                    onPress={() => {
                      setValue(data);
                      toggleDropdown();
                    }}>
                    <Text
                      style={styles.dropdownListItem}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {`${data.name}`}
                    </Text>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderColor: 'lightgrey',
                      }}></View>
                  </TouchableOpacity>
                );
              })
            )}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 8,
    marginVertical: responsiveHeight(4),
    paddingVertical: responsiveWidth(11),
    paddingHorizontal: responsiveWidth(10),
  },
  textInput: {
    color: COLORS.BLACK,
    flex: 1,
  },
  dropdown: {
    maxHeight: responsiveHeight(240),
    borderWidth: 1,
    borderColor: COLORS.GREY,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  dropdownListItem: {
    textAlignVertical: 'top',
    fontSize: respFontSize(11),
    color: COLORS.DARK_GREY,
    height: responsiveHeight(48),
    paddingVertical: responsiveWidth(14),
    paddingHorizontal: responsiveWidth(10),
  },
});
