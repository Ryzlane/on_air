const scene = document.querySelector('a-scene');
const loader = document.querySelector('.loader')

console.log(scene.hasLoaded);

scene.addEventListener('loaded', () => {
    console.log(scene.hasLoaded)
    loader.remove()
});
