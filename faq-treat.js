var acc = document.getElementsByClassName("FAQ-treat");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var para = this.nextElementSibling;
    if (para.style.maxHeight) {
      para.style.maxHeight = null;
    } else {
      para.style.maxHeight = para.scrollHeight + "px";
    } 
  });
}