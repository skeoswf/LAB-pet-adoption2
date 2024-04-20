const pets = [
    {
      id: 1,
      name: "dusty",
      color: "green",
      specialSkill: "gives sincere apologies",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "trouble",
      color: "brown",
      specialSkill: "just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich",
      type: "dino",
      imageUrl: "./img/troubledino.png",
    },
    {
      id: 3,
      name: "whiskers",
      color: "yellow",
      specialSkill: "can prove he is a real man by drinking whiskey",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "coco",
      color: "black",
      specialSkill: "burps minimally",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "spooky",
      color: "brown",
      specialSkill: "comfortable in the outdoors for up to eight hours",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "tiger",
      color: "black",
      specialSkill: "can read (but cannot understand) hebrew",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "oreo",
      color: "yellow",
      specialSkill: "able to stop chewing ice or whistling on request",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "ginger",
      color: "grey",
      specialSkill: "comfortable in the outdoors for up to eight hours",
      type: "dino",
      imageUrl: "./img/gingerdino.png"
    },
    {
      id: 9,
      name: "sassy",
      color: "brown",
      specialSkill: "adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "sammy",
      color: "blue",
      specialSkill: "listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "coco",
      color: "orange",
      specialSkill: "can be around food without staring creepily at it",
      type: "dino",
      imageUrl: "./img/cocodino.png"
    },
    {
      id: 12,
      name: "buster",
      color: "green",
      specialSkill: "does not use excessive acronyms",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "chester",
      color: "red",
      specialSkill: "expertly quotes and recognizes dialogue from early seasons of The simpsons",
      type: "dog",
      imageUrl: "./img/chesterdog.png"
    },
    {
      id: 14,
      name: "samantha",
      color: "brown",
      specialSkill: "always up for dessert",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "coco",
      color: "red",
      specialSkill: "burps minimally",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "smokey",
      color: "brown",
      specialSkill: "drives at a safe rate of speed in snow or rain",
      type: "dino",
      imageUrl: "./img/smokeydino.png"
    },
    {
     id: 17,
      name: "muffin",
      color: "yellow",
      specialSkill: "does not freak out if you haven’t seen his favorite movie (the big lebowski).",
      type: "cat",
      imageUrl: "./img/muffincat.png"
    },
    {
      id: 18,
      name: "salem",
      color: "brown",
      specialSkill: "proficient in air guitar",
      type: "dino",
      imageUrl: "./img/salemdino.png"
    },
    {
      id: 19,
      name: "callie",
      color: "blue",
      specialSkill: "listens attentively to boring stories",
      type: "dog",
      imageUrl: "./img/calliedog.png"
    },
    {
      id: 20,
      name: "astrid",
      color: "black",
      specialSkill: "she's emo and has fire style",
      type: "cat",
      imageUrl: "./img/astridcat.png"
    },
    {
      id: 21,
      name: "miss kitty",
      color: "red",
      specialSkill: "owns a nintendo power glove",
      type: "dino",
      imageUrl: "./img/misskittydino.png"
    },
    {
        id: 22,
      name: "snuggles",
      color: "orange",
      specialSkill: "is comfortable with jokes about his receding hairline",
      type: "cat",
      imageUrl: "./img/snufflescat.png"
    },
    {
        id: 23,
      name: "buddy",
      color: "red",
      specialSkill: "enjoys fine wine",
      type: "dog",
      imageUrl: "./img/buddydog.png"
    },
    {
        id: 24,
      name: "george",
      color: "brown",
      specialSkill: "participates in karaoke but does not force others to go out to karaoke",
      type: "dog",
      imageUrl: "./img/georgedog.png"
    },
    {
      id: 25,
      name: "salem",
      color: "red",
      specialSkill: "knows the words to 4 rap songs",
      type: "cat",
      imageUrl: "./img/salemcat.png"
    },
    {
        id: 26,
      name: "bubba",
      color: "yellow",
      specialSkill: "cleans himself",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "chloe",
      color: "green",
      specialSkill: "admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "nala",
      color: "purple",
      specialSkill: "dances when he has to",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "oscar",
      color: "green",
      specialSkill: "gives hugs with appropriate pressure and for the right length of time",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "lucy",
      color: "red",
      specialSkill: "doesn’t get weirded out by the word “moist”",
      type: "dino",
      imageUrl: "./img/lucydino.png"
    }
  ];

const app = document.getElementById("app");

const catFilterButton = document.querySelector("#catFilter")
const dogFilterButton = document.querySelector("#dogFilter")
const dinoFilterButton = document.querySelector("#dinoFilter")
const noFilterButton = document.querySelector("#noFilter")


let domString = "";

pets.forEach((pet) => {
  domString += `<div class="card">
<div class="card-body">
  <h5 class="card-title">${pet.name}</h5>
  <img src="${pet.imageUrl}" class="card-img-top" alt="...">
  <h6>${pet.color}</h6>
  <p class="card-text description">${pet.specialSkill}</p>
  <p class="petType">${pet.type}</p>
</div>
</div>`
});

app.innerHTML = domString;

const catFilter = () => {
  domString = "";

  pets.forEach((pet) => {
    if (pet.type === "cat") {
    domString += `<div class="card">
<div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <h6>${pet.color}</h6>
    <p class="card-text description">${pet.specialSkill}</p>
    <p class="petType">${pet.type}</p>
</div>
</div>`
    }
    app.innerHTML = domString;
  });
}

const dogFilter = () => {

  domString = "";

  pets.forEach((pet) => {
    if (pet.type === "dog") {
    domString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <h6>${pet.color}</h6>
    <p class="card-text description">${pet.specialSkill}</p>
    <p class="petType">${pet.type}</p>
  </div>
</div>`
    }
    app.innerHTML = domString;
  });

}

const dinoFilter = () => {

  domString = "";

  pets.forEach((pet) => {
    if (pet.type === "dino") {
    domString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <h6>${pet.color}</h6>
    <p class="card-text description">${pet.specialSkill}</p>
    <p class="petType">${pet.type}</p>
  </div>
</div>`
    }
    app.innerHTML = domString;
  });

}

const noFilter = () => {

  domString = "";

  pets.forEach((pet) => {
    domString += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <h6>${pet.color}</h6>
    <p class="card-text description">${pet.specialSkill}</p>
    <p class="petType">${pet.type}</p>
  </div>
</div>`
    app.innerHTML = domString;
  });

}

catFilterButton.addEventListener('click', catFilter);
dogFilterButton.addEventListener('click', dogFilter);
dinoFilterButton.addEventListener('click', dinoFilter);
noFilterButton.addEventListener('click', noFilter);
