let animCamera = document.querySelector("#camera-animation");

AFRAME.registerComponent("passthrough", {
    init: function() {
    let animCamera = document.querySelector("#camera-animation");

      this.el.addEventListener("click", (e) => {
        console.log(this.el)
        animCamera.emit("fallclick")
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