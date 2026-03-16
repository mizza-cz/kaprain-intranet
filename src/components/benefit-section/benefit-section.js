const formTicketMore = document.querySelector(".formTicketMore");
const submitBtn = document.querySelector("#submitBtn");

if (formTicketMore && submitBtn) {
  function toggleSubmitButton() {
    const rows = document.querySelectorAll(".formTicket__row");
    let allFilled = true;
    rows.forEach((row) => {
      const nameInput = row.querySelector(".guest-name");
      const selectInput = row.querySelector(".ticket-type");

      if (!nameInput.value || !selectInput.value) {
        allFilled = false;
      }
    });

    if (allFilled) {
      submitBtn.classList.remove("disabled");
    } else {
      submitBtn.classList.add("disabled");
    }
  }

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

    newRow.querySelector(".remove-btn").addEventListener("click", () => {
      newRow.remove();
      toggleSubmitButton();
    });

    toggleSubmitButton();
  });

  document.querySelectorAll(".guest-name, .ticket-type").forEach((input) => {
    input.addEventListener("input", toggleSubmitButton);
  });

  toggleSubmitButton();

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!submitBtn.classList.contains("disabled")) {
      const myModal = new bootstrap.Modal(
        document.getElementById("cancelBenefit2")
      );
      myModal.show();

      const firstModal = new bootstrap.Modal(
        document.getElementById("cancelBenefit")
      );
      firstModal.hide();
    }
  });
}

const copyButton = document.getElementById("copyButton");
const codeInput = document.getElementById("codeInput");

if (copyButton && codeInput) {
  copyButton.addEventListener("click", function () {
    codeInput.select();
    codeInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(codeInput.value).catch(function (err) {
      console.error("chyba ", err);
    });
  });
} else {
  console.log("");
}
