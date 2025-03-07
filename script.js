let input = document.getElementById('task');
let btn = document.getElementById('btn');
let submit = document.getElementById('delete-all');


let array = [];
if(localStorage.task != null){
    array = JSON.parse(localStorage.task);
}else{
    array = [];
}

btn.onclick = function(){
    let item = {
        Task: input.value,
    }
    if(input.value != ''){
        array.push(item);
    }else{
        return false;
    }
        
    
    // save localStorage
    localStorage.setItem('task', JSON.stringify(array));
    showdata();
    clearinput();
    showbtn();
   
}


//read data
 
 function showdata(){
    let day = '';
    for(let i = 0; i < array.length ;i++){
        day += `
        
        <div class="hhh" style="
        display: flex;
        flex-direction: column;
        " >
        <div class="result">
        <p class="answer">${array[i].Task}</p>
                <div class="prop">
                    
                    <button class="icon" onclick="deletedata(${i})"><i class="ri-delete-bin-line"></i></button>
                </div>
            </div>
        </div></div>
        
        `
    }
    document.querySelector('.hhh').innerHTML = day;
    showbtn();
 }
showdata();

function clearinput(){
    input.value = '';
}

// Delete Task 

function deletedata(i){
    array.splice(i,1);
    localStorage.task = JSON.stringify(array);
    showdata();
    
}

// Delete All

function showbtn(){
    if(array.length > 0){
        submit.style.display = 'flex';
    }else{
        submit.style.display = 'none';
    }
}

submit.onclick = function(){
    array.splice(0,array.length);
    localStorage.task = JSON.stringify(array);
    showdata();
}