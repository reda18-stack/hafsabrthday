// Simple audio play function
function playSocksAudio(e) {
    const audio = document.getElementById('socksAudio');
    audio.currentTime = 0; // Reset to start
    audio.play().catch(e => console.log('Audio play failed'));
    
    // Visual feedback
    if (e && e.target) {
        const element = e.target;
        element.style.transform = 'scale(1.3)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 300);
    }
}

// Create floating socks
function createTouchableSocks() {
    const container = document.querySelector('.socks-emojis-container');
    
    for (let i = 0; i < 15; i++) {
        const sock = document.createElement('div');
        sock.className = 'socks-emoji';
        sock.textContent = '🧦';
        sock.style.left = Math.random() * 100 + 'vw';
        sock.style.top = Math.random() * 100 + 'vh';
        sock.style.animationDelay = Math.random() * 5 + 's';
        
        sock.addEventListener('click', playSocksAudio);
        container.appendChild(sock);
    }
}

// Setup header socks
function setupHeaderSocks() {
    const headerSocks = document.querySelectorAll('.touch-sock');
    headerSocks.forEach(sock => {
        sock.addEventListener('click', playSocksAudio);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    createTouchableSocks();
    setupHeaderSocks();
    
    // Event listeners for buttons
    document.getElementById('generateCard').addEventListener('click', generateCard);
    document.getElementById('shareCard').addEventListener('click', shareCard);
    document.getElementById('newCard').addEventListener('click', newCard);
});

// Your existing functions
function generateCard() {
    let name = document.getElementById('name').value.trim();
    let theme = document.getElementById('theme').value;

    if (name === "") {
        alert("Please enter a name.");
        return;
    }

    let cardTitle = document.getElementById('cardTitle');
    let cardMessage = document.getElementById('cardMessage');
    let cardIcon = document.getElementById('cardIcon');
    let card = document.getElementById('card');

    let themeMessages = {
        birthday: {
            message: `🎂 Happy Birthday, ${name}! 🎉 3o9ba l 100 3am wzzyada nchaelah wbnnnaja7 yarby wbach ma tmnniti w li fkhatrk yystajblk lih sidi rbi yaaaarby w lqh ykhlilk walidik rak merdya wakha tyy7ti salaire dyal mowddaf hhhhh ❤️`,
            icon: "🎂"
        },
        congratulations: {
            message: `🎉 Congratulations, ${name}! 🏆 Keep shining and achieving great things!`,
            icon: "🏆"
        },
        love: {
            message: `To my dear ${name}, lah ynjjik mn hadi hhhhhhhhhhh`,
            icon: "❤️"
        },
        friendship: {
            message: `🌟 Hey ${name}! Thanks for being such an amazing friend!`,
            icon: "🤗"
        }
    };

    let selectedTheme = themeMessages[theme];
    
    cardTitle.innerText = `${selectedTheme.icon} ${
        theme.charAt(0).toUpperCase() + theme.slice(1)
    } Greeting`;
    
    cardMessage.innerText = selectedTheme.message;
    cardIcon.innerText = selectedTheme.icon;

    card.style.display = "block";
    
    // Add confetti for birthday theme
    if (theme === "birthday") {
        createConfetti();
    }
}

function newCard() {
    document.getElementById('card').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('name').focus();
}

function shareCard() {
    if (navigator.share) {
        navigator.share({
            title: 'Greeting Card',
            text: document.getElementById('cardMessage').innerText,
            url: window.location.href
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        const message = document.getElementById('cardMessage').innerText;
        navigator.clipboard.writeText(message).then(() => {
            alert('Message copied to clipboard!');
        }).catch(() => {
            alert('Copy this message: ' + message);
        });
    }
}

function createConfetti() {
    const colors = ['#ff4081', '#d81b60', '#ff9800', '#4caf50', '#2196f3'];
    const container = document.querySelector('.socks-emojis-container');
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}
