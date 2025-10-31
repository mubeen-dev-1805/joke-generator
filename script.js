document.addEventListener("DOMContentLoaded", () => {
  const generatorButton = document.getElementById("generator");
  const jokeDisplay = document.getElementById("joke-display");
  const jokeList = document.getElementById("joke-list");
  const jokeType = document.getElementById("joke-type");

  generatorButton.addEventListener("click", async () => {
    const jokeData = await getJoke();
    putJoke(jokeData);
  });

  async function getJoke() {
    const query = jokeType.value;
    const url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=${query}&inc=categories%252Cid%252Ccontent&page=1`;
    const response = await fetch(url);
    const data = response.json();

    return data;
  }

  function putJoke(data) {
    console.log(data);

    data.data.data.forEach((joke) => {
      console.log(joke);

      const li = document.createElement("li");
      li.setAttribute("id", joke.id);
      li.textContent = joke.content;
      jokeList.appendChild(li);
    });

    jokeDisplay.classList.remove("hidden");
  }
});
