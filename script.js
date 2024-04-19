async function generateActivity(cardNumber, type) {
    var card = document.querySelector('.flip-card' + cardNumber);
    var url = `https://www.boredapi.com/api/activity?type=${type}`;
    try {
        if (!card.classList.contains('clicked')) {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ERROR: status ${response.status}`);
            }
            const data = await response.json();
            
            // Show the activity on the back side of the card
            document.getElementById('flip-card-back' + cardNumber).innerHTML = `<p>${data.activity}</p>`;
            
            // Flip the card to reveal the back side
            flipCard(card);
        } else {
            // If the card is already flipped, just flip it back
            flipCard(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function flipCard(card) {
    card.classList.toggle('clicked');
}

