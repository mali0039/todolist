function setColors() {
let priorityColor = document.querySelectorAll(".small-circle");
    for (let i =0; i<priorityColor.length;i++) {
        console.log(priorityColor[i].parentElement.textContent.trim());
         if (priorityColor[i].parentElement.textContent.trim() =="High") {
            priorityColor[i].style.color = "Red";
        }
        else if (priorityColor[i].parentElement.textContent.trim() == "Med") {
            priorityColor[i].style.color = "Gold";
        }
        else {
            priorityColor[i].style.color = "Green";
        }
    }
    notes.innerHTML += `<div id="add-note" data-toggle="modal" data-target="#exampleModalCenter">
    <p><i class="fas fa-plus" data-toggle="modal" data-target="#exampleModalCenter"></i>Add Note</p>
</div>`
}

export {setColors}