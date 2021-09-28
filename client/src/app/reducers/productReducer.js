export const getAllProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        loading: true,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        loading: false,
      };
    case "GET_PRODUCTS_ERROR":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTBYID_REQUEST":
      return {
        loading: true,
      };
    case "GET_PRODUCTBYID_SUCCESS":
      return {
        product: action.payload,
        loading: false,
      };
    case "GET_PRODUCTBYID_ERROR":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCTREVIEW_REQUEST":
      return {
        loading: true,
      };
    case "ADD_PRODUCTREVIEW_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_PRODUCTREVIEW_FAILED":
      return {
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DELETE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "DELETE_PRODUCT_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addNewProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_ADD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "ADD_PRODUCT_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
