const aumento = document.querySelector("#aumento")
const reset = document.querySelector("#reset")
const reducir = document.querySelector("#reducir")
let contador = document.getElementById("contador")
let conteo = 0;

aumento.addEventListener("click", () =>
 aumentar()
)

reset.addEventListener("click", () =>
 resetear()
)

reducir.addEventListener("click", () =>
 decrementar()
)

function aumentar(){
    conteo++;
    contador.innerHTML = conteo;
}

function resetear(){
    conteo = 0;
    contador.innerHTML = conteo;
}

function decrementar(){
    if(conteo <= 0){
        return ""
    }
    conteo--;
    contador.innerHTML = conteo;
}