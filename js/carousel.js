window.onload = function () {
  const socialImages = [
    "img/img_cs1_1.jpg",
    "img/img_cs1_2.jpg",
    "img/img_cs1_3.jpg",
    "img/img_cs1_4.jpg",
  ];

  const brandingImages = [
    "img/img_cs2_1.jpg",
    "img/img_cs2_2.jpg",
    "img/img_cs2_3.jpg",
    "img/img_cs2_4.jpg",
  ];

  const webImages = ["img/img_cs3_1.jpg", "img/img_cs3_2.jpg"];

  const delay = 3000;
  let currentPosition = 0;
  let currentPositionWeb = 0;
  let $socialImage = document.querySelector("#social-image");
  let $brandingImage = this.document.querySelector("#branding-image");
  let $webImage = this.document.querySelector("#web-image");
  let interval = setInterval(nextImage, delay);
  let intervalWeb = setInterval(nextImageWeb, delay);

  function nextImage() {
    if (currentPosition >= socialImages.length - 1) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    renderImage();
  }

  function nextImageWeb() {
    if (currentPositionWeb >= webImages.length - 1) {
      currentPositionWeb = 0;
    } else {
      currentPositionWeb++;
    }
    renderImage();
  }

  function renderImage() {
    $socialImage.style.backgroundImage = `url(${socialImages[currentPosition]})`;
    $brandingImage.style.backgroundImage = `url(${brandingImages[currentPosition]})`;
    $webImage.style.backgroundImage = `url(${webImages[currentPositionWeb]})`;
  }

  renderImage();
};
