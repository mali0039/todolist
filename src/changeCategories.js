import {currentCategory, allCategories, mainCategory} from './index.js'
import {sortNotesByPriority} from './sortNotes.js'
function addListeners() {
    let categories = document.querySelectorAll("#categories p");

    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(category => {
                category.style.backgroundColor = "#f1faee";
            });
            category.style.backgroundColor = "#caf0f8";
            if (currentCategory != category.textContent) {
                if (category.textContent == "Main") {
                    currentCategory = allCategories[mainCategory];
                }
                else {
                    currentCategory = allCategories[category.textContent];
                }
                console.log(currentCategory);
                sortNotesByPriority();
            } 
        })
    })
}

export {addListeners}




