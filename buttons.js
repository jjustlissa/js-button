   let message = document.getElementById("message");
   let good = document.getElementById("Good");
   let bad = document.getElementById("Bad");

   good.addEventListener("click", function() {
    message.textContent = "Everything is great!";
    document.body.style.backgroundColor = "green";
   });
   bad.addEventListener("click", function() {
    message.textContent = "Everything is bad!";
    document.body.style.backgroundColor = "red";
   });