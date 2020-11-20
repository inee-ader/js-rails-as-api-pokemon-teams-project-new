const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', () => {

    fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(trainers => showTrainers(trainers))
})

function showTrainers(trainers){
    for(trainer of trainers){
        buildTrainer(trainer)
    }
}

function buildTrainer(trainer){
    newDiv = document.createElement('div')
    newDiv.className = 'card'
    newDiv.dataset.id = trainer.id
    p = document.createElement('p')
    p.innerText = trainer.name
    newDiv.appendChild(p)
    btn = document.createElement('button')
    btn.dataset.id = trainer.id
    btn.innerText = 'Add Pokemon'
    newDiv.appendChild(btn)
    list = document.createElement('ul')
    
    
}