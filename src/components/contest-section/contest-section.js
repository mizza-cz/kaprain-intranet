function addEventIfExists(selector, event, handler) {
   const element = document.querySelector(selector);
   if (element) {
     element.addEventListener(event, handler);
   }
 }
 
 // Открытие первого модального окна
 addEventIfExists(".contestModalBtn", "click", function () {
   const modal = document.querySelector(".contest-modal");
   if (modal) {
     modal.style.display = "flex";
     document.body.classList.add("no-scroll"); // Блокируем прокрутку страницы
   }
 });
 
 // Закрытие модальных окон при клике на крестик или вне окна
 document.querySelectorAll(".modal").forEach((modal) => {
   modal.addEventListener("click", function (event) {
     if (
       event.target.classList.contains("modal") ||
       event.target.classList.contains("close")
     ) {
       modal.style.display = "none";
       document.body.classList.remove("no-scroll"); // Убираем блокировку прокрутки
     }
   });
 });
 
 // Сброс формы
 addEventIfExists(".resetForm", "click", function () {
   const inputs = document.querySelectorAll('input[name="answer"]');
   inputs.forEach((input) => (input.checked = false));
 });
 
 // Отправка ответа и открытие второго модального окна
 addEventIfExists(".submitAnswer", "click", function () {
   const selected = document.querySelector('input[name="answer"]:checked');
   if (selected) {
     const contestModal = document.querySelector(".contest-modal");
     const successModal = document.querySelector(".success-modal");
     if (contestModal) contestModal.style.display = "none";
     if (successModal) {
       successModal.style.display = "flex";
       document.body.classList.add("no-scroll"); // Блокируем прокрутку страницы
     }
   } else {
     alert("Vyberte prosím odpověď!");
   }
 });
 
 // Закрытие второго модального окна
 addEventIfExists(".closeSuccessModal", "click", function () {
   const successModal = document.querySelector(".success-modal");
   if (successModal) {
     successModal.style.display = "none";
     document.body.classList.remove("no-scroll"); // Убираем блокировку прокрутки
   }
 });
 