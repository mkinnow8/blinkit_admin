import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFetchCategories, useFetchSubCategories} from '../../../hooks';
import {
  AddVariantComponent,
  DropdownInputComponent,
  GreenButtonComponent,
  HeadingTextComponent,
  ImageInputComponent,
  LoginInputComponent,
} from '../../../components';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import {Asset} from 'react-native-image-picker';
import {COLORS} from '../../../resources';
import {Modal} from 'react-native';
import {ToastAndroid} from 'react-native';
import {createProduct} from '../../../services/commonApis';
import {useAppSelector} from '../../../redux/hooks';

type Props = {
  categories: Category[];
  isCategoryLoading: boolean;
};

export const AddProduct = ({categories, isCategoryLoading}: Props) => {
  const token = useAppSelector(state => state.User.token);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>();
  const [productName, setProductName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [image, setImage] = useState<Asset[] | null>();
  const [variants, setVariants] = useState<Varient[] | null>([]);
  const [variantModal, setVariantModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editVariant, setEditVariant] = useState<boolean>(false);
  const [editVariantIndex, setEditVariantIndex] = useState<number>(-1);

  const {subCategories, isSubCategoryLoading} = useFetchSubCategories({
    selectedCategory,
  });
  const removeVariant = (deleteIndex: number) => {
    const tempVariants = variants?.filter((variant, index) => {
      return index !== deleteIndex;
    });
    setVariants(tempVariants ? tempVariants : null);
  };
  const addProduct = async () => {
    if (
      selectedCategory &&
      selectedSubCategory &&
      productName &&
      companyName &&
      productDescription &&
      image &&
      variants
    ) {
      setIsLoading(true);
      const response = await createProduct({
        token: token,
        payload: {
          name: productName,
          subcategory_id: selectedSubCategory._id,
          company_name: companyName,
          product_description: productDescription,
          image: image && image[0].base64,
          number_of_variants: variants.length.toString(),
          variants: variants,
        },
      });
      if (response.status === 200) {
        ToastAndroid.show('Product Added!', ToastAndroid.SHORT);
        cleanForm();
      } else {
        ToastAndroid.show('Operation Failed!', ToastAndroid.SHORT);
      }
      setIsLoading(false);
    } else {
      ToastAndroid.show('Enter All Data!', ToastAndroid.SHORT);
    }
  };
  const cleanForm = () => {
    setSelectedCategory(undefined);
    setSelectedSubCategory(undefined);
    setProductName('');
    setCompanyName('');
    setProductDescription('');
    setImage(null);
    setVariants(null);
    setVariantModal(false);
    setEditVariant(false);
    setEditVariantIndex(-1);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeadingTextComponent text={'Add Product'} />

      <DropdownInputComponent
        value={selectedCategory}
        setValue={setSelectedCategory}
        label={'Select Category*'}
        data={categories}
        isLoading={isCategoryLoading}
      />
      <DropdownInputComponent
        value={selectedSubCategory}
        setValue={setSelectedSubCategory}
        label={'Select SubCategory*'}
        data={subCategories}
        isLoading={isSubCategoryLoading}
      />
      <LoginInputComponent
        placeholder="Product Name"
        label={'Product Name'}
        value={productName}
        setValue={setProductName}
      />
      <LoginInputComponent
        placeholder="Company name"
        label={'Company Name'}
        value={companyName}
        setValue={setCompanyName}
      />
      <LoginInputComponent
        placeholder="Product Description"
        value={productDescription}
        label={'Product Description'}
        setValue={setProductDescription}
        isMultiline={true}
        numberOfLines={3}
      />
      <ImageInputComponent image={image} setImage={setImage} />
      <View
        style={[
          styles.rowContainer,
          {marginVertical: responsiveHeight(16), flexWrap: 'wrap'},
        ]}>
        {variants?.map((variant, index) => {
          return (
            <View
              key={index}
              style={{
                alignSelf: 'flex-start',
                marginRight: responsiveWidth(16),
                marginVertical: responsiveHeight(12),
              }}>
              <TouchableOpacity
                onPress={() => removeVariant(index)}
                style={{
                  position: 'absolute',
                  top: -15,
                  right: -15,
                  zIndex: 10,
                }}>
                <Icon
                  name="close-circle-outline"
                  color={COLORS.RED}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEditVariant(true);
                  setEditVariantIndex(index);
                  console.log('Index ', index);

                  setVariantModal(true);
                }}
                style={{
                  backgroundColor: COLORS.GREEN,
                  borderRadius: 6,
                  padding: responsiveHeight(8),
                }}>
                <Text style={styles.variantText}>Units: {variant.units}</Text>
                <Text style={styles.variantText}>
                  MRP: ₹{variant.max_retail_price}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        style={[styles.rowContainer, {marginBottom: responsiveHeight(16)}]}
        onPress={() => setVariantModal(true)}>
        <Icon name={'plus-circle-outline'} size={24} color={COLORS.GREY} />
        <Text style={styles.text}>Add Product Variant</Text>
      </TouchableOpacity>
      <View style={{marginVertical: responsiveHeight(24)}}>
        {isLoading ? (
          <GreenButtonComponent isLoading={true} />
        ) : (
          <GreenButtonComponent buttonText="Add Product" onPress={addProduct} />
        )}
      </View>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={variantModal}
        onRequestClose={() => {
          setVariantModal(!variantModal);
        }}>
        <AddVariantComponent
          setModal={setVariantModal}
          setVariants={setVariants}
          editVariant={editVariant}
          setEditVariant={setEditVariant}
          editIndex={editVariantIndex}
          variants={variants ? variants : []}
        />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(32),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.GREY,
    fontSize: respFontSize(12),
    fontWeight: '500',
    marginLeft: responsiveWidth(4),
  },
  variantText: {
    color: COLORS.WHITE,
    // backgroundColor: COLORS.GREEN,
    fontSize: respFontSize(12),
    fontWeight: '500',
    marginLeft: responsiveWidth(4),
    padding: responsiveHeight(2),
    borderRadius: 5,
  },
  label: {
    fontWeight: '700',
    color: COLORS.BLACK,
    marginTop: responsiveHeight(4),
  },
});
