const scene = document.querySelector('a-scene')
const loader = document.querySelector('.loader')
let poster1 = document.querySelector('#poster-1')
let poster2 = document.querySelector('#poster-2')
let poster3 = document.querySelector('#poster-3')

let buttonStart = document.createElement('button')

scene.addEventListener('loaded', () => {
    setTimeout(function() { 
        loader.querySelector('p').innerText = "Loaded. Click to start the experience."
        loader.appendChild(buttonStart)
        buttonStart.innerText = "Start"
    }, 5000)
})

buttonStart.addEventListener('click', () => {
  loader.remove()
  changePosters(choices, position)
})

let position = ""

const changePosters = (choices, position) => {
    
    let actualChoices;

    if(position == "") {
        actualChoices = choices.firstStep;
    }

    poster1.setAttribute('material', {
        src: actualChoices.choice1.imageid
    })

    poster1.setAttribute('sound', {
        src: actualChoices.choice1.audioid
    })

    poster2.setAttribute('material', {
        src: actualChoices.choice2.imageid
    })

    poster2.setAttribute('sound', {
        src: actualChoices.choice2.audioid
    })

    poster3.setAttribute('material', {
        src: actualChoices.choice3.imageid
    })

    poster3.setAttribute('sound', {
        src: actualChoices.choice3.audioid
    })
}
