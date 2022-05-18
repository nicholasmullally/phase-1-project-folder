//First Event Listener
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
});
let generateBtn = document.querySelector(".generateBtn");
generateBtn.addEventListener("click", fetchPics);
function fetchPics() {
    let catsImgDiv = document.querySelector(".catsImgDiv")
    fetch("https://api.thecatapi.com/v1/images/search", {
        "credentials": "omit",
        "method": "GET",
        "mode": "cors"
    }).then(response => response.json())
        .then(data => {
            let catsImgUrl = data[0].url
            let catsImgDiv = document.querySelector("#catImage")
            catsImgDiv.setAttribute("src", catsImgUrl)
        }).catch(err => console.log(err))

}

generateBtn.addEventListener("click", fetchPics);
document.getElementById("Form").submit();