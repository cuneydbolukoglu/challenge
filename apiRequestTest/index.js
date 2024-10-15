const apiUrl = "https://raw.githubusercontent.com/maydinn37/Challenge/refs/heads/main/slider-images.json";
const carousel = document.querySelector(".carousel");
let data = [];

function carouselInıt() {
    for (let i = 0; i < data.length; i++) {
        carousel.innerHTML += `<img src=${data[i].url} alt=${data[i].name} >`
    }
}

axios.get(apiUrl).then(
    response => {
        const respData = response.data;
        data = respData;
        // respData.map((item) =>
        //     carousel.innerHTML += `<img src=${item.url} alt=${item.name} >`
        // );
        carouselInıt();
    },
    error => {
        console.error(error);
    }
)