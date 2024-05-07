
interface Bestseller {
    id: string;
    name: string;
    products: Product[];
  }

type Product = {
    id: string;
    parentId: string | null;
    deliveryTime: string;
    name: string;
    photos: any[]; 
    discountAvailable: boolean;
    discountPrize?: string; 
    actualPrize: string;
    discountOff?: string; 
    units: string;
    companyName: string;
    optionsAvailable: boolean;
    options?: ProductOption[];
    productDetail?: string;
}


type ProductOption = {
    id: string;
    parentId: string | null;
    name: string;
    photos: any[];
    discountPrize?: string; 
    actualPrize: string;
    discountOff?: string; 
    units: string;
    discountAvailable: boolean;
}

type SubCategory = {
  id: string;
  title: string;
  image: any; 
  productList: Product[];
}

type Category = {
  id: string;
  image: any; 
  title: string;
  subCategories?:  SubCategory[];
}

type UserInfo = {
  id: string,
  name: string,
  email: string,
  photo: string,
  givenName: string,
  familyName: string,
}

type User = {
  userInfo: UserInfo | null;
  isLoggedIn: boolean;
  token: string | null;
}


type CartItem = {
  productId: string,
  productParentId: string | null,
  productImage: any,
  productName: string,
  productUnits: string,
  discountAvailable: boolean;
  discountPrice?: string; 
  actualPrice: string;
  quantity: number,
}

type Cart = {
  cartItems: CartItem[],
  totalPrice: number,
  totalItems: number,
}

type Order = {
  orderId: string,
  orderDate: string,
  orderStatus: string,
  orderTotal: number,
  orderItems: CartItem[],
  deliveryTime: string,
  paymentMode: string,
}

type Orders = {
  ordersList: Order[] | [],
}