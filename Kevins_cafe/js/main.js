function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  formMessage.textContent = `Thank you for contacting us, ${name}! We will get back to you soon.`;
  formMessage.classList.remove("hidden");
  document.getElementById("contactForm").reset();

  return false;
}

function subscribeNewsletter() {
  const emailInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMessage");

  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    return false;
  }

  message.textContent = `Thanks for subscribing with ${emailInput.value.trim()}!`;
  message.classList.remove("hidden");
  emailInput.value = "";
  return false;
}
