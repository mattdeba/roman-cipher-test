const convertButton = document.getElementById('submit-button');
convertButton.addEventListener('click', async () => {
    const number = document.getElementById('number').value;
    const numberInteger = parseInt(number);
    if (!( numberInteger >= 0 && numberInteger <= 100 )) {
        alert('Please enter integer from 0 to 100');
    }
    else {
        const eventSource = new EventSource(`/converter?number=${number}`);
        eventSource.onmessage = function (event) {
            document.getElementById('result').innerHTML = event.data;
            eventSource.close();
        }
    }
});
