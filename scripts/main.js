const poster1 = document.querySelector('#poster-1');
const poster2 = document.querySelector('#poster-2');
const poster3 = document.querySelector('#poster-3');
let cursor = document.querySelector('#cursor');

let animCamera = document.querySelector("#camera-animation");


// poster1.setAttribute('material', {
//     src: '#hardrock-poster'
//   });

// AFRAME.registerComponent('handle-events', {
//     init: function () {
//     let cursorAnim = document.querySelector("#cursor-animation"); 

//     this.el.addEventListener('mouseenter', function () {
//         console.log(cursorAnim)

//         // cursorAnim.emit("fusing-posters")  
//       });
//     //   el.addEventListener('mouseleave', function () {
//     //     cursor.setAttribute('color', '#EF2D5E');  
//     //   });
//     } 
//   });

AFRAME.registerComponent("passthrough", {
    init: function() {
    let animCamera = document.querySelector("#camera-animation");

      this.el.addEventListener("click", (e) => {
        console.log(this.el)
        animCamera.emit("fallclick")
      })

    }
  })