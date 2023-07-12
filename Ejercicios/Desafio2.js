/* Segunda parte: a partir de lo realizado en la primera parte, 
utilizar la función para obtener todos los libros de un autor a elección, 
luego mediante métodos de array modificar el nombre del autor de todos los libros filtrados.
Observar que si se muestra en consola los libros filtrados se verá el autor modificado. 
¿Qué sucede si se muestra en consola el array original? */


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
  
  let filteredBooks=filterBooksByAuthor(books,'Jorge Luis Borges');

  let modifiedBooks = filteredBooks.map(book => {
        return{
            ...book,
            author: `miguito`,
        };
  });

  console.log(modifiedBooks); 
  console.log(filteredBooks);
  console.log(books);

  function filterBooksByAuthor(books, author)
  {
    return books.filter(books => books.author===author);
  }