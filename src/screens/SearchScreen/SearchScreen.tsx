import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import {useNavigation} from '@react-navigation/native';
import {FooterComponent, RecentSearchComponet} from '../../components';
import {searchResult} from '../../utilities/dataObjects';

type Props = {};

export const SearchScreen = (props: Props) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  return (
    <>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.subContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={25} color={COLORS.BLACK} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search for atta, dal, coke and more"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {searchText.length > 0 ? (
            <TouchableOpacity
              style={[styles.iconContainer]}
              onPress={() => setSearchText('')}>
              <Icon name="close-circle" size={16} color={COLORS.GREY} />
            </TouchableOpacity>
          ) : null}

          <View
            style={[
              styles.iconContainer,
              {borderLeftWidth: 1, borderColor: COLORS.SILVER},
            ]}>
            <Icon name="microphone" size={25} color={COLORS.BLACK} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        stickyHeaderIndices={[0]}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        {/* Recent Searches */}
        {searchText.length > 0 ? (
          <View>
            {searchResult.map((item, index) => {
              return (
                <SearchSuggestionComponent
                  image={item.image}
                  title={item.title}
                />
              );
            })}
          </View>
        ) : (
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>Recent searches</Text>
              <Text style={styles.seeAll}>clear</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <RecentSearchComponet />
              <RecentSearchComponet />
              <RecentSearchComponet />
              <RecentSearchComponet />
              <RecentSearchComponet />
              <RecentSearchComponet />
              <RecentSearchComponet />
              <RecentSearchComponet />
            </View>
          </View>
        )}
      </ScrollView>
      <FooterComponent />
    </>
  );
};

type SearchSuggestion = {image: any; title: string};
const SearchSuggestionComponent = ({image, title}: SearchSuggestion) => {
  return (
    <View style={[styles.rowContainer, {marginVertical: responsiveHeight(4)}]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.resultText} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: responsiveWidth(12),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    paddingTop: responsiveWidth(48),
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.SILVER,
    borderBottomWidth: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  subContainer: {
    flexDirection: 'row',
    borderColor: COLORS.SILVER,
    borderWidth: 1,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(12),
  },
  title: {
    fontSize: respFontSize(14),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  seeAll: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
  image: {
    width: responsiveWidth(32),
    height: responsiveWidth(32),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    marginRight: responsiveWidth(8),
  },
  resultText: {
    fontSize: respFontSize(11),
    color: COLORS.BLACK,
    fontWeight: '400',
  },
});
