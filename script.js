document.getElementById("generateCard").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let theme = document.getElementById("theme").value;

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  let cardTitle = document.getElementById("cardTitle");
  let cardMessage = document.getElementById("cardMessage");
  let card = document.getElementById("card");

  let themeMessages = {
    birthday: `🎂 Happy Birthday,${name}! 🎉 3o9ba l 100 3am nchaelah wbnnnaja7 yarby wbach ma tmnniti w li fkhatrk yystajblk lih sidi rbi yaaaarby💕`,
    congratulations: `🎉 Congratulations, ${name}! 🏆 Keep shining and achieving great things!`,
    love: `lah ynjjik mn hadi hhhhhhhhhhh`,
    friendship: `🌟 Stay awesome!`,
  };

  cardTitle.innerText = `💌 ${
    theme.charAt(0).toUpperCase() + theme.slice(1)
  } Greeting`;
  cardMessage.innerText = themeMessages[theme];

  card.style.display = "block";
});