import axios from "axios";

export function login(usuario, password) {

  axios
    .post("https://sisinfo-production-268b.up.railway.app/auth/login", {
      email: usuario,
      password: password,
    })
    .then(function (response) {
        localStorage.setItem('token', response.data.access_token)
        console.log(response.data.access_token)
  
    })
    .catch(function (error) {
      console.log(error, "error");
    });
}

export function getToken() {
  return localStorage.getItem("token");
}


