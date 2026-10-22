//getAtribute - obter valor do atributo (valor da linha)
//setAtribute - definir ou modificar o valor da linha

function changeImage() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "hollow.jpg") {
        img.setAttribute("src", "rigb.jpg");
        img.setAttribute("alt", "rigb");
    } else { //caso contrario, realize o processo inverso
        img.setAttribute("src", "hollow.jpg")
        img.setAttribute("alt","hollow")

    }
}