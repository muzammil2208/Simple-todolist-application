//declaration
const d = new Date();
const date_heading=document.querySelector('.date');
const todo=document.getElementsByClassName('todo-content');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date_string=d.getDate()+" "+months[d.getMonth()]+","+d.getFullYear();
const todo_list_container=document.querySelector(".todo-list-container");
const delete_buttons=document.getElementsByClassName("delete-button");
const progress_bar1=document.getElementsByClassName("progress")[0];
const progress_bar_status=document.getElementsByClassName("progress-bar-status")[0];
const illustration_container=document.getElementsByClassName('illustration-container')[0];
date_heading.innerHTML=date_string;
var todolist=JSON.parse(localStorage.todolist);

//event listener

window.addEventListener('load',progressFunc);
window.addEventListener('load',showTask);




















//functions

function addTask(value)
{
    todolist.push({id:todolist.length,value:value,status:"unchecked"});
    localStorage.todolist=JSON.stringify(todolist);
    console.log(todolist);
    showTask();
}

function showTask()
{
    
    
        for(let i=todo.length;i<todolist.length;i++)
        {

            let todoItem=todolist[i];
            let mode=localStorage.getItem("night-mode");
            let status=todolist[i].status;
            let new_item=document.createElement("div");
            new_item.classList.add("todo");
            if(mode=="night"){new_item.classList.add("night-todo")}
            if(status=="unchecked")
            {
                new_item.innerHTML=`<p class="todo-content" onclick="checking(this)">${todoItem.value}</p>
                <button class="delete-button" id="${todoItem.id}" onclick="deleteTask(this)"><i class="far fa-trash-alt"></i></button>`;
            }
            else
            {
                new_item.innerHTML=`<p class="todo-content checked" onclick="checking(this)">${todoItem.value}</p>
                <button class="delete-button" id="${todoItem.id}" onclick="deleteTask(this)"><i class="far fa-trash-alt"></i></button>`
            }
            todo_list_container.appendChild(new_item);
            document.getElementsByClassName("todo-input")[0].value="";
        }
        

        //update the progress bar
        progressFunc();
       

    
}

    
function deleteTask(element)
{
    //DELTEING FROM THE LOCALSTORAGE
    for(let todoItem of todolist)
    {
        if(todoItem.id==element.getAttribute("id"))
        {
            todolist.splice(todoItem.id,1);
            
        }
    }
    //for rearranging the id in order after deletion
    for(let i=0;i<todolist.length;i++)
    {
        todolist[i].id=i;
    }
    
    localStorage.todolist=JSON.stringify(todolist);

    //actually deleting the element
    element.parentElement.remove();

    //updating the progress func
    progressFunc();

}
  

function checking(element)
{

    //changing the status of element in the local storage and implementing it at the same time
    for(let todoItem of todolist)
    {
        if(todoItem.value==element.innerText)
        {
            if(todoItem.status=="checked")
            {
                todoItem.status="unchecked";
                element.classList.remove("checked");
                
                localStorage.todolist=JSON.stringify(todolist);
            }
            else
            {
                todoItem.status="checked";
                element.classList.add("checked");
                console.log(todolist);
                localStorage.todolist=JSON.stringify(todolist);
            }
        }
    }
    //updating the progress bar
    progressFunc();
}

function progressFunc()
{
    
    let count=0;
    
    for(let todoItem of todolist)
    {
        if(todoItem.status=="checked")
        {
            count++;
        }
    }
     let width=count/todolist.length*100;
     console.log(count);
    
     console.log(width);
    progress_bar1.style.width=width+"%";
    progress_bar_status.innerText=width.toPrecision(3)+"%";

}
