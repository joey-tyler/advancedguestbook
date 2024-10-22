document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Name und Nachricht abrufen
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Überprüfen, ob die Felder ausgefüllt sind
    if (name && message) {
        // Neues Listenelement erstellen
        const li = document.createElement('li');
        li.textContent = `${name} sagt: ${message}`;

        // Stern-Button erstellen
        const starButton = document.createElement('button');
        starButton.innerHTML = '⭐';
        starButton.classList.add('star-button');

        // Event-Listener für das Markieren/Hervorheben mit dem Stern
        starButton.addEventListener('click', function() {
            if (li.classList.contains('starred')) {
                li.classList.remove('starred');  // Stern entfernen
            } else {
                li.classList.add('starred');  // Stern hinzufügen
            }
        });

        // Stern-Button dem Listenelement hinzufügen
        li.appendChild(starButton);

        // Eintrag zur Liste hinzufügen
        document.getElementById('guestbook-entries').appendChild(li);

        // Formular zurücksetzen
        document.getElementById('guestbook-form').reset();
    }
});
