document
  .querySelectorAll('.tagsMenu input[type=checkbox]')
  .forEach((input) => input.addEventListener('change', () => input.form.submit()));
