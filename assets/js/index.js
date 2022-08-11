const close_modal = document.querySelector("#close_modal");
const modal = document.querySelector(".modal_container");

if (close_modal) {
  close_modal.addEventListener("click", function (e) {
    modal.style.visibility = "hidden";
  });
}
