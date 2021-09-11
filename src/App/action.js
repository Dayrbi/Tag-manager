import Tag from "./basic";
export let tagStore = [];




export function createTag (event, input) {
    console.log(event.target);

    let value = input.value;
    let valueUp = value[0].toUpperCase() + value.slice(1);


    if(valueUp.trim()) {

        let div = document.createElement('div');
        
        new Tag(valueUp).create(div);

        input.value = "";


        console.log("store", tagStore);

        changeLocal();
    }

}

export function deleteTag (event) {
    if(!event.target.classList.contains('deleteBut')) {
        return
    }
    console.log('delete')
    if(event.target.parentElement.hasAttribute('data-action')) {

        let tagNum = event.target.parentElement.getAttribute('data-action');

        tagStore.splice(tagNum, 1);

        let tagArr = document.querySelectorAll('div.tag');

       let tagArrCopy = [...tagArr];

       tagArrCopy.splice(tagNum, 1);
       tagArr = tagArrCopy;

    
        for(let i = tagNum; i < tagStore.length; i++) {

            tagStore[i].id -= 1;

            tagArr[i].dataset.action -= 1;

        }

        event.target.parentElement.remove();

        changeLocal();
    }


}
export function readMode (event, inputCreate) {
    if(event.target.checked) {

        inputCreate.readOnly = true;

         document.querySelector('div.tag-container').classList.add('hide');
    }
    else {
        inputCreate.readOnly = false;

        document.querySelector('div.tag-container').classList.remove('hide');
    }


}


function changeLocal () {

    let divContainer = document.querySelector('div.tag-container');

        localStorage.setItem('tagList', divContainer.innerHTML);

        localStorage.setItem('tagStore', JSON.stringify(tagStore));

    
    

}

export function getLocal () {
    
    let divContainer = document.querySelector('div.tag-container');
    
    divContainer.innerHTML = localStorage.getItem('tagList');

    let arr = JSON.parse(localStorage.getItem('tagStore'));

    tagStore.push(...arr);

    console.log('tagStore', tagStore)

    

}