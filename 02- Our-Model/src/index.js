const showButton = document.querySelector('button');

showButton.addEventListener('click', (e) => {

    const modal = document.querySelector('#modal');

    const modalClasses = modal.classList;

    if (modalClasses.contains('hidden-modal')) {

        modal.classList.remove('hidden-modal');
        modal.classList.add('shown-modal');
    }
});

window.addEventListener('click', (e) => {

    if (e.target === document.querySelector('body')) {

        const modal = document.querySelector('#modal');

        const modalClasses = modal.classList;

        if (!modalClasses.contains('hidden-modal')) {

            modal.classList.add('hidden-modal');
        }
    }
});