function addCard(title = "Untitled", text = "Missing text"){
    const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = text;

    document.querySelector('#card-list').appendChild(template);
}

// addCard()("First title", "Cool beans");
// addCard()("Secind title", "Cooler beans");
// addCard()("Third title", "Coolest beans");

const carData = [
    {
      title: "Audi",
      description:
        "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
    },
    {
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.",
    },
    {
      title: "BMW",
      description:
        "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria,  Germany.",
    },
  ];

  function getCars() {
    return new Promise(resolve => {
        setTimeout(function(){
        resolve(carData)
    }, 1000)
    })
  }

function addCard2(car) {
    const template = document.getElementById("car-template").content.cloneNode(true)

    template.querySelector('.card-title').innerText = car.title;
    template.querySelector('.card-text').innerText = car.description;

    document.querySelector('#car-list').appendChild(template)
}

  getCars().then((cars) => cars.forEach(car => addCard2(car)))