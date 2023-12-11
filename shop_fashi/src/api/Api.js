import axios from "axios";

export async function productsData(){
    const products = await axios.get(
        "http://localhost:8080/api/v1/products/all"
    );
    return products;
}