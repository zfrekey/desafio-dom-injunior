let button = document.querySelector('button')

button.addEventListener("click", ()=> {
    let feedback = document.getElementById("feedback").value;
    let name = document.getElementById("name").value;

    name = capitalizeWords(name);

    messageAdd(name, feedback);
})

function messageAdd(titulo, paragrafo) {
    let box = document.createElement("div");
    box.classList.add("main__answers__answer");

    let h2 = document.createElement("h2");
    h2.textContent = titulo;

    let p = document.createElement("p");
    p.textContent = paragrafo;

    box.appendChild(h2);
    box.appendChild(p);

    let lastSection = document.querySelector(".main__answers");
    lastSection.appendChild(box); 

    document.getElementById("name").value = "";
    document.getElementById("feedback").value = "";
}

function capitalizeWords(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}


