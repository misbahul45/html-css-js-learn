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
        let isClick=false
        function remove2(){
            if(isClick==false){
            const checklistIcon = task.querySelector('.click i');
            checklistIcon.classList.remove('fa-square-o');
            checklistIcon.classList.add('fa-check-square');
            task.querySelector('.task-input').classList.add('linetrough')
            isClick=true
            }else{
            const checklistIcon = task.querySelector('.click i');
            checklistIcon.classList.remove('fa-check-square')
            checklistIcon.classList.add('fa-square-o')
            task.querySelector('.task-input').classList.remove('linetrough')
            isClick=false
            }
        }
    }

}
    buttonAction.addEventListener('click',function(){
        outputTodoList()
    })
