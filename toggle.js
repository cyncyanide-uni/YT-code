// toggle between singular and compare
const singular = document.getElementById("singular");
const compare = document.getElementById("compare");
const singularContent = document.getElementById("singularcontent");
const compareContent = document.getElementById("comparecontent");

function resetActiveClass() {
  singular.classList.remove("active");
  compare.classList.remove("active");
}

singular.addEventListener("click", function () {
  resetActiveClass();
  compareContent.style.display = "none";
  singularContent.style.display = "block";
  singular.classList.add("active");
  console.log("Singular option content");
});

compare.addEventListener("click", function () {
  resetActiveClass();
  singularContent.style.display = "none";
  compareContent.style.display = "block";

  compare.classList.add("active");
  console.log("Compare option content");
});
