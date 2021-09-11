import '../style.css';
import {createTag, deleteTag, getLocal, readMode} from './action';

const input = document.querySelector('input[name="input-create"]');
const addButton = document.querySelector('button.addButton');
const checkbox = document.querySelector('.switch > input');


addButton.addEventListener('click', (event) =>  createTag(event, input));
document.addEventListener('click', deleteTag);
window.addEventListener('load', getLocal);
checkbox.addEventListener('change', (event) => readMode(event, input));