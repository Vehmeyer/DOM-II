// Your code goes here

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
});

// 7- load

window.addEventListener('load', function(event){
    document.body.style.backgroundColor = 'red';
});

// 8 - oncopy

window.addEventListener('copy', function(event){
    alert("You copied it!");
});

//  9 - mouseup
// const buttons = document.querySelector(".btn")
// buttons.addEventListener('mouseup', function(event){
//     buttons.textContent = "Done";
// })

const button = document.querySelectorAll('.btn');
button.forEach(b => {
    b.addEventListener('mouseup', (event) => {
        b.textContent = 'Done';
    })
})

// 10 - resize

window.addEventListener("resize", function(event){
    document.body.style.backgroundColor = "pink";
})

// 11 - stop propagation

Array.from(document.all).forEach((elem) => {
    elem.addEventListener("click", (event) => {
      console.log("first target:     ", event.target);
      console.log("current target:", event.currentTarget);
      console.log("\n");
      event.stopPropagation();
    });
  });



