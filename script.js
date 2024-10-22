document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();

const name = document.getElementById('name').value;
const message = document.getElementById('message').value;
 // Check ob Feld auch ausgefüllt ist
    if (name && message) {
// ein Listenelement erstellen
        const li = document.createElement('li');
        li.textContent = `${name} sagt: ${message}`;
// Stern-Icon Hinzufügen 
        const starButton = document.createElement('button');
        starButton.innerHTML = '⭐';
        starButton.classList.add('star-button');
 // Event-Listener hervorheben
        starButton.addEventListener('click', function() {
            if (li.classList.contains('starred')) {
                li.classList.remove('starred');  // Stern entfernen
            } else {
                li.classList.add('starred');  // Stern hinzufügen
            }
        });

        li.appendChild(starButton);
        document.getElementById('guestbook-entries').appendChild(li);

        
        document.getElementById('guestbook-form').reset();
    }
