const fileUploadInput = document.querySelector(".fileUpload__input");
const uploadLabelText = document.getElementById("uploadText");
const previewImageElement = document.getElementById("uploadPreviewImage");
const plusIconElement = document.querySelector(".fileUpload__plus");

fileUploadInput.addEventListener("change", function () {
  if (!fileUploadInput.files.length) return;

  const selectedFile = fileUploadInput.files[0];

  uploadLabelText.textContent = selectedFile.name;

  const fileReader = new FileReader();

  fileReader.onload = function (event) {
    previewImageElement.src = event.target.result;
    previewImageElement.style.display = "block";

    plusIconElement.style.display = "none";
  };

  fileReader.readAsDataURL(selectedFile);
});
