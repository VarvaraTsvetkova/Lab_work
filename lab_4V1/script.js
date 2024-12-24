let generate_btn = document.querySelector(".generate_btn");
generate_btn.addEventListener('click', fetchPics);

function fetchPics() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then((data) => {
            let catsImgUrl = data[0].url

            let catsImgEl = document.createElement('img')
            catsImgEl.setAttribute('src', `${catsImgUrl}`)
            catsImgEl.classList.add('showcase')

            let catImgDiv = document.querySelector('.catsImgDiv')
            catImgDiv.appendChild(catsImgEl)
        })
    .catch(err => console.log(err))
}
