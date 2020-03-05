// const buttons = document.querySelector('button');

// buttons.onclick = function() {
//     console.log('click me!')
// }


getSel = x => document.querySelector(x);

window.addEventListener('keydown', function(event) {
    if(event.keyCode == 49) {
        getSel('#area').innerText = getSel('.f1') + '1';
    } 
    if(event.keyCode == 50) {
        getSel('#area').innerText = getSel('.f2') + '2';
    }
    // console.log(event)
})