function preview() {
  const file = document.getElementById("file").files[0];
  const error = document.getElementById("error");
  const preview = document.getElementById("preview");

  preview.innerHTML = "";
  error.innerText = "";

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    error.innerText = "Only image files allowed";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    error.innerText = "Max file size 2MB";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    preview.innerHTML = `<img src="${reader.result}">`;
  };
  reader.readAsDataURL(file);
}
