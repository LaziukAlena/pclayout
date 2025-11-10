document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.querySelector(".modal__button");
  const modal = document.querySelector(".modal");

  if (!modalBtn || !modal) return;

  modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
      modal.style.display = "";
    }
  });

  const inner = modal.querySelector(".modal__inner");

  if (inner && !inner.querySelector(".modal__close")) {
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.classList.add("modal__close");

    inner.insertBefore(closeBtn, inner.firstChild);

    closeBtn.addEventListener("click", () => {
      modal.style.display = "";
    });
  }
});
