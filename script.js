/*-----------------------*/
/* Scroll horizontal */
/*-----------------------*/

"use strict";

// Adding scroll event listener
document.addEventListener("scroll", horizontalScroll);

//Selecting Elements
const sticky = document.querySelector(".sticky");
const stickyParent = document.querySelector(".sticky-parent");

const scrollWidth = sticky.scrollWidth;
const verticalScrollHeight =
  stickyParent.getBoundingClientRect().height -
  sticky.getBoundingClientRect().height;

//Scroll function
    function horizontalScroll() {
    //Checking whether the sticky element has entered into view or not
    const stickyPosition = sticky.getBoundingClientRect().top;
    if (stickyPosition > 1) {
      return;
    } else {
      const scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
      sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
    }
  }


/*-----------------------*/
/* Hover cards */
/*-----------------------*/
const screenSizeThreshold = 680;

const cardIllustrationList = document.querySelectorAll('.card-illustration');
console.log("card illustration :", cardIllustrationList);

cardIllustrationList.forEach((cardIllustration) => {
  console.log(cardIllustration);

  cardIllustration.addEventListener(
    "mouseover",
    function () {
      // Trouver l'élément .card-footer correspondant à l'élément .card-illustration actuel
      const cardFooter = cardIllustration.closest('.card').querySelector('.card-footer');

      // Vérifier si cardFooter existe avant d'ajouter la classe 'active'
      if (cardFooter) {
        cardFooter.classList.add('active');
      }
    }
  );
});

function addClassOnResize() {
  if (window.innerWidth <= screenSizeThreshold) {
    cardIllustrationList.forEach((cardIllustration) => {
      const cardFooter = cardIllustration.closest('.card').querySelector('.card-footer');
      if (cardFooter) {
        cardFooter.classList.add('active');
      }
    });
  } else {
    cardIllustrationList.forEach((cardIllustration) => {
      const cardFooter = cardIllustration.closest('.card').querySelector('.card-footer');
      if (cardFooter) {
        cardFooter.classList.remove('active');
      }
    });
  }
}

// Appeler la fonction lors du chargement de la page
addClassOnResize();

// Appeler la fonction lors du redimensionnement de la fenêtre
window.addEventListener('resize', addClassOnResize);



