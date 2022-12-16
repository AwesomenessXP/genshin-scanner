export const outputTag = document.getElementById('output');

export let renderOutput = () => {
  const newPara = document.createElement("p");
  const outputTag = document.getElementById('output');
  newPara.className = "output";
  outputTag.appendChild(newPara);
  return {
    newPara,
    outputTag
  }
};