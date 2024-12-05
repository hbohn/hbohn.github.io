const volunteerButtons = document.querySelectorAll(".volunteer-btn");

const formContainer = document.querySelector(".form-container");
const contactForm = document.getElementById("contactForm");
const contactFormElement = document.getElementById("contactFormElement");

// Function to open the form
function openForm() {
    formContainer.style.display = "flex";
    contactForm.style.display = "block";
}

// Function to close the form
function closeForm() {
    formContainer.style.display = "none"; 
    contactForm.style.display = "none";
}

// Add event listeners to all buttons
volunteerButtons.forEach((button) => {
    button.addEventListener("click", openForm);
});

// Handle form submission
contactFormElement.onsubmit = (e) => {
    e.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;


    if (name && email) {
        alert(`Thank you, ${name}! We have received your contact info:\nEmail: ${email}\nPhone: ${phone}`);
        closeForm(); 
    } else {
        alert("Please fill out all required fields.");
    }
};


