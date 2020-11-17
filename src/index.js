import {noteFactory} from "./noteFactory.js"
import {storeNote} from "./storeNotes.js"
import {noteToHTML} from "./noteToHtml.js"
import {notes, emptyNotes} from "./initializeNotes.js"
import {saveNote} from "./saveNote.js"
import {sortNotesByPriority} from './sortNotes.js'
import {addCategory} from './addCategory.js'
import {addListeners} from './changeCategories.js'

let allCategories = [];
let mainCategory = [];
let currentCategory = mainCategory;
allCategories[mainCategory] = [];
currentCategory = allCategories[mainCategory];
addListeners();
sortNotesByPriority();


export {mainCategory, allCategories, currentCategory}