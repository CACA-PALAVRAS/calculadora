const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");
const etapa3 = document.getElementById("etapa3");
const resultadoDiv = document.getElementById("resultado");

// Recupera resultados salvos ou cria array vazio
let resultadosUsados = JSON.parse(localStorage.getItem("resultadosUsados")) || [];

document.getElementById("btn1").addEventListener("click", () => {
  etapa1.style.display = "none";
  etapa2.style.display = "block";
});

document.getElementById("btn2").addEventListener("click", () => {
  etapa2.style.display = "none";
  etapa3.style.display = "block";
});

document.getElementById("btn3").addEventListener("click", calcular);

document.getElementById("btn4").addEventListener("click", () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  resultadoDiv.innerText = "";
  etapa1.style.display = "block";
  etapa2.style.display = "none";
  etapa3.style.display = "none";
});

function calcular() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operacao").value;
  let res;

  if (isNaN(n1) || isNaN(n2)) {
    resultadoDiv.innerText = "Preencha os dois números.";
    return;
  }

  if (op === "soma") res = n1 + n2;
  if (op === "subtracao") res = n1 - n2;
  if (op === "multiplicacao") res = n1 * n2;
  if (op === "divisao") {
    if (n2 === 0) {
      resultadoDiv.innerText = "Erro: não dá pra dividir por zero.";
      return;
    }
    res = n1 / n2;
  }

  const chave = `${n1} ${op} ${n2}`;
  if (resultadosUsados.includes(chave)) {
    resultadoDiv.innerText = "Esse cálculo já foi feito!";
  } else {
    resultadosUsados.push(chave);
    localStorage.setItem("resultadosUsados", JSON.stringify(resultadosUsados));
    resultadoDiv.innerText = `Resultado: ${res}`;
  }
}