import { FIO } from "../constants/constant.js";

  export  const FioComponent = () => {
    const element = document.createElement('h2');
    element.innerHTML = `${FIO.FirstName} ${FIO.LastName}`;
    return element;
};