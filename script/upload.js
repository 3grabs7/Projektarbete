const fileInput = document.querySelector("#inputImg");
const preview = document.getElementById("preview");

//Uploads img
fileInput.addEventListener(
  "change",
  function (e) {
    preview.onload = function () {
      let dims = this.naturalWidth + "x" + this.naturalHeight;
      window.URL.revokeObjectURL(this.src);
    };

    let url = URL.createObjectURL(e.target.files[0]);
    preview.setAttribute("src", url);
  },
  false
);
