let scene = document.querySelector('a-scene')
let audioanalyser = document.querySelector('#analyser')
let loader = document.querySelector('.loader')
let loading = document.querySelector('.loading')
let loaderText = document.querySelector('.loader .container-text')
let poster1 = document.querySelector('#poster-1')
let poster2 = document.querySelector('#poster-2')
let poster3 = document.querySelector('#poster-3')
let posters = document.querySelectorAll('.posters')
let buttonStart = document.querySelector('.panel button')
let nextStep = document.querySelector('#next-step')

let step = 0
let actualChoices = ""

nextStep.addEventListener('click', () => {
    console.log("Omg only click click click")
    addPosters(choices, step)
    ++step
    console.log(step)
})

scene.addEventListener('loaded', () => {
    setTimeout(function() { 
        loading.style.display = "none"
        loaderText.style.display = "inherit"
    }, 5000)
})

const addPosters = (choices, step) => {
    
    if(step === 0) {
        actualChoices = choices.firstStep
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

    if(actualChoices.choice3) {
        poster3.setAttribute('material', {
            src: actualChoices.choice3.imageid
        })
    
        poster3.setAttribute('sound', {
            src: actualChoices.choice3.audioid
        }) } else {
            console.log("No third choice here, dear")
    }

    return actualChoices;
}

const removePosters = (posters) => {
    for(let j = 0; j < posters.length; j++) {
        posters[j].setAttribute('material', {
            src: ""
        })
    
        posters[j].setAttribute('sound', {
            src: "nooo"
        })
    }
}

const endOfTheGame = () => {
    console.log("It's the end of the game as we know it")
}

buttonStart.addEventListener('click', () => {
  loader.remove()
  addPosters(choices, step)
  ++step
  console.log(step)
})

for(let i = 0; i < posters.length; i++) {
    posters[i].addEventListener('click', (e) => {

        audioanalyser.setAttribute('audioanalyser', {
            src:'#final-psychedelic-audio',
            // posters[i].object3D.el.components.sound.attrValue.src
        })

        removePosters(posters)

        if(step === 1) {

            actualChoices = actualChoices[posters[i].dataset.choice].secondStep
        } else if(step === 2) {
            actualChoices = actualChoices[posters[i].dataset.choice].thirdStep
        } else if(step === 3) {
            endOfTheGame()
        }
        return actualChoices;
    })
}