const fileUploadInput = document.querySelector(".fileUpload__input");
const uploadLabelText = document.getElementById("uploadText");
const previewImageElement = document.getElementById("uploadPreviewImage");
const plusIconElement = document.querySelector(".fileUpload__plus");

if (fileUploadInput) {
  fileUploadInput.addEventListener("change", function () {
    if (!fileUploadInput.files.length) return;

    const selectedFile = fileUploadInput.files[0];

    if (uploadLabelText) {
      uploadLabelText.textContent = selectedFile.name;
    }

    const fileReader = new FileReader();

    fileReader.onload = function (event) {
      if (previewImageElement) {
        previewImageElement.src = event.target.result;
        previewImageElement.style.display = "block";
      }

      if (plusIconElement) {
        plusIconElement.style.display = "none";
      }
    };

    fileReader.readAsDataURL(selectedFile);
  });
}
