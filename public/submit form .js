console.log("JavaScript is connected!");

console.log("JavaScript is 33 connected!");

// document.getElementById('submit-tool-form').addEventListener('submit', function (e) {
//     e.preventDefault();  // Prevent the form from refreshing the page
  
//     // Collect form data
//     const toolData = {
//       toolName: document.getElementById('toolName').value,
//       category: document.getElementById('category').value,
//       websiteUrl: document.getElementById('websiteUrl').value,
//       shortDescription: document.getElementById('shortDescription').value,
//       longDescription: document.getElementById('longDescription').value || "",  // optional
//       pricingModel: document.getElementById('pricingModel').value,
//       tags: document.getElementById('tags').value.split(","),  // Split tags by commas
//       contactEmail: document.getElementById('contactEmail').value
//     };
  
//     // Log data to console for debugging
//     console.log("Form Data Submitted:", toolData);
  
//     // Submit data to Firestore
//     db.collection("tools").add(toolData)
//       .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//         alert("Tool submitted successfully!");
        
//         // Optionally, reset the form
//         document.getElementById('submit-tool-form').reset();
//       })
//       .catch(function(error) {
//         console.error("Error adding document: ", error);
//         alert("Error submitting tool. Please try again.");
//       });
//   });
  
console.log("JavaScript is connected!");

console.log("JavaScript is 33 connected!");

// const firebaseConfig = {
//   apiKey: "AIzaSyCvIk7t1CTQ2IHrYo6JlmwVUaDXdb3U5k8",
//   authDomain: "rich-3fe78.firebaseapp.com",
//   databaseURL: "https://rich-3fe78-default-rtdb.firebaseio.com",
//   projectId: "rich-3fe78",
//   storageBucket: "rich-3fe78.appspot.com",
//   messagingSenderId: "819839373388",
//   appId: "1:819839373388:web:4a7f357512a7a3abeaa4e9",
//   measurementId: "G-MBKJLZ87W9"
// };

// // initialize firebase
// firebase.initializeApp(firebaseConfig);

// // reference your database
// var contactFormDB = firebase.database().ref("submit-tool-form");

// document.getElementById("submit-tool-form").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var toolName = getElementVal("toolName");
  
//   var category = getElementVal("category");
//   var url = getElementVal("websiteUrl");
//   var shortDescription = getElementVal("shortDescription");
//   var longDescription = getElementVal("longDescription");
//   var pricingModel = getElementVal("pricingModel");
//   var tags = getElementVal("tags");
//   var contactEmail = getElementVal("contactEmail");



//   saveMessages(toolName,category,websiteUrl,shortDescription,longDescription,pricingModel,tags,contactEmail);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("contactForm").reset();
// }

// const saveMessages = (toolName,category,websiteUrl,shortDescription,longDescription,pricingModel,tags,contactEmail) => {
//   var newtoolForm = newtoolFormDB.push();

//   newtoolForm.set({
//     name: name,
//     category: category,
//     websiteUrl: websiteUrl,
//     shortDescription: shortDescription,
//     longDescription: longDescription,
//     pricingModel: pricingModel,
//     tags: tags,
//     contactEmail: contactEmail,
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };




// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getDatabase,set,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";


// const firebaseConfig ={
//   apiKey: "AIzaSyCvIk7t1CTQ2IHrYo6JlmwVUaDXdb3U5k8",
//   authDomain: "rich-3fe78.firebaseapp.com",
//   // databaseURL: "https://rich-3fe78-default-rtdb.firebaseio.com",
//   projectId: "rich-3fe78",
//   storageBucket: "rich-3fe78.appspot.com",
//   messagingSenderId: "819839373388",
//   appId: "1:819839373388:web:4a7f357512a7a3abeaa4e9",
// }
// const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);

// const db = getDatabase(app);

// console.log("JavaScript is before connected!");
// //this is form part-2

// function writeUserData(toolName,category,websiteUrl,shortDescription,longDescription,pricingModel,tags,contactEmail){
//    set(ref(db,'users/' + toolName),{
//     name: toolName,
//     category: category,
//     websiteUrl: websiteUrl,
//     shortDescription:  shortDescription,
//     longDescription:longDescription,
//     pricingModel:pricingModel,
//     tags:tags,
//     contactEmail:contactEmail
//    })
 
//   //  writeUserData("snso")
  
 
// }

console.log("GPT CODE");



//THIS IS NEW CODE 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvIk7t1CTQ2IHrYo6JlmwVUaDXdb3U5k8",
  authDomain: "rich-3fe78.firebaseapp.com",
  databaseURL: "https://rich-3fe78-default-rtdb.firebaseio.com",  // Ensure this is uncommented
  projectId: "rich-3fe78",
  storageBucket: "rich-3fe78.appspot.com",
  messagingSenderId: "819839373388",
  appId: "1:819839373388:web:4a7f357512a7a3abeaa4e9"
};

// Initialize Firebase app and database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to write data to Firebase
function writeUserData(toolName, category, websiteUrl, shortDescription, longDescription, pricingModel, tags, contactEmail) {
   set(ref(db, 'tools/' + toolName), {
      name: toolName,
      category: category,
      websiteUrl: websiteUrl,
      shortDescription: shortDescription,
      longDescription: longDescription,
      pricingModel: pricingModel,
      tags: tags,
      contactEmail: contactEmail
   })
   .then(() => {
      console.log('Data saved successfully!');
   })
   .catch((error) => {
      console.error('Error writing to database:', error);
   });
}

// Handle form submission
const form = document.getElementById('submit-tool-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const toolName = document.getElementById('toolName').value;
    const category = document.getElementById('category').value;
    const websiteUrl = document.getElementById('websiteUrl').value;
    const shortDescription = document.getElementById('shortDescription').value;
    const longDescription = document.getElementById('longDescription').value;
    const pricingModel = document.getElementById('pricingModel').value;
    const tags = document.getElementById('tags').value;
    const contactEmail = document.getElementById('contactEmail').value;

    // Save data to Firebase
    writeUserData(toolName, category, websiteUrl, shortDescription, longDescription, pricingModel, tags, contactEmail);

    // Optionally reset the form
    form.reset();
    alert('Your tool has been submitted successfully!');
});

console.log("DONE LAST LINE")



/* Add this JavaScript to toggle the mobile menu */

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });
});



