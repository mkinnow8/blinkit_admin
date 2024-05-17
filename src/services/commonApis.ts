import ApiConfig from "./apiConfig";
import commonApiFunction from "./commonApiFunction";

export const loginAPI = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.LOGIN;
  return commonApiFunction("post", url, null, payload);
};

export const registerAPI = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.REGISTER;
  return commonApiFunction("post", url, null, payload);
};

export const createCategory = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.CREATE_CATEGORY;
  // return commonApiFunction("post", url, null, payload, 'multipart/form-data');
  return commonApiFunction("post", url, payload.token, payload.payload,);
};
export const createSubcategory = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.CREATE_SUB_CATEGORY;
  return commonApiFunction("post", url, payload.token, payload.payload);
}
export const createProduct = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.CREATE_PRODUCT;
  return commonApiFunction("post", url, payload.token, payload.payload);
}

export const fetchCategories = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.GET_CATEGORIES;
  return commonApiFunction("get", url, payload.token);
};
export const fetchSubCategories = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.GET_SUB_CATEGORIES;
  return commonApiFunction("post", url, payload.token, payload.payload);
};
export const fetchProductsBySubCategories = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.GET_PRODUCTS_BY_SUB_CATEGORIES;
  return commonApiFunction("post", url, payload.token, payload.payload);
};

export const deleteCategory = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.DELETE_CATEGORY + payload.categoryId;
  return commonApiFunction("delete", url, payload.token);
};
export const deleteSubCategory = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.DELETE_SUB_CATEGORY + payload.subCategoryId;
  return commonApiFunction("delete", url, payload.token);
};
export const deleteProduct = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.DELETE_PRODUCT + payload.productId;
  return commonApiFunction("delete", url, payload.token);
};

export const updateCategory = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.UPDATE_CATEGORY;
  return commonApiFunction("put", url, payload.token, payload.payload);
};
export const updateSubCategory = (payload: any) => {
  const url = ApiConfig.BASE_URL + ApiConfig.UPDATE_SUB_CATEGORY;
  // return commonApiFunction("post", url, null, payload, 'multipart/form-data');
  return commonApiFunction("put", url, payload.token, payload.payload);
};

// export const createPostApi = async (payload) => {
//   const baseUrl = ApiConfig.BASE_URL + ApiConfig.CREATE_POST;
//   const queryParams = new URLSearchParams({
//     allow_comments: payload.allow_comments,
//     content: payload.content,
//   });
//   const url = `${baseUrl}?${queryParams.toString()}`;
//   console.log("url------>", url);
//   try {
//     const formData = new FormData();
//     formData.append("file", {
//       uri:
//         Platform.OS == "android"
//           ? payload.file
//           : payload.file.replace("file://", ""),
//       name: "abc",
//       type: "image/jpeg",
//     });

//     console.log(" payload , file ", formData);

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${payload.accessToken}`,
//       },
//       body: formData,
//     });

//     console.log("response--->", response);
//     if (!response.ok === "true") {
//       throw new Error(response.status, response.json());
//     }
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getPostApi = (payload) => {
//   const url = ApiConfig.BASE_URL + ApiConfig.GET_POST;
//   return commonApiFunction("get", url, payload.accessToken, payload);
// };


// export const createChatAPI = (payload) => {
//   const url = ApiConfig.BASE_URL + ApiConfig.CREATE_CHAT;
//   return commonApiFunction(
//     "post",
//     url,
//     payload.accessToken,
//     payload.payload.data
//   );
// };
