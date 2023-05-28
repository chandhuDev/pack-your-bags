import { query } from "../Utils/Images";
const server_url = process.env.REACT_APP_STRAPI_URL;
export default async function getAllProducts() {
  const response = await fetch(
    `${server_url}/api/places?${query}`
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
