// Typing effect
const text = ["BCA Student", "Web Developer", "Tech Enthusiast", "Football Player"];
let index = 0, charIndex = 0;

function typeEffect(){
  if(charIndex < text[index].length){
    document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect(){
  if(charIndex > 0){
    document.getElementById("typing").innerHTML = text[index].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index+1) % text.length;
    setTimeout(typeEffect, 200);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Modal for certificates
function openModal(title){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
}
function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// Profile Photo Upload
document.getElementById("upload-photo").addEventListener("change", function(event){
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      document.getElementById("profile-photo").src = e.target.result;
      localStorage.setItem("profilePhoto", e.target.result);
    }
    reader.readAsDataURL(file);
  }
});

// Load saved photo if available
window.addEventListener("load", function(){
  const savedPhoto = localStorage.getItem("profilePhoto");
  if(savedPhoto){
    document.getElementById("profile-photo").src = savedPhoto;
  }

  const savedEmail = localStorage.getItem("email");
  const savedPhone = localStorage.getItem("phone");
  if(savedEmail) document.getElementById("email").innerText = savedEmail;
  if(savedPhone) document.getElementById("phone").innerText = savedPhone;
});

// Edit Contact Details
document.getElementById("edit-contact").addEventListener("click", function(){
  const currentEmail = document.getElementById("email").innerText;
  const currentPhone = document.getElementById("phone").innerText;

  const newEmail = prompt("Enter your email:", currentEmail);
  const newPhone = prompt("Enter your phone number:", currentPhone);

  if(newEmail){
    document.getElementById("email").innerText = newEmail;
    localStorage.setItem("email", newEmail);
  }
  if(newPhone){
    document.getElementById("phone").innerText = newPhone;
    localStorage.setItem("phone", newPhone);
  }
});