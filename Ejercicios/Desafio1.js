/* Primera parte: dado un array de libros, implementar una función filterBooksByAuthor( ) 
que reciba por parámetros dicho array y un string con el nombre de un autor, 
y devuelva un nuevo array con libros del autor indicado. */


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
  
  console.log(filterBooksByAuthor(books,'Jorge Luis Borges'));

  function filterBooksByAuthor(books, author)
  {
    return books.filter(books => books.author===author);
  }