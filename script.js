//declaration
const d = new Date();
const date_heading=document.querySelector('.date');
const todolist=[{id:1,value:'First task'},{id:2,value:"last task"}];
const todo=document.getElementsByClassName('todo-content');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date_string=d.getDate()+" "+months[d.getMonth()]+","+d.getFullYear();
const todo_list_container=document.querySelector(".todo-list-container");
const delete_buttons=document.getElementsByClassName("delete-button");
const progress_bar1=document.getElementsByClassName("progress")[0];
const progress_bar_status=document.getElementsByClassName("progress-bar-status")[0];
const illustration_container=document.getElementsByClassName('illustration-container')[0];
date_heading.innerHTML=date_string;
addtask();


//event listener

window.addEventListener('load',progress_func);




















//functions

function addtask()
{
    for(var todos of todolist)
    {
        var mode=localStorage.getItem("night-mode");
        var newTask=document.createElement("div");
        newTask.setAttribute("class","todo");
        if(mode=='night')
        {
        newTask.classList.add("night-todo");
        
        }

         newTask.innerHTML=`<p class="todo-content" data-checked="unchecked" id="${todos.id}" onclick="checking(this)">${todos.value}</p>
                         <button class="delete-button" onclick="delete_func(this)"><i class="far fa-trash-alt"></i></button>`;
        todo_list_container.appendChild(newTask);
        document.getElementsByClassName("todo-input")[0].value="";
        progress_func();

    }
}
function newTask_func(value)
{
    if(todo.length<=0)
    {
        illustration_container.style.display="none";
    }
    var mode=localStorage.getItem("night-mode");
    var newTask=document.createElement("div");
    newTask.setAttribute("class","todo");
    if(mode=='night')
    {
        newTask.classList.add("night-todo");
        
    }

    newTask.innerHTML=`<p class="todo-content" data-checked="unchecked" onclick="checking(this)">${value}</p>
                         <button class="delete-button" onclick="delete_func(this)"><i class="far fa-trash-alt"></i></button>`;
   todo_list_container.appendChild(newTask);
   document.getElementsByClassName("todo-input")[0].value="";
   progress_func();
}

function delete_func(e)
{
   
   var parent=e.parentElement;
   parent.style.opacity="0";
   parent.remove();
   progress_func();
   isEmpty();
   console.log(todo.length)
}

function checking(element)
{
    if(element.getAttribute("data-checked")=="unchecked")
    {
        element.classList.add("checked");
        element.setAttribute("data-checked","checked");
    }
    else
    {
        element.classList.remove("checked");
        element.setAttribute("data-checked","unchecked");
    }
    progress_func();

    
}

function progress_func()
{

    var ch=0;
    var progress_widht=0;
    if(todo.length>0)
    {
        for(var todoitem of todo)
        {
            var checked_attribute=todoitem.getAttribute('data-checked');
            if(checked_attribute.toUpperCase()=="CHECKED")
            {
                ch++;
            }
           
            
        }
       progress_widht =ch/(todo.length)*100;

    }


    
        progress_bar1.style.width=progress_widht+"%";
    
   
    
    progress_bar_status.innerHTML=Math.round(progress_widht)+"%";

   
}


function isEmpty()
{
    if(todo.length<=0)
    {
        illustration_container.style.display="flex";
    }
    else
    {
        illustration_container.style.display="none";
    }
}