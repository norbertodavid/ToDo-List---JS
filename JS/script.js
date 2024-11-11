/* Seleção de elementos */
const toDoForm = document.querySelector("#toDo-form");
const toDoInput = document.querySelector("#toDo-input");
const toDoList = document.querySelector("#toDo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const whatsBtn = document.querySelector("#whats-btn")
const linkedinBtn = document.querySelector("#linkedIn-btn")
const githubBtn = document.querySelector("#github-btn")

//variável usada para salvar o título da tarefa antiga
let oulInputValue;

/* Funções */

//Função que adiciona uma tarefa
const saveToDo = (text) => {
    //Estou criando a parte do ToDo do HTML a partir dessa função
    const toDo = document.createElement("div");
    toDo.classList.add("toDo");

    //inserindo o texto que é recebido no inputValue dentro do h3 para aparecer no front
    const toDoTitle = document.createElement("h3");
    toDoTitle.innerText = text;
    toDo.appendChild(toDoTitle);

    //criei os botões de finalizar, editar e remover:
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-toDo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-toDo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    toDo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-toDo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDo.appendChild(deleteBtn);

    //Adicionei o toDo ao toDo-List igual no HTML
    toDoList.appendChild(toDo);

    //após o usuário digitar e enviar, o texo é transformado em vazio.
    toDoInput.value = "";
    
    //foca no input
    toDoInput.focus();
};

//função que muda a tela para a edição das tarefas
const toggleForms = () => {
    //quando o usuário clica em editar, só é mostrado a parte de edição. A função "hide" esconde.
    editForm.classList.toggle("hide");
    toDoForm.classList.toggle("hide");
    toDoList.classList.toggle("hide");
};

//função que edita as tarefas
const updateToDo = (text) => {
    //mapeei a classe ".toDo"
    const toDos = document.querySelectorAll(".toDo");

    toDos.forEach((toDo) => {
        let toDoTitle = toDo.querySelector("h3");

        console.log(toDoTitle, text);

        if(toDoTitle.innerText === oulInputValue) {
            toDoTitle.innerText = text;
        }
    });
};

/* Eventos */

//evento criado do tipo: submit, com arrow function
toDoForm.addEventListener("submit", (e) => {
    /*
    com o e.preventDefault = quando o botão for pressionado, o formulário não é enviado para o back-end..
    sendo possivel trabalhar com esse evento só no front.
    */
    e.preventDefault();

    const inputValue = toDoInput.value;
    //se o inputValue não estiver vazio
    if(inputValue) {
        //salva e adiciona uma nova tarefa
        saveToDo(inputValue);
    }

});

//evento de disparar os botões ao clicar
document.addEventListener("click", (e) => {

    //aqui ele reconhece em qual botão está sendo disparado
    const targetQual = e.target;
    //qual a div pai mais próxima
    const parentQual = targetQual.closest("div");
    let toDoTitle;

    if(parentQual && parentQual.querySelector("h3")) {
        toDoTitle = parentQual.querySelector("h3").innerText;
    }

    //finaliza a tarefa
    if(targetQual.classList.contains("finish-toDo")) {
        //ao invés de usar o add, é o usado o toggle, que tem a função de voltar atrás, caso vc tenha clicado na tarefa errada.
        parentQual.classList.toggle("done");
    }

    //edita a tarefa
    if(targetQual.classList.contains("edit-toDo")) {
        toggleForms();

        editInput.value = toDoTitle;
        oulInputValue = toDoTitle;
    }


    //remove a tarefa
    if(targetQual.classList.contains("remove-toDo")) {
        parentQual.remove();
    }
});

//evento do botão cancelar edição
cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //quando pressionado ele mostra as tarefas novamente que estavam em "hide".
    toggleForms();
});

//evento de disparar a edição do nome da nova tarefa
editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue) {
        updateToDo(editInputValue);
    }

    toggleForms();
});

//evento para ativar o botão do whatsApp
whatsBtn.addEventListener("click", (e) => {
    whatsBtn.innerHTML = '<a href="https://github.com/norbertodavid" target="_blank"></a>';
})
//evento para ativar o botão do LinkedIn
linkedinBtn.addEventListener("click", (e) => {
    linkedinBtn.innerHTML = '<a href=https://www.linkedin.com/in/norberto-david-sp/" target="_blank"></a>';
})
//evento para ativar o botão do GitHub
githubBtn.addEventListener("click", (e) => {
    githubBtn.innerHTML = '<a href="https://github.com/norbertodavid" target="_blank"></a>';
})