'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////// LECTURE: LAZY LOADING IMAGES

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

/////////////////////////////////////// LECTURE: REVEALING ELEMENTS ON SCROLL

const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/////////////////////////////////////// LECTURE: INTERSECTION OBSERVER API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/////////////////////////////////////// LECTURE: IMPLEMENTING A STICKY NAVIGATION

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

/////////////////////////////////////// LECTURE: PASSING ARGUMENTS TO EVENT HANDLERS
// menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////// LECTURE: TABBED COMPONENT

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if (!clicked) return;

  // remove tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate tab
  clicked.classList.add('operations__tab--active');

  // activate main content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////// LECTURE: PAGE NAVIGATION

// CAN DO THIS, BUT IF WE HAVE TOO MUCH ELEMENTS, DECREASES PERFORMANCE

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////// LECTURE: SMOOTH SCROLLING

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width of viewport',
  //   document.documentElement.clientHeight
  // ); // same to clientWidth

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); // go to rect of s1coords

  //// first method
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //// second method
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

/*
/////////////////////////////////////// LECTURE: SELECTING, CREATING AND DELETING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); // select the first element
const allSections = document.querySelectorAll('.section'); // select multiple elements
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  // message.remove(); or L
  message.parentElement.removeChild(message);
});
*/

/*
/////////////////////////////////////// LECTURE: STYLES, ATTRIBUTES AND CLASSES

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // cant, cause we didnt defined this here in js
console.log(getComputedStyle(message).color); // can, cause now im in the stylesheet of message

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // changing the root css styles
// document.documentElement.style.setProperty('--color-primary', 'orangered'); // changing the root css styles

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Minimal logo';

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist'); // put attributes on tags, he gon do this to that images that are bluried

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // returns url

// data attributes
console.log(logo.dataset.versionNumber);

// classes - use
logo.classList.add('c', 'j'); // course you can add multiple classnames
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// dont use
logo.className = 'jonas'; // will overwrite all classes
*/

/*
/////////////////////////////////////// LECTURE: TYPES OF EVENTS AND EVENT HANDLERS

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading.');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onclick = function (e) {
//   alert('addEventListener: Great! You are reading the heading.');
// };
*/

/*
/////////////////////////////////////// LECTURE: EVENT PROPAGATION IN PRACTICE

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link2', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link3', e.target, e.currentTarget);
});
*/

/*
/////////////////////////////////////// LECTURE: DOM TRAVERSING

const h1 = document.\aquerySelector('h1');

// going downwards in DOM: children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
setTimeout(() => (h1.firstElementChild.style.color = 'white'), 2000); // has secondElement

// goind upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-primary)';
h1.closest('h1').style.background = 'var(--gradient-secondary)'; // exactly element itself

// going sideways: siblings
console.log(h1.previousElementSibling); // elements
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); // nodes
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
