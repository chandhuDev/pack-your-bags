import axios from "axios";
import { Route } from 'react-router-dom'
const server_url = process.env.REACT_APP_STRAPI_URL;
export default async function signInUser(email, password) {
  axios
    .post(`${server_url}/api/auth/local`, {
      identifier: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem("user", response.data.user)
      localStorage.setItem("JWT", response.data.jwt)
      Route.history.push('/product')
     })
    .catch((error) => {
      window.alert("An error occurred:",error.message);
    });
}
