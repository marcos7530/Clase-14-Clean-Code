/* Tercera parte: modificar la función de la primera parte para que ahora funcione 
si mando el nombre completo del autor, o solo su apellido. 
Por ejemplo, la función debe devolver lo siguiente, ya sea si le mando 
‘Jorge Luis Borges’ o ‘Borges’:  */


const books = [
    { title: 'El Aleph', author: 'Jorge Luis Borges' },
    { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'Rayuela', author: 'Julio Cortázar' },
    { title: 'Ficciones', author: 'Jorge Luis Borges' },
    { title: 'El hacedor', author: 'Jorge Luis Borges' },
    { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
    { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
    { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
    { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
    { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
    { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { title: 'Bestiario', author: 'Julio Cortázar' },
    { title: 'Las armas secretas', author: 'Julio Cortázar' }
  ];
  
  //console.log(filterBooksByAuthor(books,'Jorge Luis Borges'));//OPCION 1
  console.log(filterBooksByAuthor(books,'Borges'));//OPCION 2

  function filterBooksByAuthor(books, authorName)
  {
    return books.filter(books => books.author.includes(authorName));
  }