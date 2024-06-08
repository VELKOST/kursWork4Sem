// JavaScript
var modal = document.getElementById("modal");
var btn = document.getElementById("changePassword");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("passwordForm").onsubmit = function(event) {
  event.preventDefault();
  // Здесь вы можете добавить логику обработки смены пароля
}


  

// JavaScript
var btn = document.getElementById("changePhoto");
var photoUpload = document.getElementById("photoUpload");
var userPhoto = document.getElementById("userPhoto");

btn.onclick = function() {
  photoUpload.click();
}

photoUpload.onchange = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    if (reader.readyState == 2) {
      userPhoto.src = reader.result;
    }
  }
  reader.readAsDataURL(event.target.files[0]);
}
