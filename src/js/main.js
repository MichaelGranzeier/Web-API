let url = "https://api.nasa.gov/planetary/apod?api_key=1rIaWLVh1EaTecbozgywxd4clvwMxJgk4oioP6Bg";
const settings = {
    method: "GET"
}

let apoddate = document.getElementById("search");
apoddate.addEventListener("click", getAPOD);
const apodTitle = document.getElementById("APOD-Title");
const apodImage = document.getElementById("APOD-Image");
const apodCopy = document.getElementById("APOD-Copy");
const apodExplanation = document.getElementById("APOD-Explanation");

function getAPOD(){
    let dateinput = document.getElementById("date");
    let input = dateinput.value;
    url = `https://api.nasa.gov/planetary/apod?api_key=1rIaWLVh1EaTecbozgywxd4clvwMxJgk4oioP6Bg&date=${input}`
    fetch(url, settings)
    .then((response) => {return response.json(); })
    .then((response) => {
    console.log(response);
    apodTitle.innerText = response.title;
    apodImage.src = response.hdurl;
    apodCopy.innerText = "copyright: " + response.copyright;
    apodExplanation.innerText = response.explanation;
    }) 
} 

let ranCount = document.getElementById("searchTwo");
ranCount.addEventListener("click", getRan);
const ranTitle = document.getElementById("ran-Title");
const ranDate = document.getElementById("ran-Date");
const ranImage = document.getElementById("ran-Image");
const ranCopy = document.getElementById("ran-Copy");
const ranExplanation = document.getElementById("ran-Explanation");

function getRan(){
    url = `https://api.nasa.gov/planetary/apod?api_key=1rIaWLVh1EaTecbozgywxd4clvwMxJgk4oioP6Bg&count=1`
    fetch(url, settings)
    .then((response) => {return response.json(); })
    .then((response) => {
    console.log(response);
    ranTitle.innerText = response[0].title;
    ranDate.innerText = response[0].date;
    ranImage.src = response[0].hdurl;
    ranCopy.innerText = "copyright: " + response.copyright;
    ranExplanation.innerText = response[0].explanation;
    }) 
} 

let mrpdate = document.getElementById("esearch");
mrpdate.addEventListener("click", getMrp);
let mrpImage = document.getElementById("mrp-Image");

function getMrp(){
    let edateinput = document.getElementById("edate");
    let inputTwo = edateinput.value;
    console.log(inputTwo)
    let cam = document.querySelector('input[name="cam"]:checked').value.toLowerCase();
    console.log(cam)
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${inputTwo}&camera=${cam}&api_key=1rIaWLVh1EaTecbozgywxd4clvwMxJgk4oioP6Bg`
    fetch(url, settings)
    .then((response) => {return response.json(); })
    .then((response) => {
    console.log(response);
    mrpImage.src = response.photos[0].img_src;
    console.log(mrpImage)
    }) 
} 

function nm(){
    document.body.style.backgroundColor = "black"
    document.getElementById("APOD-Title").style.color = "white";
    document.getElementById("APOD-Copy").style.color = "white";
    document.getElementById("APOD-Explanation").style.color = "white";
    document.getElementById("ran-Title").style.color = "white";
    document.getElementById("ran-Date").style.color = "white";
    document.getElementById("ran-Copy").style.color = "white";
    document.getElementById("ran-Explanation").style.color = "white";
    document.getElementById("cams").style.color = "white";
    document.getElementById("input").style.color = "white";
    document.getElementById("inputTwo").style.color = "white";
    document.getElementById("apod").style.color = "white";
    document.getElementById("ran").style.color = "white";
    document.getElementById("mrp").style.color = "white";
}
    
function dm(){
    document.body.style.backgroundColor = "white"
    document.getElementById("APOD-Title").style.color = "black";
    document.getElementById("APOD-Copy").style.color = "black";
    document.getElementById("APOD-Explanation").style.color = "black";
    document.getElementById("ran-Title").style.color = "black";
    document.getElementById("ran-Date").style.color = "black";
    document.getElementById("ran-Copy").style.color = "black";
    document.getElementById("ran-Explanation").style.color = "black";
    document.getElementById("cams").style.color = "black";
    document.getElementById("input").style.color = "black";
    document.getElementById("inputTwo").style.color = "black";
    document.getElementById("apod").style.color = "black";
    document.getElementById("ran").style.color = "black";
    document.getElementById("mrp").style.color = "black";
}