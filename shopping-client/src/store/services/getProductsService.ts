import axios from "axios";
export default async function getProductsApi() {
  const result = await axios.get("https://dummyjson.com/products");
  return result.data.products;
}
