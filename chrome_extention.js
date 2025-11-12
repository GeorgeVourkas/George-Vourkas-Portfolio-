
// -------Mobile-----

  const mobileButtons = document.querySelectorAll('.mobileButton');

mobileButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetId === "homeSection") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // close menu
    document.getElementById('mobileMenu').classList.remove('show');
  });
});


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


function copyText() {
  const text = document.getElementById('chromeLink').textContent
  navigator.clipboard.writeText(text)
}