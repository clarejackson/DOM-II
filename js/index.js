// Your code goes here
// * `mouseover`
const header = document.querySelector(".main-navigation");
header.addEventListener("mouseover", (e) => {
  header.style.backgroundColor = "purple";
  e.stopPropagation();
});

//   * `keydown`
const h1 = document.querySelector(".logo-heading");
document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    return (h1.style.backgroundColor = "green");
  }
  e.stopPropagation();
});

//   * `wheel`
const footer = document.querySelector("footer");

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  footer.style.transform = `scale(${scale})`;
  event.stopPropagation();
}

let scale = 1;
footer.onwheel = zoom;

//   * `load`
window.addEventListener("load", (e) => {
  alert("You broke funbus :(");
  e.stopPropagation();
});


//   * `focus` 
const aFocus = document.getElementsByTagName("a");
aFocus[1].addEventListener("focus", (event) => {
  event.target.style.color = "white";
  event.stopPropagation();
});

//   * `resize` 
const contentSectionOne = document.getElementsByClassName("content-section");
window.addEventListener("resize", (e) => {
  contentSectionOne[0].style.border = "hotpink 10px dotted";
  e.stopPropagation();
});

//   * `scroll` 
const headerImg = document.getElementsByTagName("img");
window.addEventListener("scroll", (e) => {
  headerImg[0].style.border = "black solid 10px";
  e.stopPropagation();
});


//   * `dblclick`
const h2 = document.querySelector("h2");
h2.addEventListener("dblclick", (e) => {
  h2.style.color = "blue";
  h2.style.fontSize = "5rem";
  h2.style.fontWeight = "bolder";
  e.stopPropagation();
});

//   * keyup
const destination = document.getElementsByTagName('h4');
window.addEventListener('keyup', event => {
  if(event.code === 1){
    return;
  }
  destination[0].style.color= 'green'
  destination[0].style.fontSize = '10rem'
});

//   * click
destination[1].addEventListener('click', (e) => {
  destination[1].style.border = '10px solid purple';
  e.stopPropagation();
})

//* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
const top = document.getElementsByClassName('content-pick');
top[0].addEventListener('click', (e) => {
  top[0].style.border = '10px dotted limegreen';
  // e.stopPropagation();
});

const navClick = document.getElementsByClassName("destination");
navClick[2].addEventListener('click', (e) => {
  navClick[2].style.border = '10px dashed red';
  e.stopPropagation();
})



//* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
const nav = document.getElementsByClassName('.nav');
nav.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});