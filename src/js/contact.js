// Selecting Elements
const form = document.querySelector(".form__input-container");
const firstnameInput = form.querySelector("[name='firstname']");
const lastnameInput = form.querySelector("[name='lastname']");
const phoneInput = form.querySelector("[name='phone-number']");
const emailInput = form.querySelector("[name='email']");
const messageInput = form.querySelector("[name='message']");

// Empty Array to store data
const information = [];

// Add information function
const addInformation = (e) => {
  e.preventDefault();

  // Creating Object for input
  const contacts = {
    contactFirstname: firstnameInput.value,
    contactLastname: lastnameInput.value,
    contactPhonenumber: phoneInput.value,
    contactEmail: emailInput.value,
    contactMessage: messageInput.value,
  };

  // Adding objects to empty array
  information.push(contacts);

  // Logging array with message
  console.log("Kontakt lagret:", contacts);
  console.log("All informasjon:", information);

  // Reset form
  form.reset();
};

// Adding Event Listener to the Form
form.addEventListener("submit", addInformation);
