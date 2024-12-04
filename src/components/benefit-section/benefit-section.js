const formTicketMore = document.querySelector(".formTicketMore");
const submitBtn = document.querySelector("#submitBtn");

// Проверка, существуют ли эти элементы на странице
if (formTicketMore && submitBtn) {
  // Функция для проверки всех строк
  function toggleSubmitButton() {
    const rows = document.querySelectorAll(".formTicket__row");
    let allFilled = true;
    rows.forEach((row) => {
      const nameInput = row.querySelector(".guest-name");
      const selectInput = row.querySelector(".ticket-type");
      // Проверяем, если хоть одно поле пустое, делаем кнопку неактивной
      if (!nameInput.value || !selectInput.value) {
        allFilled = false;
      }
    });

    // Активируем или деактивируем кнопку
    if (allFilled) {
      submitBtn.classList.remove("disabled");
    } else {
      submitBtn.classList.add("disabled");
    }
  }

  // Добавляем обработчик клика для добавления новых строк
  formTicketMore.addEventListener("click", () => {
    const newRow = document.createElement("div");
    newRow.classList.add("formTicket__row");
    newRow.innerHTML = `
      <div class="formTicket-label">
        <input type="text" placeholder="Jméno hosta" class="guest-name" />
      </div>
      <label class="o-select formTicket-label">
         <select class="ticket-type" required>
        <option value="" disabled selected hidden>Typ vstupenky</option>
        <option value="1">Plný vstup</option>
        <option value="2">Zlevněný vstup</option>
      </select>
      </label>
      <button class="remove-btn"></button>
    `;
    formTicketMore.insertAdjacentElement("beforebegin", newRow);

    // Добавляем обработчик удаления
    newRow.querySelector(".remove-btn").addEventListener("click", () => {
      newRow.remove();
      toggleSubmitButton();
    });

    // Перепроверка кнопки после добавления новой строки
    toggleSubmitButton();
  });

  // Добавляем слушателей для всех полей
  document.querySelectorAll(".guest-name, .ticket-type").forEach((input) => {
    input.addEventListener("input", toggleSubmitButton);
  });

  // Перепроверка состояния кнопки при инициализации страницы
  toggleSubmitButton();

  // Обработчик клика на кнопку подтверждения (Potvrdit)
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    // Проверяем, если форма заполнена, открываем второй модал
    if (!submitBtn.classList.contains("disabled")) {
      // Открываем второй модал (cancelBenefit2)
      const myModal = new bootstrap.Modal(
        document.getElementById("cancelBenefit2")
      );
      myModal.show();

      // Закрываем первый модал (cancelBenefit)
      const firstModal = new bootstrap.Modal(
        document.getElementById("cancelBenefit")
      );
      firstModal.hide();
    }
  });
}

// copy code/

// Проверяем, есть ли элементы на странице
const copyButton = document.getElementById("copyButton");
const codeInput = document.getElementById("codeInput");

// Если элементы есть на странице, добавляем обработчик
if (copyButton && codeInput) {
  // Добавляем обработчик клика на кнопку копирования
  copyButton.addEventListener("click", function () {
    // Выделяем текст в поле
    codeInput.select();
    codeInput.setSelectionRange(0, 99999); // Для мобильных устройств

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(codeInput.value).catch(function (err) {
      console.error("Ошибка при копировании: ", err);
    });
  });
} else {
  console.log("Элементы для копирования не найдены на странице.");
}
