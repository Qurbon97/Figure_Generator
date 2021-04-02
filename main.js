document.querySelector('.all').oninput =            generator;
document.querySelector('.top-left').oninput =       topLeft;
document.querySelector('.top-right').oninput =      topRight;
document.querySelector('.bottom-right').oninput =   bottomRight;
document.querySelector('.bottom-left').oninput =    bottomLeft;
document.querySelector('.border-width').oninput =   borderWidth;
document.querySelector('.border-color').oninput =   borderColor;
document.querySelector('.border-style').oninput =   borderStyle;
document.querySelector('.bg-color').oninput =       bgColor;

let all  =    document.querySelector('.all');
let tLeft =  document.querySelector('.top-left');
let tRight = document.querySelector('.top-right');
let bRight = document.querySelector('.bottom-right');
let bLeft =  document.querySelector('.bottom-left');
let width =  document.querySelector('.border-width');
let color =  document.querySelector('.border-color');
let style =  document.querySelector('.border-style');
let backColor = document.querySelector('.bg-color');


let block = document.querySelector('.block');
let text = document.querySelector('textarea');


text.innerHTML  = 'border-radius: 0px 0px 0px 0px; \n' +
                  '-webkit-border-radius: 0px 0px 0px 0px; \n' +
                  '-moz-border-radius: 0px 0px 0px 0px; \n'  +
                  'border: 0px solid #000000; \n' +
                  'background-color: #000000;' 
                  
function generator(){
    block.style.borderRadius = this.value + 'px';
    
    text.innerHTML = 'border-radius: ' + this.value + 'px ' + this.value + 'px ' +        this.value + 'px ' + this.value + 'px; \n' +
        '-webkit-border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
        '-moz-border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
        'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
        'background-color: ' + backColor.value + ';'
}
function topLeft() {
    block.style.borderTopLeftRadius = this.value + 'px';
    
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
        'background-color: ' + backColor.value + ';'
    
}
function topRight() {
    block.style.borderTopRightRadius = this.value + 'px';
    
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
    'background-color: ' + backColor.value + ';'
    
}
function bottomRight() {
    block.style.borderBottomRightRadius = this.value + 'px';
    
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
        'background-color: ' + backColor.value + ';'
}
function bottomLeft() {
    block.style.borderBottomLeftRadius = this.value + 'px';
    
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
        'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
        'background-color: ' + backColor.value + ';'
    
}
function borderWidth() {
    block.style.borderWidth = this.value + 'px';
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
    'background-color: ' + backColor.value + ';'
}
function borderColor() {
    block.style.borderColor = this.value
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
    'background-color: ' + backColor.value + ';'
  
}
function borderStyle() {
    block.style.borderStyle = this.value
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
    'background-color: ' + backColor.value + ';'
  
}
function bgColor() {
    block.style.backgroundColor = this.value
    text.innerHTML = 'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' +        bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value +'px ' + style.value + " " + color.value + ';' + '\n' +
    'background-color: ' + backColor.value + ';'
}
