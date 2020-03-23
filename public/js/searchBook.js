const data = {
  "data": [
    [
      {
        "kind": "books#volume",
        "id": "Sm5AKLXKxHgC", "etag": "9dv/+nf2AW0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/Sm5AKLXKxHgC",
        "volumeInfo": {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "authors": ["J.K. Rowling"], 
          "publisher": "Pottermore Publishing",
          "publishedDate": "2015-12-08",
          "description": "\u003cp\u003e\u003ci\u003e'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.'\u003c/i\u003e\u003cbr\u003e\u003cbr\u003eWhen the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...\u003c/p\u003e",
          "industryIdentifiers": [
            { 
              "type": "ISBN_10",
             "identifier": "1781100519" },
              { "type": "ISBN_13", 
              "identifier": "9781781100516" }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 448,
          "printedPageCount": 469,
          "printType": "BOOK",
          "categories": [
            "Fiction / Action & Adventure", "Fiction / Fantasy / Contemporary", "Juvenile Fiction / Action & Adventure / General",
            "Juvenile Fiction / Fantasy & Magic", "Young Adult Fiction / Action & Adventure / General",
            "Young Adult Fiction / Fantasy / Wizards & Witches", "Young Adult Fiction / School & Education / Boarding School & Prep School",
            "Fiction / Fantasy / General", "Juvenile Fiction / School & Education"
          ],
          "averageRating": 4.5,
          "ratingsCount": 2495,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.17.16.0.preview.2",
          "panelizationSummary":
           {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks":
          {
            "smallThumbnail": "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72VnSPrh79JMOSpi5YMGJiAPuDLhwD9J1qu4NA1PTrFO8atEh5KGnmctMEeO3oBMPgqdr4zhiV4FlOjPHUR2dIcaU3vbV3ISgnt8Rr-GFT7hCMSb_g-ThO_Nx5XrAnPWuCbbXsK&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE706fG9Pu_T4HcnJhyhgCzoDQhhq-XjiPUYBZsSQNNPu7Li5sMl0Dy3e6jnx9zxual3nJC2-WkkyJJ_lhfQBcSbl5iGS07Br37y9-QeodI7wFEvF6dmKLz_9_KHZF9URYS67f8Ci&source=gbs_api"
          },
          "language": "en", "previewLink": "http://books.google.com.tr/books?id=Sm5AKLXKxHgC&hl=&source=gbs_api", "infoLink": "https://play.google.com/store/books/details?id=Sm5AKLXKxHgC&source=gbs_api", "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Sm5AKLXKxHgC"
        },
        "layerInfo": {
          "layers": [{
            "layerId": "geo", "volumeAnnotationsVersion": "25"
          }
          ]
        },
        "saleInfo": {
          "country": "TR", "saleability": "NOT_FOR_SALE", "isEbook": false
        },
        "accessInfo": {
          "country": "TR",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED"
          , "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=Sm5AKLXKxHgC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE", "quoteSharingAllowed": false
        }
      },
    ]
  ] // "data" : []
} // const = data

new Vue({
  el: '#demo',
  data() {
    return {
      data: data.data
    }
  },
  computed: {
    nameOfBook() {
      return this.data.map(dataSet => dataSet[0])
    }
  }
});