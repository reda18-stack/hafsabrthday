document.getElementById("generateCard").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let theme = document.getElementById("theme").value;

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  let cardTitle = document.getElementById("cardTitle");
  let cardMessage = document.getElementById("cardMessage");
  let cardIcon = document.getElementById("cardIcon");
  let card = document.getElementById("card");

  let themeMessages = {
    birthday: {
      message: `🎂 Happy Birthday, ${name}! 🎉 3o9ba l 100 3am wzzyada nchaelah wbnnnaja7 yarby wbach ma tmnniti w li fkhatrk yystajblk lih sidi rbi yaaaarby💕`,
      icon: "🎂"
    },
    congratulations: {
      message: `🎉 Congratulations, ${name}! 🏆 Keep shining and achieving great things!`,
      icon: "🏆"
    },
    love: {
      message: `KHTY ${name}, lah ynjjik mn hadi hhhhhhhhhhh`,
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
});

document.getElementById("newCard").addEventListener("click", function() {
  document.getElementById("card").style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("name").focus();
});

document.getElementById("shareCard").addEventListener("click", function() {
  if (navigator.share) {
    navigator.share({
      title: 'Greeting Card',
      text: document.getElementById("cardMessage").innerText,
      url: window.location.href
    })
    .catch(error => console.log('Error sharing:', error));
  } else {
    alert("Sharing is not supported in your browser. Copy the message manually.");
  }
});

function createConfetti() {
  const colors = ['#ff4081', '#d81b60', '#ff9800', '#4caf50', '#2196f3'];
  const card = document.getElementById("card");
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = Math.random() * 10 + 5 + "px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}