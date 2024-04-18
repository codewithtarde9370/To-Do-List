const inputBox=document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task");
                    
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7 ";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

/*const inputBox=document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task");
                    
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7 ";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}
listContainer.addEventListener("click", funtion(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    elseif(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem(   "data",listContainer.innerHTML);
}
 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

ChatGPT
There is a syntax error in the code. In the listContainer.addEventListener function, the keyword function is misspelled as funtion. Here's the corrected version:

javascript
Copy code
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
Additionally, the elseif should be corrected to else if for the SPAN condition.

These corrections should resolve the syntax error in your JavaScript code */