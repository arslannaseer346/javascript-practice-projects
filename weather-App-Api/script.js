const searchbtn = document.getElementById('btnadd');
const displayresult = document.getElementById('result');
searchbtn.addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (city == "") {
        displayresult.innerText = "Please Enter a city name "
        displayresult.style.color = 'red'
        displayresult.style.textAlign = 'center'
        return;
    }
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        console.log(data);
    }

    catch (error) {

    }


})