
// Modal
const modal = document.querySelector('#modal')
// open modal button
const openModalBtn = document.querySelector('#open-modal-btn')
// close modal button
const closeModalBtn = document.querySelector('#close-modal-btn')

// overlay element
const overlay = document.querySelector('#overlay')
console.log(modal, openModalBtn, closeModalBtn, overlay)


//  click event listener for the open-modal-btn that adds the class "open" to the modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('open')
    overlay.classList.add('open')
})


//  click event listener for the close-modal-btn that removes the class "open" from the modal
closeModalBtn.addEventListener('click', closeModal)
//  Also remove the class "open" from the overlay

//  click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
}