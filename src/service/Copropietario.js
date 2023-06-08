
import { getToken } from "./Usuario"
import axios from "axios"
let url = 'https://sisinfo-production-268b.up.railway.app/conpropietario/'

export const getCopropietario =()=>
    fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error))