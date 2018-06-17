AFRAME.registerComponent("passthrough", {
    init: function() {
    let animCameraOut = document.querySelector("#camera-out");
    let animCameraRotation = document.querySelector("#camera-rotation");
    let animButton = document.querySelector("#button-animation");
    let animText = document.querySelector("#text-animation");

      this.el.addEventListener("click", (e) => {
        animCameraRotation.emit('rotate-camera')
        animCameraOut.emit("fallclick")
        animButton.emit("mounting")
        animText.emit("mounting-text")
      })

    }
  })

  AFRAME.registerComponent('posters-hover', {
    init: function () {
      var el = this.el;  // <a-box>
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', '#E30613');  
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', '');  
      });
    }
});

AFRAME.registerComponent('go-back-in-the-game', {
  init: function() {
    let animCameraIn = document.querySelector("#camera-in");

      this.el.addEventListener("click", (e) => {
        animCameraIn.emit("go-back")
      })

    }
})