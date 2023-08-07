const inputTodoList=document.getElementById('input-task');
const buttonAction=document.getElementById('addTask')

function outputTodoList(){
    let actionValue=inputTodoList.value

    if(actionValue==''){
        alert('sorry there is trouble acttion')
    }else{
        const task=document.createElement('div')
        task.innerHTML=`<div class="task">
        <div class="click"><i class="fa fa-square-o" id="checklist"></i></div>
        <p class="task-input">${actionValue}</p>
        <button class="end-task"><i class="fa fa-times"></i></button>
    </div>`
        const taskContent=document.querySelector('.task-content')
        taskContent.appendChild(task)
        inputTodoList.value=''

        task.querySelector('.end-task').addEventListener('click',remove)

        function remove(){
            task.remove()
        }
        task.querySelector('.click').addEventListener('click',remove2)

        function remove2(){
            task.querySelector('.click').style.background='darkblue'
            task.querySelector('.task-input').classList.add('linetrough')
        }
    }

}
    buttonAction.addEventListener('click',function(){
        outputTodoList()
    })
