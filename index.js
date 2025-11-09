// Get the button elements
const aboutButton = document.getElementById("aboutButton");
const projectButton = document.getElementById("projectButton");
const homeButton = document.getElementById("homeButton");
const certificationsButton = document.getElementById("certificationsButton");
const contactButton = document.getElementById("contactButton");
const menuButton = document.getElementById("menuButton");
// About button click
if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    const aboutSection = document.getElementById("aboutMeSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}


if (projectButton) {
  projectButton.addEventListener("click", () => {
    const projectSection = document.getElementById("projectSection");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (certificationsButton) {
  certificationsButton.addEventListener("click", () => {
    const certificationSection = document.getElementById("certificationSection");
    if (certificationSection) {
      certificationSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (contactButton) {
  contactButton.addEventListener("click", () => {
    const contactSection = document.getElementById("contactSection");
    if (certificationSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}


if(homeButton){
  homeButton.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  })
 
}

if(menuButton){
    menuButton.addEventListener('click', () => {
    const menuSection = document.getElementById("mobileMenu");
    menuSection.classList.toggle("show"); // toggle the menu

    // Prevent scrolling when menu is open
    if(menuSection.classList.contains("show")){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
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
