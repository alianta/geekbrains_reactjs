import './index.css';
import TestImage from '../assets/lemur.png';
import { FioComponent } from "./fio/fio.js";
import { DateComponent } from "./date/date.js";


const ImageComponent = () => {
    const element = document.createElement('img');
    element.src = TestImage;
    return element;
};

document.body.appendChild(FioComponent());
document.body.appendChild(DateComponent());
document.body.appendChild(ImageComponent());
