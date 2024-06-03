const instruksCss = document.querySelector(`.truks`);

const navBarMenu = document.querySelector(`.menu-items`);

////blur efect parts
const mainBody = document.getElementById(`mainPart`);
const mainItems = document.querySelector(`.checkbox`);
const mapDiv = document.getElementById(`map`);
/////////////////////////////////////////////////
////instruks boksen
/////////////////////////////////////////////////

/////////-------blur effect ----------
mainItems.addEventListener(`click`, function () {
  console.log(`noe er trykekt`);
  mainBody.classList.toggle(`blur-effect`);
  mapDiv.classList.toggle(`blur-effect`);
});

const toiletBtn = document.querySelector(`.toiletBtn`);

toiletBtn.addEventListener(`click`, function () {
  console.log(`jeg trykker toiletBtn`);
  popup.classList.toggle("hidden");
});

//////////////////--pop up
/* Created by Tivotal */

let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");
/* popup.classList.add(`hidden`); */
closeBtn.addEventListener("click", () => {
  popup.classList.toggle("hidden");
  console.log(`its pressed`);
});
