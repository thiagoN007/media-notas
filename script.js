const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

})

function calcularMedia() {
        const nome = document.getElementById("nome").value;
        const nota1 = document.getElementById("nota1").value;
        const nota2 = document.getElementById("nota2").value;
        const nota3 = document.getElementById("nota3").value;
        const nota4 = document.getElementById("nota4").value;
        const resultado = document.getElementById("resultado");


        if(!nome || !nota1 || !nota2 || !nota3 || !nota4) {
            alert("Campos vazios!");
            return;
        }
    
        const media = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)/4;

        media.toFixed(2);

        if(media >=6) {
            resultado.textContent = `😄 Parabéns, ${nome} você atingiu a média com ${media} .`
            resultado.style.color = "white";
        }

        else if(media >=5) {
            resultado.textContent = `😔 Que pena, ${nome} você esta de recuperação coma a média ${media}`
            resultado.style.color = "yellow";
        }

        else{
            resultado.textContent = `😱 Nossa, ${nome} você reprovou!`
            resultado.style.color = "red";
        }

        document.getElementById("nome").value = "";
        document.getElementById("nota1").value = "";
        document.getElementById("nota2").value = "";
        document.getElementById("nota3").value = "";
        document.getElementById("nota4").value = "";
    }