const apiURL = "https://raw.githubusercontent.com/cuneydbolukoglu/challenge/main/challenge-carousel.json";
const carousel = document.querySelector(".carousel");
let data = [];

function carouselInit() {
  for (i = 0; i < data.length; i++) {
    carousel.innerHTML += `<img src="${data[i].imgUrl}" alt="${data[i].name}" />`
  }
}

function initListeners() {
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");
  const carouselImg = document.querySelectorAll(".carousel img");
  let currentIndex = 0;

  leftButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + carouselImg.length) % carouselImg.length;
    imgShowSlide(currentIndex);
  });
  rightButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % carouselImg.length;
    imgShowSlide(currentIndex);
  });
}

function initCircleListeners() {
  const circle = document.querySelectorAll(".carousel-circle .circle");

  circle.forEach((item, index) => {
    item.addEventListener("click", function () {
      imgShowSlide(index);
    });
  });
}

function imgShowSlide(index) {
  const carouselImg = document.querySelectorAll(".carousel img");
  const circle = document.querySelectorAll(".carousel-circle .circle");

  carouselImg.forEach((item, key) => {
    if (key === index) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  circle.forEach(circleItem => {
    circleItem.classList.remove("carousel-circle-active");
  });

  circle[index].classList.add("carousel-circle-active");
}

axios.get(apiURL).then(
  response => {
    data = response.data;
    this.carouselInit();
    this.initListeners();
    this.imgShowSlide(0);
    this.initCircleListeners();
  },
  error => {
    console.log(error);
  }
)