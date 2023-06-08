const db =()=>{
  let url = 'https://sisinfo-production-268b.up.railway.app/departamento/'
  fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  })
  .then(data => {
    console.log(data);
    // Aquí puedes trabajar con los datos obtenidos
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
}
console.log('Este es un mensaje de registro');

export default db