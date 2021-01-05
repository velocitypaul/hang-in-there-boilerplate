// query selector variables go here 👇

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

//buttons
var showRandomButton = document.querySelector(".show-random");
var showFormButton = document.querySelector(".show-form");
var showMainButton = document.querySelector(".show-main");
var returnToMainButton = document.querySelector(".back-to-main");
var showSavedPostersButton = document.querySelector(".show-saved");
var showMyPosterButton = document.querySelector(".make-poster");
var saveThisPosterButton = document.querySelector(".save-poster");

//sections
var mainSection = document.querySelector(".main-poster");
var formSection = document.querySelector(".poster-form");
var savedPostersSection = document.querySelector(".saved-posters");
var savedPostersGrid = document.querySelector(".saved-posters-grid");

//poster elements
var mainImageElement = document.querySelector(".main-poster img");
var mainTitleElement = document.querySelector(".main-poster .poster-title");
var mainQuoteElement = document.querySelector(".main-poster .poster-quote");

// event listeners go here 👇
showRandomButton.addEventListener("click", createRandomPoster);

saveThisPosterButton.addEventListener(
  "click",
  function () {
    savePoster(currentPoster);
  },
  { once: true }
);

showMainButton.addEventListener("click", function () {
  hideAllSectionsButOne(mainSection);
});

returnToMainButton.addEventListener("click", function () {
  hideAllSectionsButOne(mainSection);
});

showFormButton.addEventListener("click", function () {
  hideAllSectionsButOne(formSection);
});

showSavedPostersButton.addEventListener("click", function () {
  hideAllSectionsButOne(savedPostersSection);
});

showMyPosterButton.addEventListener("click", function (event) {
  event.preventDefault();
  createCustomPoster();
});

// functions and event handlers go here 👇
function getRandomValueFromArray(array) {
  // get a random index from an array and return the value

  var randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

function createRandomPoster() {
  //get random values from the content arrays and pass them to the newPoster() function

  var randImg = getRandomValueFromArray(images);
  var randTitle = getRandomValueFromArray(titles);
  var randQuote = getRandomValueFromArray(quotes);
  newPoster(randImg, randTitle, randQuote);
}

function hideAllSectionsButOne(sectionToShow) {
  //Find all sections in the dom
  //Iterate through each so that only the section we want showing does not have the hidden class

  var sections = document.querySelectorAll("section");
  for (let section of sections) {
    if (section === sectionToShow) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  }
}

function newPoster(image, title, quote) {
  //create a new Poster object
  //display new Poster object in Main Poster section

  currentPoster = new Poster(image, title, quote);
  mainImageElement.setAttribute("src", currentPoster.imageURL);
  mainTitleElement.innerText = currentPoster.title;
  mainQuoteElement.innerText = currentPoster.quote;
}

function createCustomPoster() {
  //get form input values
  //Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data
  //Change back to the main poster view (hiding the form view again)
  //Display the newly created poster image, title, and quote in the main view, and add to data model

  var customImage = document.querySelector("#poster-image-url").value;
  var customTitle = document.querySelector("#poster-title").value;
  var customQuote = document.querySelector("#poster-quote").value;
  images.push(customImage);
  titles.push(customTitle);
  quotes.push(customQuote);
  hideAllSectionsButOne(mainSection);
  newPoster(customImage, customTitle, customQuote);
}

function savePoster(poster) {
  //check for a duplicate of the poster id
  //if no duplicate id exists, add currentPoster into savedPosters array
  //display the saved posters section and hide others
  //render all savedPosters
  //re-initiate the Save this Poster listener so additional posters can be saved
  var checkForDuplicate = savedPosters.find(
    (posters) => posters.id === poster.id
  );

  if (checkForDuplicate === undefined) {
    savedPosters.push(poster);
    hideAllSectionsButOne(savedPostersSection);
    renderSavedPosters();
  } else {
    alert("Wait, there is a duplicate poster like this one already saved.");
  }

  saveThisPosterButton.addEventListener(
    "click",
    function () {
      savePoster(currentPoster);
    },
    { once: true }
  );
}

function renderSavedPosters() {
  //iterate through each poster in savedPosters object and display in html

  var savedPostersHTML = "";
  savedPosters.forEach(function (poster) {
    savedPostersHTML += `
      <div data-id="${poster.id}" class="mini-poster">
        <img src="${poster.imageURL}" />
        <h2>${poster.title}</h2>
        <h4>${poster.quote}</h4>
      </div>
    `;
  });
  savedPostersGrid.innerHTML = savedPostersHTML;
  listenForSavedPosterClicks();
}

function listenForSavedPosterClicks() {
  //Iterate through mini-posters and add an event listener to delete on double click
  //remove HTML element that was double-clicked from the DOM
  //remove poster that was doubleclicked from the data model

  var posterElements = document.querySelectorAll(".mini-poster");
  for (let posterElement of posterElements) {
    posterElement.addEventListener("dblclick", function (event) {
      event.preventDefault();
      var posterId = posterElement.dataset.id;
      posterElement.remove();
      deletePosterFromArray(posterId);
    });
  }
}

function deletePosterFromArray(id) {
  //find poster with the correct ID
  //delete poster from SavedPosters

  var idToDelete = id;
  var indexToDelete = savedPosters.findIndex((poster) => id === idToDelete);
  savedPosters.splice(indexToDelete, 1);
}

//create a random poster on page load
window.onload = function () {
  createRandomPoster();
};
