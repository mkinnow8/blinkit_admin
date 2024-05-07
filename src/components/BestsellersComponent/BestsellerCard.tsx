import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {BestsellerModalComponent} from '..';

interface Props {
  bestseller: Bestseller;
}

const BestsellerCard = ({bestseller}: Props) => {
  const [bestSellerModal, setBestSellerModal] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setBestSellerModal(true);
        }}>
        <View style={styles.imageContainer}>
          {bestseller.products.slice(0, 3).map(product => {
            return (
              <View key={product.id}>
                <Image source={product.photos[0]} style={styles.image} />
              </View>
            );
          })}
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>
              +{bestseller.products.length - 3}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>{bestseller.name}</Text>
        <Text style={styles.productCount}>
          {bestseller.products.length} Products
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>See All</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={bestSellerModal}
        onRequestClose={() => {
          setBestSellerModal(!bestSellerModal);
        }}>
        <BestsellerModalComponent
          setBestSellerModal={setBestSellerModal}
          bestseller={bestseller}
        />
      </Modal>
    </>
  );
};

export default BestsellerCard;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(136),
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: responsiveHeight(135),
    backgroundColor: COLORS.LIGHT_BLUE_2,
    padding: responsiveWidth(4),
    borderRadius: 8,
  },
  image: {
    width: responsiveWidth(56),
    height: responsiveHeight(56),
    borderRadius: 8,
    marginVertical: responsiveHeight(4),
    marginHorizontal: responsiveWidth(4),
  },
  overlay: {
    width: responsiveWidth(56),
    height: responsiveHeight(56),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(4),
    marginHorizontal: responsiveWidth(4),
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
  },
  overlayText: {
    color: COLORS.LIGHT_GREY,
    fontSize: respFontSize(16),
    fontWeight: 'bold',
  },
  title: {
    fontSize: respFontSize(12),
    color: COLORS.BLACK,
    fontWeight: 'bold',
    marginTop: responsiveHeight(5),
  },
  productCount: {
    color: COLORS.BLACK,
    marginTop: 2,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  buttonText: {
    borderWidth: 1,
    borderColor: COLORS.WHITE_GREY,
    borderRadius: 8,
    padding: 8,
    color: COLORS.GREEN,
    textAlign: 'center',
    fontSize: respFontSize(12),
    fontWeight: 'bold',
  },
});
