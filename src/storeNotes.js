import {mainCategory, currentCategory} from "./index.js"
let storeNote = function(note) {
   currentCategory.push(note);
}
export {storeNote}