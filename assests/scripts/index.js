// const btnGenerate = document.getElementById("btnGenerate")
// btnGenerate.addEventListener("click", async function() {
//   try {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const data = await response.json();
    
//     const adviceId = data.slip.id;
//     const adviceText = data.slip.advice;

//     document.getElementById("slipId").textContent = `Advice #${adviceId}`;
//     document.getElementById("adviceRender").textContent = adviceText;
// } catch (error) {
//     console.error("Erro ao obter conselho:", error);
// }
// })

const adviceUpdateButton = document.querySelector(".advice-update");
const adviceNumber = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".advice-description");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerText = adviceId;
    adviceDescription.innerText = adviceText;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
  
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();