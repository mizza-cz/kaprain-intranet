staffDirectoryClick();
function staffDirectoryClick() {
  const bodyEl = document.querySelector("body");
  const staffDirectoryOpener = document.querySelector(
    ".staffDirectory-filter__btn"
  );
  if (!bodyEl || !staffDirectoryOpener) {
    return;
  }
  staffDirectoryOpener.addEventListener("click", function () {
    if (!this.classList.contains("staffDirectory-open")) {
      bodyEl.classList.add("staffDirectory-nav-open");
      this.classList.add("staffDirectory-open");
    } else {
      bodyEl.classList.remove("staffDirectory-nav-open");
      this.classList.remove("staffDirectory-open");
    }
  });
}

// Селекторы
const tagsContainer = document.querySelector(".staffDirectory-filter__tags");
const checkboxes = document.querySelectorAll(
  ".staffDirectory-category input[type='checkbox']"
);
const form = document.querySelector(".staffDirectory-category");

// Проверка, существуют ли нужные элементы на странице
if (tagsContainer && checkboxes.length > 0 && form) {
  function updateTags() {
    // Проверяем, существует ли tagsContainer
    if (tagsContainer) {
      tagsContainer.innerHTML = "";
    }

    checkboxes.forEach((checkbox) => {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);

      if (checkbox.checked) {
        // Добавляем класс checked к label
        if (label) {
          label.classList.add("checked");
        }

        // Создаем тег
        const tagText = label ? label.textContent.trim() : "";

        const tag = document.createElement("li");
        tag.innerHTML = `
          <div class="staffDirectory-filter__tag">
            ${tagText}
            <span class="remove-tag" style="cursor: pointer;">×</span>
          </div>
        `;

        // Обработчик удаления тега
        tag.querySelector(".remove-tag").addEventListener("click", () => {
          checkbox.checked = false;
          updateTags();
        });

        // Добавляем тег в контейнер, если он существует
        if (tagsContainer) {
          tagsContainer.appendChild(tag);
        }
      } else {
        // Убираем класс checked из label
        if (label) {
          label.classList.remove("checked");
        }
      }
    });
  }

  // Обновляем теги при изменении состояния чекбоксов
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateTags();
    });
  });

  // Первоначальное обновление
  updateTags();
}


