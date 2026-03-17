const inputtext = document.getElementById('text')
const button = document.getElementById('btnadd')
const ul = document.getElementById('addlist')
let editlirefrence = null;
button.addEventListener('click', function () {
    let inputvalue = inputtext.value
    if (inputvalue == "") {
        alert("please fill the input");
        return;
    }
    if (editlirefrence !== null) {
        editlirefrence.firstChild.textContent = inputvalue;
        editlirefrence = null;
    }
    else {

        const createli = document.createElement('li')
        const delbtn = document.createElement('button')
        const editbtn = document.createElement('button')
        createli.innerText = inputvalue;
        editbtn.innerText = "Edit";
        delbtn.innerText = "Delete";
        ul.appendChild(createli);
        createli.appendChild(editbtn);
        createli.appendChild(delbtn);

        delbtn.addEventListener('click', function () {
            createli.remove()
        })
        editbtn.addEventListener('click', function () {
            inputtext.value = createli.firstChild.textContent;
            editlirefrence = createli;
        })
    }
    inputtext.value = ""
})