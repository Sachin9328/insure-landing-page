# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![Mobile Design](/images/Mobile-Design-Insure-landing-page.png)
![Desktop Design](/images/Desktop-Design-Insure-landing-page.png)

### Links

- Solution URL: [Github Repository](https://github.com/Sachin9328/insure-landing-page)
- Live Site URL: [Insure Landing Page](https://sachin9328.github.io/insure-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

- toggle() method of the classList property in JavaScript  

```js
hamburgerIcon.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("nav-mobile-menu-open");
    body.classList.toggle("overflowHidden");
    if(mobileMenu.classList.contains("nav-mobile-menu-open")){
        hamburgerIcon.src = "images/icon-close.svg";
    } else {
        hamburgerIcon.src = "images/icon-hamburger.svg";
    }  
})
```

### Continued development

- Creating layouts using CSS Grid

## Author

- Github - [Sachin9328](https://github.com/Sachin9328)
- Linkedin - [Sachin Jadhav](https://www.linkedin.com/in/sachinjadhav2893/)
- Frontend Mentor - [@Sachin9328](https://www.frontendmentor.io/profile/Sachin9328)

## Acknowledgments

Thanks to Grace on Frontend Mentor's Slack for advicing me to use CSS Grid for the desktop design layout.
