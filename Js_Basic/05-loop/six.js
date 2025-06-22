const number = [1,2,3,4,5,6,7,8,9,10];

// const item = number.filter( (num) => num >=8 )

// console.log(item);

const item = number.filter( (num) => {
    return num >=5
} )

console.log(item);



const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publisher: "HarperCollins",
    publishedYear: 1988,
    editionYear: 1988
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    publisher: "Avery",
    publishedYear: 2018,
    editionYear: 2018
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    publisher: "Warner Books",
    publishedYear: 1997,
    editionYear: 2000
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    publisher: "Prentice Hall",
    publishedYear: 2008,
    editionYear: 2008
  },
  {
    id: 5,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    publisher: "O'Reilly Media",
    publishedYear: 2015,
    editionYear: 2020
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    genre: "Programming",
    publisher: "Addison-Wesley",
    publishedYear: 1999,
    editionYear: 2019
  },
  {
    id: 7,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    publisher: "Grand Central Publishing",
    publishedYear: 2016,
    editionYear: 2016
  },
  {
    id: 8,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    genre: "Programming",
    publisher: "No Starch Press",
    publishedYear: 2011,
    editionYear: 2018
  },
  {
    id: 9,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Motivational",
    publisher: "The Ralston Society",
    publishedYear: 1937,
    editionYear: 1953
  },
  {
    id: 10,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    publisher: "Crown Business",
    publishedYear: 2011,
    editionYear: 2011
  }
];


// const userBook = books.filter( (book) => {
    
//      return book.genre === "Programming"
// })

// console.log(userBook, userBook.length);


const userBook = books.filter( (book) => {
    return book.publishedYear <= 1980
})

console.log(userBook);

