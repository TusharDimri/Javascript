console.log("We are a Tutorial 17");


// EVENTS IN JAVASCRIPT

document.getElementById('heading').addEventListener('click', function (e) {
    console.log("You have Clicked the Heading");
    console.log(e);
    console.log(e.target); 
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // // offestX and offsetY are with respect to the Element

    // console.log(e.clientX);
    // console.log(e.clientY);
    // // clientX and clientY are with respect to the Window

    // location.href = "https://codewithharry.com"
    // Above line redirects us to the specified event after we click on the element with class heading
})
/*
addEventListener() takes 2 arguments :-
1. Events (Threre are different types of Events in Javascript)
2. A Function that is called after the Event is executed
Note:- The function can take an event object as its argument
*/

/*
Other Imoprtant Events are:- 
1. mouseover - Similar to CSS hover pseudo selector
*/