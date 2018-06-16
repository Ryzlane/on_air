AFRAME.registerComponent("passthrough", {
    init: function() {
    let animCameraOut = document.querySelector("#camera-out");
    let animButton = document.querySelector("#button-animation");
    let animText = document.querySelector("#text-animation");

      this.el.addEventListener("click", (e) => {
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
        el.setAttribute('color', '#24CAFF');  
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