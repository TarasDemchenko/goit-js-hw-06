const sumItems = document.querySelectorAll(".item");
console.log("Number of categories:", sumItems.length);

sumItems.forEach((sumItem) => {
  console.log("Category:", sumItem.firstElementChild.textContent);
  console.log("Elements:", sumItem.lastElementChild.children.length);
});
