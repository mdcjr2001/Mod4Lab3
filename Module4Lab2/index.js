function addCard(title = " Untitles", text = "Missing Text", imageURL) {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
  
    template.querySelector(".card-img-top").src = imageURL;
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = text;
  
    document.querySelector("#card-list").appendChild(template);
  }
  
  addCard();
  
  const data = [
    { name: "Christina", age: 30 },
    { name: "Sam", age: 31 },
  ];
  
  data.forEach((person) => {
    addCard(person.name, `Age: ${person.age}`);
  });
  
  const artists = [
      {
        name: "Van Gogh",
        portfolio: [
          {
            title: "portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
          },
          {
            title: "sky",
            url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
          },
        ],
      },
      {
        name: "Pablo Picasso",
        portfolio: [
          {
            title: "cubism",
            url: "https://www.pablopicasso.org/images/paintings/guernica.jpg",
          },
          {
            title: "blue period",
            url: "https://www.pablopicasso.org/images/paintings/old-guitarist.jpg",
          },
        ],
      },
      {
        name: "Leonardo da Vinci",
        portfolio: [
          {
            title: "Mona Lisa",
            url: "https://www.leonardodavinci.net/images/gallery/mona-lisa.jpg",
          },
          {
            title: "The Last Supper",
            url: "https://www.leonardodavinci.net/images/gallery/the-last-supper.jpg",
          },
        ],
      },
    ];
    
    artists.forEach((artist) => {
      artist.portfolio.forEach((artwork) => {
        addCard(artist.name, artwork.title, artwork.url);
      });
    });
    