// this is the default message
const outputTag = document.getElementById('output');
export const defaultErrorMsg = () => {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = "ERROR: unable to process text!";
  outputTag.appendChild(errorMessage);
}

/**
 * args: string (an error message)
 */
export const customErrorMsg = (error) => {
  const errorNotif = document.createElement('p');
  outputTag.appendChild(errorNotif);
  errorNotif.textContent = error;
}