window.onload = function() {
  var app = new Vue({
    el: "#app",
    data: {
      message: "Hello Vue World",
      books: [
        {
          id: "books#volume",
          selflink: "https://www.googleapis.com/books/v1/volumes/wrOQLV6xB-wC",
          title: "Harry Potter and the Sorcerer's Stone",
          authors: ["J.K. Rowling"],
          publisher: "Pottermore Publishing",
          publisheddate: "2015-12-08",
          description:
            "\"Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
          isbn13: "9781781100486",
          isbn10: "1781100489",
          totalpages: 309,
          rating: 4.5,
          previewlink:
            "http://books.google.ca/books?id=wrOQLV6xB-wC&dq=isbn:9781781100486&hl=&cd=1&source=gbs_api",
          smallthumbnail:
            "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },

        {
          id: "books#volume",
          selflink: "https://www.googleapis.com/books/v1/volumes/Sm5AKLXKxHgC",
          title: "Harry Potter and the Prisoner of Azkaban",
          authors: ["J.K. Rowling"],
          publisher: "Pottermore Publishing",
          publisheddate: "2015-12-08",
          description:
            "'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.' When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...",
          isbn13: "9781781100516",
          isbn10: "1781100519",
          totalpages: 448,
          rating: 4.5,
          previewlink:
            "http://books.google.ca/books?id=Sm5AKLXKxHgC&dq=isbn:9781781100516&hl=&cd=1&source=gbs_api",
          smallthumbnail:
            "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }
      ]
    }
  });
};
