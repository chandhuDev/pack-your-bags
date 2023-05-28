import axios from "axios";
const server_url = process.env.REACT_APP_STRAPI_URL;
export default function signUpUser(username, email, password) {
  axios
    .post(
      `${server_url}/api/auth/local/register`,
      {
        username: username,
        email: email,
        password: password,
      }
    )
    .then((response) => {
      // Handle success.
      console.log(response.data.user);
      localStorage.setItem("user", response.data.user);
      localStorage.setItem("JWT", response.data.jwt);
    })
    .catch((error) => {
      // Handle error.
      window.alert("An error occurred:", error.response);
    });
}
