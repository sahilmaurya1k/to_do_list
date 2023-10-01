let toDo_list = document.querySelector('#add-list');
let input_box = document.querySelector('#input_val');

input_box.addEventListener(
    "keyup",
    function (event) {
        if (event.key == 'Enter') {
            addToDo(this.value);
            this.value = ''
        }
    }
)

const addToDo = (input_box) => {
    const createItme = document.createElement('li');
    createItme.innerHTML =    
        `
       ${input_box} 
       <ion-icon name="trash-outline" class="icon"></ion-icon>
       `
     createItme.querySelector('.icon').addEventListener(
        'click',
        function(){
            createItme.remove()
        }

     )
    toDo_list.appendChild(createItme);
    
}
