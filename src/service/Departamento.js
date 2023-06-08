let url = 'https://sisinfo-production-268b.up.railway.app/departamento/'

const db =()=>{
    fetch(url)
    .then((response) => response.json())
    .then(data )
  }
  
  export default db