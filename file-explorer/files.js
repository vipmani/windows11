// console.log('hey')

// function for short

let container = document.getElementsByClassName('sort-first-div')[0]
let short = document.getElementsByClassName('short')[0]

short.addEventListener('click', () => {
    if (container.style.top == '-280px') {
        container.style.top = '78px';
    } else {
        container.style.top = '-280px';
    }
})

// function for more

let more = document.getElementsByClassName('explore')[0]
let explore = document.getElementsByClassName('more-explore')[0]

more.addEventListener('mouseenter', () => {
    if (explore.style.top == '100px') {
        explore.style.top = '102px';
    } else {
        explore.style.top = '100px';
    }
})
more.addEventListener('mouseleave', () => {
    if (explore.style.top == '-300px') {
        explore.style.top = '102px';
    } else {
        explore.style.top = '-300px';
    }
})



// function for group by

let groupName = document.getElementsByClassName('groupName')[0]
let groupExtract = document.getElementsByClassName('groupExtract')[0]

groupName.addEventListener('mouseenter', () => {
    if (groupExtract.style.top == '200px') {
        groupExtract.style.top = '200px';
    } else {
        groupExtract.style.top = '200px';
    }
})
groupName.addEventListener('mouseleave', () => {
    if (groupExtract.style.top == '-360px') {
        groupExtract.style.top = '200px';
    } else {
        groupExtract.style.top = '-360px';
    }
})

// function for view

let view = document.getElementsByClassName('flex-view')[0]
let content = document.getElementsByClassName('view-content')[0]

view.addEventListener('click', function() {
    if (content.style.top == '83px') {
        content.style.top = '-280px';
    } else {
        content.style.top = '83px';
    }
})

// function for show and show content


let show = document.getElementsByClassName('show')[0]
let showContent = document.getElementsByClassName('show-content')[0]

show.addEventListener('mouseenter', () => {
    if (showContent.style.top == '318px') {
        showContent.style.top = '-318px';
    } else {
        showContent.style.top = '318px';
    }
})
show.addEventListener('mouseleave', () => {
    if (showContent.style.top == '-318px') {
        showContent.style.top = '318px';
    } else {
        showContent.style.top = '-318px';
    }
})

// function for dot and dotContent

let dot = document.getElementsByClassName('dot')[0]
let dotContent = document.getElementsByClassName('dotContent')[0]

dot.addEventListener('click', () => {
    if (dotContent.style.top == '-280px') {
        dotContent.style.top = '80px';
    } else {
        dotContent.style.top = '-280px';
    }
})

// creating a funciton for windows start button

let win = document.getElementById('file-sel')
let start = document.getElementById('file-start')


win.addEventListener('click', () => {
    if (start.style.display === "block") {
        start.style.display = "none";
    } else {
        start.style.display = "block";
    }
})

// make a function to cut file explorer page

let closeBody = document.getElementById('closeBody');
let closeWindows = document.getElementById('closeWindows').trim;

closeWindows.addEventListener('click', () => {
    window.location.href = index.html;
    // console.log('you have just close window')
})