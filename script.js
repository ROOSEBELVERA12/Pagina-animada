const noBtn = document.getElementById('noBtn');
        let moveCount = 0;
        noBtn.addEventListener('mouseover', function() {
            moveCount++;
            const maxX = window.innerWidth - noBtn.offsetWidth - 20;
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;
            const randX = Math.floor(Math.random() * maxX);
            const randY = Math.floor(Math.random() * maxY);
            noBtn.style.position = 'absolute';
            noBtn.style.left = randX + 'px';
            noBtn.style.top = randY + 'px';
            if (moveCount > 5) {
                noBtn.innerText = "¿Segura?";
            }
        });

        function respuesta(ans) {
            const card = document.getElementById('mainCard');
            if (ans === 'yes') {
                card.innerHTML = `
                    <div class="heart">💖</div>
                    <h1>¡Sabía que dirías que sí! 😍</h1>
                    <p>¡Eres mi verdadero sentimiento! 💕</p>
                    <p>¡Podre tener una oportunidad de tenerte a mi lado y cuidar de tu circulo, espero tu respuesta! 💕</p>
                    <p>¡YOU ARE MY BEAUTIFUL MOON, YOU ARE PART OF MY LIFE, I LOVE YOU! 💕</p>
                `;
                card.innerHTML += `
                    <img src="img1.jpg" alt="Foto 1" style="width:180px; border-radius:15px; margin:10px;">
                    <img src="img2.jpg" alt="Foto 2" style="width:180px; border-radius:15px; margin:10px;">
                `;
            } else {
                card.innerHTML = `
                    <div class="heart">💔</div>
                    <h1>¡Oh no! 😢</h1>
                    <p>¡Dame otra oportunidad!</p>
                `;
            }
        }