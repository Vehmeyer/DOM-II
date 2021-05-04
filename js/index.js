// Your code goes here
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `drag / drop`

// 1 - mouseover

const mouseOver = document.querySelector("h1");

function over(event) {
    mouseOver.textContent = "Bus of Fun!";
};
mouseOver.addEventListener("mouseover", over);

// mouseOver.addEventListener("mouseover", function(event) {
//     mouseOver.textContent = "green";
// });

// 2 - mouseleave

const mouseLeave = document.querySelector("h1");

function leave(event) {
    mouseLeave.textContent = "Magic Bus";
}

mouseLeave.addEventListener("mouseleave", leave);

// 3 - dblclick

document.addEventListener('dblclick', function(event){
   document.body.style.backgroundColor = "green";
});

// 4 - click

document.addEventListener('click', function(event){
    document.body.style.color = "orange";
});

// 5 - keydown

const keyDown = document.querySelector("h1");

function down(event){
    if(event.key === "Escape") {
        keyDown.textContent = "Fun Bus";
    };
};

document.addEventListener("keydown", down); 

// 6 - scroll

document.addEventListener('scroll', function(event){
    document.body.style.backgroundColor = "initial";
})






//  3 - keypress

// const keyPress = document.querySelector(".intro");
// function press(event){
//     if(event === "l") {
//         keyPress.style.backgroundColor = "blue";
//     }
// }


// document.addEventListener("keypress", press);