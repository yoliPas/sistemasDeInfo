import { getToken } from "./Usuario"
import axios from "axios"
let url = 'https://sisinfo-production-268b.up.railway.app/conserje'

export const getConserje =()=>
    fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error))

    export const enviarDatosConserje = async (data) => {
        try {
          const token = getToken();
          const params = new URLSearchParams(data);
          params.delete("foto")
          console.log(params.toString())
          const formData = new FormData()
            formData.append('photo', data.foto[0])
          const requestUrl = `https://sisinfo-production-268b.up.railway.app/conserje/?${params.toString()}`;
            console.log(data)
          const response = await axios.post(requestUrl, formData, {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`
              
            },
          });
      
          return response.data;
        } catch (error) {
          console.log('Error en la solicitud POST:', error);
          throw error;
        }
      };