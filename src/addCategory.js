import {allCategories} from './index.js'
import {addListeners} from './changeCategories.js'

let addCategory = document.querySelector("#saveCategory");
addCategory.addEventListener('click', function () {
    let categoryName = document.querySelector("#categoryName").value;
    allCategories[categoryName] = [];
    addCategoryToView(categoryName);
    addListeners();
});

function addCategoryToView(category) {
    let categories = document.querySelector("#categories");
    let categoryHTML = `<p><i class="fas fa-star"></i>${category}</p>`;
    categories.innerHTML += categoryHTML;
}

export {addCategory}