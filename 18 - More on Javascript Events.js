console.log("We are at Tutorial 18");

let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);

let cl = document.querySelector('.child-ul');
cl.addEventListener('mouseenter', func4);

let c = document.querySelector('.no');
c.addEventListener('mouseleave', func5);

// cls = document.querySelector('.container');
// cls.addEventListener('mousemove', func6);

function func1(e) {
    console.log(e);
    e.preventDefault();
    // Above function prevents the buttton from submitting (it's default action)
}

function func2(e) {
    document.body.style.backgroundColor = `rgb(21, 32, 41)` ;
    console.log("Double Click");    
}

function func3(e) {
    console.log("Mouse Down")
}

function func4(e) {
    console.log("Mouse Enter")
}

function func5(e) {
    console.log("Mouse Leave")
}

// function func6(e) {
//     console.log("Mouse Move")
// }

/*
Events are:- 
1. mouseover - Similar to CSS hover pseudo selector
2. dblclick - Double Click
3. mousedown - Left Click , Right Click and Clicking the Mouse Wheel
4. mouseenter - Triggers when the mouse cursor enters the specified element
4. mouseleave - Triggers when the mouse cursor leaves the specified element
5. mousemove - Triggers when the mouse is moved inside the specified element
*/