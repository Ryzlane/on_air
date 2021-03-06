// HTML elements retrieved
let scene = document.querySelector('a-scene')
let camera = document.querySelector('a-camera')
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
let song = document.querySelector('#song')

// Variables
let step = 0
let actualChoices = ""


/******** FUNCTIONS ********/

// Add posters and their sounds at the beginning of the game and when the button next step is used
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
        poster3.setAttribute('position', {
            z: '12'
        })
    }

    return actualChoices;
}


// Remove posters and musics attached to them when a poster is chosed
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

// Display the board of the end of the steps
const endOfTheGame = (poster, lastChoice) => {
    let board = document.querySelector('.container')
    let endLink = document.querySelector('.container .end-link')
    let endImg = document.querySelector('.container .end-img')
    let playlist = document.querySelector('.container .playlist')
    let title = document.querySelector('.container h1')
    
    console.log("It's the end of the game as we know it")

    endImg.src = poster
    endLink.href = poster
    playlist.href = lastChoice.playlist
    title.innerText = lastChoice.title

    board.style.display = "inherit"
    board.classList.add('container-in')
}


/******** EVENTS LISTENERS ********/

// Loader
scene.addEventListener('loaded', () => {
    setTimeout(function() { 
        loading.style.display = "none"
        loaderText.style.display = "inherit"
    }, 5000)
})

// Start
buttonStart.addEventListener('click', () => {
    loader.remove()
    addPosters(choices, step)
    ++step
  })
  

// Next step button
nextStep.addEventListener('click', () => {
    camera.setAttribute('wasd-controls', "")
    addPosters(choices, step)
    song.src = "nosong"
    ++step
})

// All the actions triggered by click on the posters
for(let i = 0; i < posters.length; i++) {
    posters[i].addEventListener('click', (e) => {
        let lookSongId = posters[i].object3D.el.components.sound.attrValue.src
        let songAsset = document.querySelector(lookSongId).src
        let lookPosterId = posters[i].object3D.el.components.material.attrValue.src
        let posterAsset = document.querySelector(lookPosterId).src
        song.src = songAsset

        camera.removeAttribute('wasd-controls')

        removePosters(posters)

        if(step === 1) {

            actualChoices = actualChoices[posters[i].dataset.choice].secondStep
        } else if(step === 2) {
            actualChoices = actualChoices[posters[i].dataset.choice].thirdStep
        } else if(step === 3) {
            endOfTheGame(posterAsset, actualChoices[posters[i].dataset.choice])
        }
        return actualChoices;
    })
}