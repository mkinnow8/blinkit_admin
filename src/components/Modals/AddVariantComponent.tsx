import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {CommonModalContainer} from './CommonModalContainer';
import React, {useEffect} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';
import {HeadingTextComponent} from '../HeadingTextComponent/HeadingTextComponent';
import {LoginInputComponent} from '../Inputs/LoginInputComponent';
import {DropdownInputComponent} from '../Inputs/DropdownInputComponent';
import {ImageInputComponent} from '../Inputs/ImageInputComponent';
import {Asset} from 'react-native-image-picker';
import {GreenButtonComponent} from '../Buttons/GreenButtonComponent';

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVariants: React.Dispatch<React.SetStateAction<Varient[] | null>>;
  setEditVariant: React.Dispatch<React.SetStateAction<boolean>>;
  editVariant: boolean;
  editIndex: number;
  variants: Varient[];
};

export const AddVariantComponent = ({
  setModal,
  setVariants,
  setEditVariant,
  editVariant,
  editIndex,
  variants,
}: Props) => {
  const [discountAvailable, setDiscountAvailabe] = React.useState({
    id: '1',
    value: false,
    name: 'Discount Not Available',
  });
  const [discountPrice, setDiscountPrice] = React.useState<string>('');
  const [maxRetailPrice, setMaxRetailPrice] = React.useState<string>('');
  const [discountPercentage, setDiscountPercentage] =
    React.useState<string>('');
  const [units, setUnits] = React.useState<string>('');
  const [totalQuantity, setTotalQuantity] = React.useState<string>('');
  const [image, setImage] = React.useState<Asset[] | null>();
  const [image2, setImage2] = React.useState<Asset[] | null>();
  const [image3, setImage3] = React.useState<Asset[] | null>();
  const [image4, setImage4] = React.useState<Asset[] | null>();
  const [image5, setImage5] = React.useState<Asset[] | null>();

  useEffect(() => {
    if (editVariant) {
      setUnits(variants[editIndex]?.units);
      setTotalQuantity(variants[editIndex].total_quantity);
      setMaxRetailPrice(variants[editIndex].max_retail_price);
      setDiscountPrice(variants[editIndex].discount_price);
      setDiscountPercentage(variants[editIndex].discount_percentage);
      if (!variants[editIndex].discount_available) {
        setDiscountAvailabe({
          id: '1',
          value: false,
          name: 'Discount Not Available',
        });
      } else {
        setDiscountAvailabe({
          id: '2',
          value: true,
          name: 'Discount Available',
        });
      }
      if (variants[editIndex].images[0]) {
        setImage([{uri: 'data:image;base64,' + variants[editIndex].images[0]}]);
      }
      if (variants[editIndex].images[1]) {
        setImage2([
          {uri: 'data:image;base64,' + variants[editIndex].images[1]},
        ]);
      }
      if (variants[editIndex].images[2]) {
        setImage3([
          {uri: 'data:image;base64,' + variants[editIndex].images[2]},
        ]);
      }
      if (variants[editIndex].images[3]) {
        setImage4([
          {uri: 'data:image;base64,' + variants[editIndex].images[3]},
        ]);
      }
      if (variants[editIndex].images[4]) {
        setImage5([
          {uri: 'data:image;base64,' + variants[editIndex].images[4]},
        ]);
      }
    }
  }, []);

  const updateVariant = () => {
    if (
      maxRetailPrice &&
      totalQuantity &&
      units &&
      (image || image2 || image3 || image4 || image5)
    ) {
      let image_urls = [];
      console.log('SELECTED IMAGE', image[0].uri?.slice(0, 18));
      // console.log('IMAGE', variants[editIndex].images[0]);
      if (image)
        image[0].uri?.slice(0, 18) == 'data:image;base64,'
          ? image_urls.push(variants[editIndex].images[0])
          : image_urls.push(image[0].base64);
      if (image2)
        image2[0].uri?.substring(18) === variants[editIndex].images[1]
          ? image_urls.push(variants[editIndex].images[1])
          : image_urls.push(image2[0].base64);
      if (image3)
        image3[0].uri?.substring(18) === variants[editIndex].images[2]
          ? image_urls.push(variants[editIndex].images[2])
          : image_urls.push(image3[0].base64);
      if (image4)
        image4[0].uri?.substring(18) === variants[editIndex].images[3]
          ? image_urls.push(variants[editIndex].images[3])
          : image_urls.push(image4[0].base64);
      if (image5)
        image5[0].uri?.substring(18) === variants[editIndex].images[4]
          ? image_urls.push(variants[editIndex].images[4])
          : image_urls.push(image5[0].base64);
      const variant = {
        discount_available: discountAvailable.value,
        discount_price: discountPrice,
        max_retail_price: maxRetailPrice,
        discount_percentage: discountPercentage,
        units,
        total_quantity: totalQuantity,
        images: image_urls,
      };
      variants[editIndex] = variant;
      setVariants(variants);
      // setVariants(variants => [...variants, variant]);
      setModal(false);
    } else {
      ToastAndroid.show('Enter All Data!', ToastAndroid.SHORT);
    }
  };

  const addVariant = () => {
    if (
      maxRetailPrice &&
      totalQuantity &&
      units &&
      (image || image2 || image3 || image4 || image5)
    ) {
      let image_urls = [];
      if (image) image_urls.push(image[0].base64);
      if (image2) image_urls.push(image2[0].base64);
      if (image3) image_urls.push(image3[0].base64);
      if (image4) image_urls.push(image4[0].base64);
      if (image5) image_urls.push(image5[0].base64);
      const variant = {
        discount_available: discountAvailable.value,
        discount_price: discountPrice,
        max_retail_price: maxRetailPrice,
        discount_percentage: discountPercentage,
        units,
        total_quantity: totalQuantity,
        images: image_urls,
      };
      setVariants(variants => [...variants, variant]);
      setModal(false);
    } else {
      ToastAndroid.show('Enter All Data!', ToastAndroid.SHORT);
    }
  };
  const onClose = () => {
    setModal(false);
    setEditVariant(false);
  };
  return (
    <CommonModalContainer setModal={setModal} onClose={onClose}>
      <View style={styles.container}>
        <HeadingTextComponent
          text={editVariant ? 'Update Variant' : 'Add Variant'}
        />
        <LoginInputComponent
          placeholder="100g / 100ml / 1 x unit"
          value={units}
          label={'Units'}
          setValue={setUnits}
        />
        <LoginInputComponent
          placeholder="Quantity"
          value={totalQuantity}
          label={'Total Quantity'}
          setValue={setTotalQuantity}
          inputType={'numeric'}
        />
        <LoginInputComponent
          placeholder="Max Retail Price"
          label={'MRP'}
          value={maxRetailPrice}
          setValue={setMaxRetailPrice}
          inputType={'numeric'}
        />
        <Text
          style={{
            fontWeight: '700',
            color: COLORS.BLACK,
            marginTop: responsiveHeight(4),
          }}>
          {' '}
          {'Discount Availabe'}
        </Text>
        <DropdownInputComponent
          value={discountAvailable}
          setValue={setDiscountAvailabe}
          label={'Discount Available*'}
          data={[
            {id: '1', value: false, name: 'Discount Not Available'},
            {id: '2', value: true, name: 'Discount Available'},
          ]}
          isLoading={false}
        />
        {discountAvailable?.value && (
          <>
            <LoginInputComponent
              placeholder="Discount Price"
              value={discountPrice}
              label={'Discount Price'}
              setValue={setDiscountPrice}
              inputType={'numeric'}
            />
            <LoginInputComponent
              placeholder="Discount Percentage"
              label={'Discount Percentage'}
              value={discountPercentage}
              inputType={'numeric'}
              setValue={setDiscountPercentage}
            />
          </>
        )}
        <View style={[styles.rowContainer, {flexWrap: 'wrap'}]}>
          <ImageInputComponent image={image} setImage={setImage} />
          <ImageInputComponent image={image2} setImage={setImage2} />
          <ImageInputComponent image={image3} setImage={setImage3} />
          <ImageInputComponent image={image4} setImage={setImage4} />
          <ImageInputComponent image={image5} setImage={setImage5} />
        </View>
        <GreenButtonComponent
          buttonText={editVariant ? 'Update Variant' : 'Add Variant'}
          onPress={editVariant ? updateVariant : addVariant}
        />
      </View>
    </CommonModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingBottom: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(32),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
