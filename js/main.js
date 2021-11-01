const isHover = e => e.parentElement.querySelector(':hover') === e;    
const mysec= document.getElementById('msec');
const myDiv = document.getElementById('qrpop');
document.addEventListener('mousemove', function checkHover() {
  const hovered = isHover(myDiv);
  if (hovered !== checkHover.hovered) {
    hovered ? mysec.style.display="block" : mysec.style.display="none";
    console.log(hovered ? 'hovered' : 'not hovered');
    checkHover.hovered = hovered;
  }
});