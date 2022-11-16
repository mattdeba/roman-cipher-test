const convertButton = document.getElementById('submit-button');
convertButton.addEventListener('click', async () => {
    const number = document.getElementById('number').value;
    const numberInteger = parseInt(number);
    if (!( numberInteger >= 0 && numberInteger <= 100 )) {
        alert('Please enter integer from 0 to 100');
    }
    else {
        const data = await fetch(`/converter?number=${number}`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        });
        const jsonData = await data.json();
        document.getElementById('result').innerHTML = jsonData.romanNumber;
    }
});
