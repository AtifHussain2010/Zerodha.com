// JS Code
// Lock 
let input = prompt("Enter Passkey:");
let output = "ZERODHA10";
let body = document.querySelector('body');
function answer(){
    if(input.trim() === output){
        body.style.display = 'inline';
    } else{
        body.style.display = 'none';
    }
}
answer();
// Icon nav Menu Adjacment
let menuIcon = document.querySelector("#Menu");

function navGuideAdjust() {
    menuIcon.setAttribute('height', '30px');
    menuIcon.setAttribute('width', '30px');
}
if(window.innerWidth < 990){
    navGuideAdjust();
}
   

// LandingImage
let landingImage = document.querySelector("#Landing-Image");

function imageSize(){
        landingImage.setAttribute('width', visualViewport.width - 20);
    
}
if(window.innerWidth < 1090){
imageSize();    
}

// Trust Section 
let trustSection = document.querySelector('.Truth-Section');
let ecosystemImage = document.querySelector('#Ecosystem')
let width = visualViewport.width/2  - 70 + 'px';
let landingHeading = document.querySelector('#Heading-Truth');
let subText  = document.querySelectorAll('#Sub-Text');
let subTitle = document.querySelectorAll('#Sub-Title');
let height = visualViewport.width/2  + 'px';

// Image 

function trustSectionAdjustment(){
    ecosystemImage.style.width = width;
    ecosystemImage.style.height = 'auto';
    trustSection.style.width = innerWidth - 50 +'px';
    trustSection.style.padding = '10px';
}
if(window.innerWidth < 1200 && window.innerWidth > 890){
    trustSectionAdjustment();

}

// for Smaller Devices

function smallDeices(){
    ecosystemImage.style.width = innerWidth - 100 + 'px';
    ecosystemImage.style.height = 'auto';   
}
if(window.innerWidth < 890) {
    smallDeices();
}
if( window.innerWidth < 891 ){
    subText.forEach((text) => {
        text.style.width = innerWidth - 80 + 'px';
    })
    subTitle.forEach((title) => {
        title.style.width = innerWidth - 80 + 'px';
    })
    landingHeading.style.width = innerWidth - 80 + 'px';
}


// Arrow 

let link1 = document.querySelector("#Links-Sub1");
let arrow1 = document.querySelector('#Arrow1');

link1.onmouseover = () => {
    arrow1.setAttribute('fill', '#484848');
} 
link1.onmouseleave = () => {
    arrow1.setAttribute('fill', '#387ED1');
}

let link2 = document.querySelector('#Links-Sub2');
let arrow2 = document.querySelector('#Arrow2');

link2.onmouseover = () => {
    arrow2.setAttribute('fill', '#484848');
}
link2.onmouseleave = () => {
    arrow2.setAttribute('fill', '#387ED1');
}

// Arrow Device

let links = document.querySelector('.Links');

function deviceManagement() {
    links.style.width = window.innerWidth/2 + 'px';
}

if(visualViewport.width < 401){
    deviceManagement();
}

// Media 

let media = document.querySelector('#Media');

function imageAdjust(){
    media.style.width = visualViewport.width - 40 +'px';
    media.style.height = 'auto';
}

if(visualViewport.width < 893) {
    imageAdjust();
}
