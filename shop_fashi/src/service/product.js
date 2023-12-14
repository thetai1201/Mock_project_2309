import axios from "axios";
import { productUrl } from "./Api";
import { getAuthorizationHeader } from "./token";


export async function productsData(){
    const products = await axios.get(
        productUrl.concat("/all")
    );
    return products;
}
export const getAllProductApi = async (options = {}) => {
  try {
    const { search, minPrice, maxPrice, ...otherOptions } = options;
    const searchQuery = search ? `search=${encodeURIComponent(search)}` : '';
    const minPriceQuery = minPrice !== undefined ? `minPrice=${minPrice}` : '';
    const maxPriceQuery = maxPrice !== undefined ? `maxPrice=${maxPrice}` : '';
    const queryString = [searchQuery, minPriceQuery, maxPriceQuery].filter(Boolean).join('&');
    const response = await axios.get(`${productUrl}/all${queryString ? `?${queryString}` : ''}`, otherOptions);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products.');
  }
};
export const deleteProductApi = async (productId) => {
  try {
    const response = await axios.delete(`${productUrl}/${productId}`, {
      headers: getAuthorizationHeader(),
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export const editProductApi = async (productId, updatedData) => {
  const { price, description } = updatedData;
  try {
    const response = await axios.put(
      `${productUrl}/${productId}`,
      { price, description },
      {
        headers: {
          ...getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error editing product:', error);
    throw error;
  }
};

export const addProductApi = async (formData) => {
  try {
    const response = await axios.post(productUrl.concat("/add"), formData, {
      headers: {
        ...getAuthorizationHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};