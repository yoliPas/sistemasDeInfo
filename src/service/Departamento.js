import { getToken } from "./Usuario"
import axios from "axios"
let url = 'https://sisinfo-production-268b.up.railway.app/departamento/'


export const getDepartamento =()=>
    fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error))
  
export    const enviarDatosDepartamento = (data) => {
      return new Promise((resolve, reject) => {
        const token = getToken();
        axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log("Error en la solicitud POST:", error);
          reject(error);
        });
      });
    };
