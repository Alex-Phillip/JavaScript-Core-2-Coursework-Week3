function readingList(books) {
  //"content" div link
  let contentDiv = document.getElementById("content");
  //create new "p" element
  let paragraph = document.createElement("p");
  //create new "img" element
  let image = document.createElement("img");
  //create new "ul" element
  let unorderedList = document.createElement("ul");
  //create new "li" element
  let list = document.createElement("li");
  
  //loop through objects inside "books" array
  for (let i = 0; i < books.length; i++) {
  //set text content of "p" element
    paragraph.innerText = `${books[i].title} by ${books[i].author}`;
  //append text content to "li" element
    list.appendChild(paragraph);
  //set content of "img" element
    image.src = `${books[i].bookCoverImage}`;
  //append image content to "li" element
    list.appendChild(image);
  //if statement to check if book has been read
    (books[i].alreadyRead === true)
    ? list.style.backgroundColor = "green"
    : list.style.backgroundColor = "red";
  //append "li" element to "ul" element
    unorderedList.appendChild(list);
  //append "ul" element to "content" div
    contentDiv.appendChild(unorderedList);
    }
  };

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);