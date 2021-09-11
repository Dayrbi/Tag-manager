import { tagStore } from "./action";
import Cross from "../outline_close_black_24dp.png";


export default class Tag {
    constructor(name) {
        this.name = name;
    }
    create (div) {
        const divContent = document.createElement('span');
        divContent.textContent = this.name;

        const img =document.createElement('img');
        img.src = Cross;
        img.classList.add('deleteBut');
        img.setAttribute('title', "Удалить тег");



        div.append(divContent);
        div.append(img);


        div.classList.add('tag');
        div.setAttribute('data-action', tagStore.length);
        document.querySelector('div.tag-container').append(div);

        this.id = tagStore.length;

        tagStore.push(this);

    }

}