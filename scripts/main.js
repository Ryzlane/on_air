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

let endLink = document.querySelector('.container .end-link')
let endImg = document.querySelector('.container .end-img')
let playlist = document.querySelector('.container .playlist')


let step = 0
let actualChoices = ""

nextStep.addEventListener('click', () => {
    camera.setAttribute('wasd-controls', "")
    addPosters(choices, step)
    song.src = "nosong"
    ++step
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
        poster3.setAttribute('position', {
            z: '12'
        })
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

const endOfTheGame = (lastChoice) => {
    let board = document.querySelector('.container')

    console.log("It's the end of the game as we know it")

    endImg.href = lastChoice.imgid
    endLink.src = lastChoice.imgid
    playlist.href = lastChoice.playlist

    board.style.display = "inherit"
}

buttonStart.addEventListener('click', () => {
  loader.remove()
  addPosters(choices, step)
  ++step
  console.log(step)
})

for(let i = 0; i < posters.length; i++) {
    posters[i].addEventListener('click', (e) => {
        console.log(posters[i])
        let lookSongId = posters[i].object3D.el.components.sound.attrValue.src
        let songAsset = document.querySelector(lookSongId).src
        song.src = songAsset

        camera.removeAttribute('wasd-controls')

        removePosters(posters)

        if(step === 1) {

            actualChoices = actualChoices[posters[i].dataset.choice].secondStep
        } else if(step === 2) {
            actualChoices = actualChoices[posters[i].dataset.choice].thirdStep
        } else if(step === 3) {
            endOfTheGame(actualChoices[posters[i].dataset.choice])
        }
        return actualChoices;
    })
}