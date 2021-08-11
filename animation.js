const nightmode=document.querySelector(".night-mode-toggle");
const body=document.body;
const main_container=document.querySelector(".main-container");
const progress_bar=document.querySelector('.progress-bar');
const progress=document.querySelector('.progress');
const date=document.querySelector('.date');
const todos=document.getElementsByClassName('todo');
const progress_status=document.getElementsByClassName('progress-bar-status')[0];
const todo_input=document.querySelector('.todo-input');
const toggle_button=document.querySelector('.night-mode-toggle');
var icon=document.getElementsByTagName('i')[0];
var night_mode='day';
localStorage.setItem("night-mode",night_mode);



//event listener part
nightmode.addEventListener('click',nightmode_func);




//functions
function nightmode_func()
{
    body.classList.toggle("night-background");
    main_container.classList.toggle('night-foreground');
    progress_bar.classList.toggle('night-background');
    progress.classList.toggle('night-progress');
    date.classList.toggle('night-font');
    
    for(var element of todos)
    {
        element.classList.toggle('night-todo')
    }
   
    progress_status.classList.toggle('night-font');
    todo_input.classList.toggle("night-input");
    togglechange();
    toggle_button.classList.toggle('night-toggle');
    
}


function togglechange()
{
   
    if(icon.classList[1]=='fa-moon')
    {

        toggle_button.innerHTML=`<i class="far fa-sun"></i>`;
        icon=document.getElementsByTagName("i")[0];
        localStorage.setItem("night-mode","night");

    }
    else if(icon.classList[1]=='fa-sun')
    {
        toggle_button.innerHTML=`<i class="far fa-moon"></i>`;
        icon=document.getElementsByTagName("i")[0];
        localStorage.setItem("night-mode","day");

    }
   
    
}
