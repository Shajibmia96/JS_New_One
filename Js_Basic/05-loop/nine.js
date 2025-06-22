const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publisher: "HarperCollins",
    publishedYear: 1988,
    editionYear: 1988,
    price: 12.99
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    publisher: "Avery",
    publishedYear: 2018,
    editionYear: 2018,
    price: 16.50
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    publisher: "Warner Books",
    publishedYear: 1997,
    editionYear: 2000,
    price: 10.99
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    publisher: "Prentice Hall",
    publishedYear: 2008,
    editionYear: 2008,
    price: 28.99
  },
  {
    id: 5,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    publisher: "O'Reilly Media",
    publishedYear: 2015,
    editionYear: 2020,
    price: 34.95
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    genre: "Programming",
    publisher: "Addison-Wesley",
    publishedYear: 1999,
    editionYear: 2019,
    price: 42.00
  },
  {
    id: 7,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    publisher: "Grand Central Publishing",
    publishedYear: 2016,
    editionYear: 2016,
    price: 18.99
  },
  {
    id: 8,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    genre: "Programming",
    publisher: "No Starch Press",
    publishedYear: 2011,
    editionYear: 2018,
    price: 24.95
  },
  {
    id: 9,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Motivational",
    publisher: "The Ralston Society",
    publishedYear: 1937,
    editionYear: 1953,
    price: 9.99
  },
  {
    id: 10,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    publisher: "Crown Business",
    publishedYear: 2011,
    editionYear: 2011,
    price: 19.99
  }
];


const totalPrice = books.map( (book) => book)
                        .filter((book) => book.publishedYear >= 2000)
                        .reduce((acc, book) => {return  acc + book.price},0)


console.log( parseFloat (totalPrice.toFixed(2)));

