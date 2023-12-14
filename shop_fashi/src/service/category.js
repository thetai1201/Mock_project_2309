import axios from "axios";
import { categoryUrl } from "./Api";
import { getAuthorizationHeader } from "./token";

export const getAllCategoryApi = async () => {
  try {
    const response = await axios.get(categoryUrl.concat("/all"), {
      headers: getAuthorizationHeader(),
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const addCategoryApi = async (categoryData) => {
  try {
    const response = await axios.post(`${categoryUrl}/add`, categoryData, {
      headers: {
        ...getAuthorizationHeader(),
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};
