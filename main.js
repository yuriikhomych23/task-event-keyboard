const firstColumn = document.querySelector('.first__column').children;

for (let i = 0, child; child = firstColumn[i]; i++) {
     window.addEventListener('keydown', function(event) {
        if(event.keyCode == 192) {
            area.innerText = '`';
        } else if (event.keyCode == 49) {
            area.innerText = '1';
        } else if(event.keyCode == 50) {
            area.innerText = '2'
        } else if(event.keyCode == 51) {
            area.innerText = '3'
    }
})
}








// const secondColumn = document.querySelector('.second__column').children;

// for (let i = 0, child; child = secondColumn[i]; i++) {
//     window.addEventListener('keydown', function(event) {
//         if(event.keyCode == 81) {
//             area.innerText = 'q'
//         }
//         if(event.keyCode == 87) {
//             area.innerText = 'w'
//         }
//     })
// }
