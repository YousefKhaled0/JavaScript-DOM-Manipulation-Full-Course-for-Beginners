const items = document.querySelectorAll(".accordion-header");
const buttons = document.querySelectorAll(".accordion-button");

items.forEach(i => {

    i.addEventListener('click', itemClickEventHandler);
});

buttons.forEach(b => {

    b.addEventListener('click', buttonClickEventHandler);
});

function itemClickEventHandler(e) {

    for(const i of items){

        if (e.target === i){
            
            i.nextElementSibling.classList.remove('not-active');
            i.nextElementSibling.classList.add('active');
        }
        else{

            i.nextElementSibling.classList.remove('active');
            i.nextElementSibling.classList.add('not-active');
        }
    }
}

function buttonClickEventHandler(e){

    e.stopPropagation();

    const clickedButton = e.target;
    const parent = clickedButton.parentElement;
    const content = parent.nextElementSibling;

    // Toggle the classes
    content.classList.add('active');
    content.classList.remove('not-active');

    // Loop through other items to hide them
    items.forEach(item => {
        
        const itemContent = item.nextElementSibling;

        if (itemContent !== content) {
            itemContent.classList.remove('active');
            itemContent.classList.add('not-active');
        }

    });

}