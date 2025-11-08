// Get the button elements
const aboutButton = document.getElementById("aboutButton");
const projectButton = document.getElementById("projectButton");
const homeButton = document.getElementById("homeButton");
// About button click
if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    const aboutSection = document.getElementById("aboutMeSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Projects button click
if (projectButton) {
  projectButton.addEventListener("click", () => {
    const projectSection = document.getElementById("projectSection");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if(homeButton){
  homeButton.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  })
 
}

// Animation

const scrollElements = document.querySelectorAll(".animateOnScroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (el) => {
  el.classList.add("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
