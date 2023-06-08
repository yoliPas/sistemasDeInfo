const url = 'https://sisinfo-production-268b.up.railway.app/users/get_user_user__get';

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  })
  .then(users => {
    console.log(users);
    // Aquí puedes trabajar con los usuarios obtenidos
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });
