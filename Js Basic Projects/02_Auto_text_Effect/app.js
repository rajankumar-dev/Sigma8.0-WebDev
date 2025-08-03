const container = document.querySelector(".container");

const careers = ['Youtuber', 'Advisor', 'Freelancer'];
let que = careers.map((item => item));


container.innerHTML = `<h1>I am a ${que}</h1>`