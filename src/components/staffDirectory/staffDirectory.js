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

const tagsContainer = document.querySelector(".staffDirectory-filter__tags");
const checkboxes = document.querySelectorAll(
  ".staffDirectory-category input[type='checkbox']"
);
const form = document.querySelector(".staffDirectory-category");

if (tagsContainer && checkboxes.length > 0 && form) {
  function updateTags() {
    if (tagsContainer) {
      tagsContainer.innerHTML = "";
    }

    checkboxes.forEach((checkbox) => {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);

      if (checkbox.checked) {
        if (label) {
          label.classList.add("checked");
        }

        const tagText = label ? label.textContent.trim() : "";

        const tag = document.createElement("li");
        tag.innerHTML = `
          <div class="staffDirectory-filter__tag">
            ${tagText}
            <span class="remove-tag" style="cursor: pointer;">×</span>
          </div>
        `;

        tag.querySelector(".remove-tag").addEventListener("click", () => {
          checkbox.checked = false;
          updateTags();
        });

        if (tagsContainer) {
          tagsContainer.appendChild(tag);
        }
      } else {
        if (label) {
          label.classList.remove("checked");
        }
      }
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateTags();
    });
  });

  updateTags();
}

