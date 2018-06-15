const poster1 = document.querySelector('#poster-1');
const poster2 = document.querySelector('#poster-2');
const poster3 = document.querySelector('#poster-3');

// poster1.setAttribute('material', {
//     src: '#hardrock-poster'
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