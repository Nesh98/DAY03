console.log('hello!')

// We create a variable userName set to the result of prompt
const userName = prompt("What's your name");

// We create a variable set to the first element that match .title
const title = document.querySelector('.title');

// We replaced what's between the two tag by a template string with userName
title.innerHTML = `Hello, ${userName}`;


