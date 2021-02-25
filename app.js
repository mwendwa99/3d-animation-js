// select items to animate
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// animate items
const title = document.querySelector('.title');
const car = document.querySelector('.car img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) `

});

// after mouse in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // items pop out
    title.style.transform = "translateZ(150px)";
    car.style.transform = "translateZ(150px) rotateZ(10deg) ";
    description.style.transform = "translateZ(120px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

});

// return to normal after mouse out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.2s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // pop back in
    title.style.transform = "translateZ(0px)";
    car.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

})