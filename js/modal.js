document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.querySelector(".modal__button");
  const modal = document.querySelector(".modal");

  // Проверяем, что кнопка и модалка реально есть
  if (!modalBtn || !modal) return;

  // Открываем модалку по клику на кнопку
  modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Закрываем по клику вне содержимого
  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
      modal.style.display = "";
    }
  });

  // Добавляем крестик, если его ещё нет
  const inner = modal.querySelector(".modal__inner");
  if (inner && !inner.querySelector(".modal__close")) {
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.classList.add("modal__close");
    inner.appendChild(closeBtn);

    // Закрываем модалку по клику на крестик
    closeBtn.addEventListener("click", () => {
      modal.style.display = "";
    });
  }
});
