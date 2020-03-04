let getSel = x => document.querySelector(x);


getSel('.f1').onmousedown = function() {
    this.style.backgroundColor = 'black';
    this.style.color = 'silver';
 }
 getSel('.f1').onmouseup = function() {
    this.style.backgroundColor = '';
    this.style.color = '';
 }