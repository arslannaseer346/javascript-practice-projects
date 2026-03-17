const inputtext = document.getElementById('text')
const button = document.getElementById('btnadd')
const ul = document.getElementById('addlist')
button.addEventListener('click', function () {
    let inputvalue = inputtext.value
    if (!inputvalue == "") {

        const createli = document.createElement('li')
        const delbtn = document.createElement('button')
        createli.innerText = inputvalue;
        delbtn.innerText = "X";
        ul.appendChild(createli);
        createli.appendChild(delbtn);
        inputtext.value = ""
        delbtn.addEventListener('click', function () {
            createli.remove()
        })
    }
    else {
        alert("please fill the input");
    }


})