// Write all the JS Code related to Home Page Here 
form =document.querySelector("form");
LsData=JSON.parse(localStorage.getItem("task list"))||[];
form.addEventListener("submit",function(event) {
    event.preventDefault();
    obj={
        name:form.name.value,
        type:form.type.value,
        date:form.date.value, 
        priority:form.priority.value,

    };
    if(obj.name==""||obj.type==""||obj.date==""||obj.date==""||obj.priority==""){
    alert("plese fill the details")
}else{
    LsData.push(obj)
localStorage.setItem("task".JSON.stringify(LsData))
}
})
   let tbody=document.querySelector("tbody");
   function displaytable(data){
    tbody.innerHTML=null;
    data.forEach(function(element,index){
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.innerText=element.name;
        let type=document.createElement("td");
        
        
        let date=document.createElement("td");
        let =document.createElement("td");
    }
   }


 