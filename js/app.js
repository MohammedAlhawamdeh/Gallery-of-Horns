"use strict";

let arrayOfObjects = [];

function Images(description, horns, image_url, keyword, title) {
  this.description = description;
  this.horns = horns;
  this.image_url = image_url;
  this.keyword = keyword;
  this.title = title;
  arrayOfObjects.push(this);
}

function render() {
  arrayOfObjects.forEach((val) => {
    let div = document.getElementById("div1");
    let imgEl = document.createElement("img");
    div.appendChild(imgEl);
    imgEl.src = val.image_url;
  });
}

removeEventListener;

fetch("../data/page-1.json")
  .then((results) => results.json())
  .then((data) => {
    data.forEach((val) => {
      new Images(
        val.description,
        val.horns,
        val.image_url,
        val.keyword,
        val.title
      );
    });
    render();
    filter();
  });

function filter() {
  let keywordArray = [];
  let selection = document.getElementById("selection");
  arrayOfObjects.forEach((val, idx) => {
    keywordArray.push(val.keyword);
  });
  let unique = [...new Set(keywordArray)];
  console.log(unique);
  unique.forEach((val2) => {
    let optionEl = document.createElement("option");
    selection.appendChild(optionEl);
    optionEl.textContent = `${val2}`;
    optionEl.setAttribute("value", `${val2}`);
  });
  console.log(keywordArray);
  selection.addEventListener("change", () => {
    document.getElementById("div1").style.display = "none";
    let div = document.getElementById("div2");
    div.innerHTML = "";
    arrayOfObjects.forEach((val) => {
      if (selection.options[selection.selectedIndex].text === val.keyword) {
        let imgEl = document.createElement("img");
        div.appendChild(imgEl);
        imgEl.src = val.image_url;
      }
    });
  });
}
