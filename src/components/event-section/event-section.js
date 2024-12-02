// Функция для открытия модального окна
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("no-scroll"); // Блокируем прокрутку страницы
  }
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); // Убираем блокировку прокрутки
  }
}

// Убедитесь, что обработчики событий добавляются только при наличии соответствующих элементов
if (document.querySelector(".eventtModalBtn")) {
  // Открытие первого модального окна
  document
    .querySelector(".eventtModalBtn")
    .addEventListener("click", function () {
      openModal("cancelParticipationModal");
    });
}

if (document.querySelector(".confirmCancel")) {
  // Подтверждение отмены участия
  document
    .querySelector(".confirmCancel")
    .addEventListener("click", function () {
      closeModal("cancelParticipationModal");
      openModal("cancelledModal");
    });
}

if (document.querySelectorAll(".closeModal").length > 0) {
  // Закрытие модальных окон через кнопки "Закрыть"
  document.querySelectorAll(".closeModal").forEach((button) => {
    button.addEventListener("click", function () {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
      }
    });
  });
}

if (document.querySelectorAll(".close").length > 0) {
  // Закрытие модальных окон через крестик
  document.querySelectorAll(".close").forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      const modal = closeButton.closest(".modal");
      if (modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
      }
    });
  });
}

if (document.querySelectorAll(".modal").length > 0) {
  // Закрытие модального окна при клике вне содержимого
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
      }
    });
  });
}
