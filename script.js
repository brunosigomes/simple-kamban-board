const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstarts)
    card.addEventListener('drag', drags)
    card.addEventListener('dragend', dragends)
})

function dragstarts() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drags() {
    
}

function dragends() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenters)
    dropzone.addEventListener('dragover', dragovers)
    dropzone.addEventListener('dragleave', dragleaves)
    dropzone.addEventListener('drop', drops)
})

function dragenters() {

}

function dragovers() {
    this.classList.add('is-over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleaves() {
    this.classList.remove('is-over')
}

function drops() {
    this.classList.remove('is-over')
}