document.addEventListener("DOMContentLoaded", () => {
  // 1. Set Welcome Name
  const namePrompt = prompt("Masukkan Nama Anda:");
  const welcomeText = document.getElementById("welcome-text");
  welcomeText.textContent = `Hi ${namePrompt || '[Name]'}, Welcome To Website`;

  // 2. Form Submit Handling
  const form = document.getElementById("messageForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const dob = formData.get("birthdate"); // name="birthdate" in HTML
    const gender = formData.get("gender");
    const message = formData.get("message");

    const now = new Date();

    document.getElementById("currentTime").textContent = now.toString();
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputBirthdate").textContent = dob;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputMessage").textContent = message;
  });
});