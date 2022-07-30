export const defaultErrorMsg = () => {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = "ERROR: unable to process text!";
  document.body.appendChild(errorMessage);
  document.body.append(document.createElement("hr"));
}

export const customErrorMsg = (error) => {
  const errorNotif = document.createElement('p');
  document.body.appendChild(errorNotif);
  errorNotif.textContent = error;
  document.body.append(document.createElement("hr"));
}