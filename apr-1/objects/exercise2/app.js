var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Biden",
    title: "The Road Ahead",
    readingStatus: false,
  },
  {
    author: "Jeff Bezos",
    title: "The Road Ahead",
    readingStatus: true,
  },
];

function displayStatus(library) {
  library.map((entry) =>
    console.log(`${entry.author} reading status -> ${entry.readingStatus}`)
  );
}

displayStatus(library);
