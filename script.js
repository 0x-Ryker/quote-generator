const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = function() {
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.innerHTML = `${item.joke}`;
    });
}
btn.addEventListener("click",getJoke);
getJoke();

document.getElementById("btn").style.marginTop = "20px";
