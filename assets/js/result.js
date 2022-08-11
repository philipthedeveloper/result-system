const categoryName = document.querySelector("#category_name");
const nomineeName = document.querySelector("#nominee_name");
const modal = document.querySelector(".modal_container");
const close_modal = document.querySelector("#close_modal");
const processor = document.querySelector(".processor");
const resultForm = document.forms["nominee_result"];
const success_container = document.querySelector(".success_container");
const close_success_modal = document.querySelector("#close_success");
const nomineePara = document.querySelector("#nominee");
const score = document.querySelector("#score");

document.querySelector("#back").onclick = () => window.history.back();

categoryName.onchange = function () {
  const category = this.value;
  if (category === "none") {
    nomineeName.innerHTML = `<option value="none"> ~ </option>~`;
    return;
  }
  fetch(`${location.href}/${category}`)
    .then((res) => res.json())
    .then((data) => {
      nomineeName.innerHTML = `<option value="none"> ~ </option>`;
      data.forEach((nominee) => {
        nomineeName.innerHTML += `<option value="${nominee}"> ${nominee} </option>`;
      });
    })
    .catch((err) => console.log(err));
};

resultForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const category = categoryName.value;
  const nominee = nomineeName.value;
  if (category === "none" || nominee === "none") {
    modal.style.visibility = "visible";
    return;
  }
  processor.style.visibility = "visible";
  const requestedResult = {
    categoryName: category,
    nomineeName: nominee,
  };

  handleFetchResult(requestedResult);
});

close_modal.addEventListener("click", function (e) {
  modal.style.visibility = "hidden";
});

const handleFetchResult = async (info) => {
  try {
    const res = await fetch(
      `${location.href}/score/${info.categoryName}/${info.nomineeName}`
    );
    const data = await res.json();
    setTimeout(() => {
      nomineePara.innerHTML = data.name;
      score.innerHTML = data.score;
      processor.style.visibility = "hidden";
      success_container.style.visibility = "visible";
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

close_success_modal.onclick = function (e) {
  success_container.style.visibility = "hidden";
};
