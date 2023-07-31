console.log("Hello")
const URL = 'https://api.thecatapi.com/v1/images/search?limit=3';
 

// fetch(URL)
//   .then(response => response.json())
//   .then(data => {
//   const img = document.querySelector('img');
//   img.src = data[0].url

//   });


  
// El código que proporcionaste está utilizando la función fetch para hacer una solicitud HTTP a la URL especificada y luego manipula la respuesta JSON para mostrar una imagen en una etiqueta img. Para mejorar este código, puedes realizar algunas mejoras y considerar manejar posibles errores. Aquí hay algunas sugerencias:

// Manejar errores: Agregar un bloque .catch() después del último .then() para manejar posibles errores en la solicitud o el procesamiento de la respuesta.

// Verificar la respuesta: Antes de acceder a la propiedad data[0].url, asegúrate de que la respuesta sea válida y contenga los datos esperados. Podrías agregar una comprobación para verificar si data es un array y si contiene al menos un elemento.

// Usar funciones independientes: Si planeas reutilizar esta funcionalidad en varios lugares, considera encapsularla en una función independiente para hacerla más modular y reutilizable.

// Controlar el estado de la imagen: Agregar una lógica para manejar casos en los que la imagen no se pueda cargar, por ejemplo, mostrando una imagen alternativa o un mensaje de error.

  // function cargarImagenDesdeURL(url) {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Error en la solicitud. Código de estado: ' + response.status);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (Array.isArray(data) && data.length > 0) {
  //         const img = document.querySelector('img');
  //         img.src = data[0].url;
  //         img.alt = data[0].descripcion || 'Imagen cargada desde el servidor';
  //       } else {
  //         throw new Error('Respuesta inválida o datos no encontrados.');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error en la carga de la imagen:', error.message);
  //       // Puedes mostrar un mensaje de error en la interfaz de usuario si lo deseas.
  //     });
  // }

  const container = document.querySelector('section');
  async function cargarImagenDesdeURL(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud. Código de estado: ' + response.status);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {

        data.map(image => {
          const img = document.createElement('img')
          img.src= image.url
          console.log(image.url);
          container.append(img)
          

        })

        const img = document.querySelector('img');
        img.src = data[0].url;
        img.alt = data[0].descripcion || 'Imagen cargada desde el servidor';
      } else {
        throw new Error('Respuesta inválida o datos no encontrados.');
      }
    } catch (error) {
      console.error('Error en la carga de la imagen:', error.message);
      // Puedes mostrar un mensaje de error en la interfaz de usuario si lo deseas.
    }
  }
cargarImagenDesdeURL(URL);


// Obtener referencia al botón
const fetchButton = document.getElementById('fetchButton');

// Agregar evento de clic al botón
fetchButton.addEventListener('click', () => {
  cargarImagenDesdeURL(URL);
});