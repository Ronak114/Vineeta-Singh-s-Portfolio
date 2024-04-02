const num = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * num.length);
  }

//   function submitFeedback() {
//     // <!-- Get the user's feedback from an input element -->
//    const feedbackText = document.getElementById('feedback-input').value;
 
//     //  Display the feedback in the feedback element -->
//    const feedbackElement = document.getElementById('feedback');
//    feedbackElement.innerText = feedbackText;

//    function submitQuery(event) {
//     event.preventDefault(); // Prevent the form from submitting
  
//     // Get the user's input from the form fields
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const query = document.getElementById('query').value;
  
//     // Process the query in some way, such as sending it to a server using an AJAX request
//     // ...
//   }
//     const queryForm = document.getElementById('query-form');
//   queryForm.addEventListener('submit', submitQuery);
//  }
 // Load the YouTube API
function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Create a YouTube player and add the thumbnail image as background
function createYouTubePlayer(videoId, element) {
  const thumbnailUrl ="veneThumb.jpeg";
  element.style.backgroundImage = `url(${thumbnailUrl})`;

  new YT.Player(element, {
    videoId,
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'showinfo': 0,
      'rel': 0,
      'modestbranding': 1,
    },
  });
}

// Initialize the video wrapper elements with the YouTube player












// function initializeVideoWrappers() {
//   const videoWrappers = document.querySelectorAll('.video-wrapper');

//   for (const videoWrapper of videoWrappers) {
//     const videoId = videoWrapper.dataset.videoId;
//     createYouTubePlayer(videoId, videoWrapper);
//   }
// }

// Load the YouTube API and initialize the video wrappers on load
window.onload = () => {
  loadYouTubeAPI();
  initializeVideoWrappers();
}
// const slides = document.querySelectorAll('.slide');
// const next = document.querySelector('#next');
// const prev = document.querySelector('#prev');
// const auto = true;
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//   // Get current class
//   const current = document.querySelector('.active');
//   // Remove active class
//   current.classList.remove('active');
//   // Check for next slide
//   if (current.nextElementSibling) {
//     // Add active class to next sibling
//     current.nextElementSibling.classList.add('active');
//   } else {
//     // Add active class to first sibling
//     slides[0].classList.add('active');
//   }
//   // Reset interval
//   clearInterval(slideInterval);
//   slideInterval = setInterval(nextSlide, intervalTime);
// };

// const prevSlide = () => {
//   // Get current class
//   const current = document.querySelector('.active');
//   // Remove active class
//   current.classList.remove('active');
//   // Check for prev slide
//   if (current.previousElementSibling) {
//     // Add active class to prev sibling
//     current.previousElementSibling.classList.add('active');
//   } else {
//     // Add active class to last sibling
//     slides[slides.length - 1].classList.add('active');
//   }
//   // Reset interval
//   clearInterval(slideInterval);
//   slideInterval = setInterval(nextSlide, intervalTime);
// };

// // Button events
// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

// // Auto slide
// if (auto) {
//   // Run next slide at interval time
//   slideInterval = setInterval(nextSlide, intervalTime);
// }
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



window.addEventListener("resize", function() {
  var videoContainer = document.querySelector(".video-container");
  var video = document.querySelector(".video-container video");
  videoContainer.style.height = window.innerHeight + "px";
  video.style.minHeight = window.innerHeight + "px";
});

window.addEventListener("load", function() {
  var videoContainer = document.querySelector(".video-container");
  var video = document.querySelector(".video-container video");
  videoContainer.style.height = window.innerHeight + "px";
  video.style.minHeight = window.innerHeight + "px";
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
})
// })
       // Get the feedback input and feedback container
       const feedbackInput = document.getElementById("feedback-input");
       const feedbackContainer = document.getElementById("feedback-container");
       
       // Add event listener to submit button
       function submitFeedback() {
         const feedback = feedbackInput.value.trim();
       
         // Clear input field
         feedbackInput.value = "";
       
         // Add feedback to feedback container
         const feedbackDiv = document.createElement("div");
         feedbackDiv.textContent = feedback;
         feedbackContainer.appendChild(feedbackDiv);
       }
       
       // Get the query form and add event listener to submit button
       const queryForm = document.getElementById("query");
       queryForm.addEventListener("submit", function(event) {
         event.preventDefault(); // Prevent form from submitting
       
         // Get form data
         const name = document.getElementById("name").value;
         const email = document.getElementById("email").value;
         const query = document.getElementById("query-textarea").value.trim();
       
         // Clear form fields
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("query-textarea").value = "";
       
         // Display success message
         const successDiv = document.createElement("div");
         successDiv.textContent = "Thank you for submitting your query, " + name + "! We will get back to you at " + email + " as soon as possible.";
         successDiv.style.color = "green";
         document.getElementById("success").appendChild(successDiv);
       });




// const animText = document.querySelector(".anim-txt");
// const words = JSON.parse(animText.getAttribute("data-words"));

// let index = 0;
// let wordIndex = 0;
// let letterIndex = 0;
// let isDeleting = false;
// let isEnd = false;
// let speed = 100;

// function type() {
//   const currentWord = words[wordIndex];

//   if (isDeleting) {
//     animText.textContent = currentWord.substring(0, letterIndex - 1);
//     letterIndex--;
//   } else {
//     animText.textContent = currentWord.substring(0, letterIndex + 1);
//     letterIndex++;
//   }

//   if (!isDeleting && letterIndex === currentWord.length) {
//     isDeleting = true;
//     speed = 1500;
//   } else if (isDeleting && letterIndex === 0) {
//     isDeleting = false;
//     wordIndex++;
//     speed = 500;
//   }

//   if (wordIndex === words.length) {
//     wordIndex = 0;
//   }

//   setTimeout(() => {
//     type();
//   }, speed);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   if (words.length) {
//     type();
//   }
// });

// Get the words array and animation element
const words = document.querySelector(".anim-txt").dataset.words.split(",");
const animElement = document.querySelector(".anim-txt");

// Set initial word
let currentWordIndex = 0;
animElement.textContent = words[currentWordIndex];

// Animate words with delay
setInterval(() => {
  currentWordIndex++;
  if (currentWordIndex >= words.length) {
    currentWordIndex = 0;
  }
  animElement.textContent = words[currentWordIndex];
}, 1000);




  

  const achievements = [
    "Founded a successful startup",
    "Published a best-selling book",
    "Won a prestigious award",
    "Delivered a TED talk",
    "Graduated with honors from Harvard Law School"
  ];

  const achievementElement = document.getElementById("achievement");
  const randomIndex = Math.floor(Math.random() * achievements.length);
  achievementElement.innerText = achievements[randomIndex];

  const toggleEducationButton = document.getElementById("toggle-education");
  const educationList = document.getElementById("education");

  toggleEducationButton.addEventListener("click", () => {
    educationList.style.display = educationList.style.display === "none" ? "block" : "none";
  });



  
  // const queryForm = document.getElementById('query-form');
  // const suggestionForm = document.getElementById('suggestion-form');
  // const feedbackMessage = document.getElementById('feedback-message');
  
  // queryForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  
  //   const formData = new FormData(queryForm);
  //   const name = formData.get('name');
  //   const email = formData.get('email');
  //   const message = formData.get('message');
  
  //   // Here, you can add code to send the query form data to your server or do any other necessary action
  
  //   feedbackMessage.innerText = 'Query submitted successfully!';
  //   queryForm.reset();
  // });
  
  // suggestionForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  
  //   const formData = new FormData(suggestionForm);
  //   const topic = formData.get('topic');
  //   const description = formData.get('description');
  
  //   // Here, you can add code to send the suggestion form data to your server or do any other necessary action
  
  //   feedbackMessage.innerText = 'Suggestion submitted successfully!';
  //   suggestionForm.reset();
  // });