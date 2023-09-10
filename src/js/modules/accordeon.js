let acc = document.getElementsByClassName("questions__item-title");
let i;
function accordeon(){
    for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.height){
      panel.style.height = null;
      
    } else {
      panel.style.height = 140 + "px";
    }
  });
}
}
export default accordeon;
