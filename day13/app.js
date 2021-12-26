let input = document.querySelector("input");
let header = document.querySelector(".heading");
let container = document.querySelector(".container");

let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  input.remove();
  btn.remove();
  container.classList.remove("container");
  header.classList.remove("heading");
  header.innerHTML = "";
  container.classList.add("result");
  let response = getData(input.value);
  let user = await response;
  let status = user.status;
  if (status == "FAILED") {
    container.innerHTML = "<h1> Invalid Username! </h1>";
    container.classList.add("error");
  } else {
    showData(user);
  }
});

async function getData(username) {
  const res = await fetch(
    `https://codeforces.com/api/user.info?handles=${username}`
  );
  const data = await res.json();
  // console.log(data)
  return data;
}

function showData(user) {
  const picture = document.createElement("img");
  picture.src = user.result[0].titlePhoto;
  container.appendChild(picture);
  picture.classList.add("pic");

  const username = document.createElement("h2");
  username.innerHTML = user.result[0].handle;
  container.appendChild(username);

  const rank = document.createElement("h3");
  rank.innerHTML = "Rank: " + user.result[0].rank;
  container.appendChild(rank);
  rank.classList.add("rank");

  const rating = document.createElement("h3");
  rating.innerHTML = "Rating: " + user.result[0].rating;
  container.appendChild(rating);
}
