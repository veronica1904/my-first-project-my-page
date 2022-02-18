const tutorial = document.getElementById("tutorialesContent");
const container = document.getElementById("contentLinks")
var templateLink = document.createDocumentFragment();


const url = "http://localhost:4000/data";

document.addEventListener("DOMContentLoaded", () => {
    mostrar(url)
})
const mostrar = async (url) => {
    const rest = await fetch(url);
    const data = await rest.json();
    console.log(data);
    data.forEach((element, index) => {
        /*var cover = document.createElement("a")
        var image = document.createElement("img")
        image.setAttribute("src", `./image/pelicula/series_japonesa/${element.name}.png`)
        cover.appendChild(image)
        tutorial.appendChild(cover)*/
        const iframe = document.createElement("iframe")
        iframe.setAttribute("src", element.link)
        iframe.setAttribute("title", element.name)
        iframe.setAttribute("width", "430")
        iframe.setAttribute("height", "485")
        iframe.setAttribute("frameborder", "10")
        templateLink.appendChild(iframe);
    })
    console.log(container);
    container.appendChild(templateLink)
};
