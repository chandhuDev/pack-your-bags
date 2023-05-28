import { query } from "../Utils/Images";
const server_url = process.env.REACT_APP_STRAPI_URL;
export default async function getAOneProduct(id) {
  const response = await fetch(
    `${server_url}/api/places/${id}?${query}`
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
