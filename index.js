function update(){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray= [];
        itemJsonArray.push([title, desc]);

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    let table = document.getElementById('tableBody');
    let str= "";
    itemJsonArray.forEach((element,index) => {
        str += `  
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onClick="deleted(${index})">Delete</button></td>
        </tr>
        `
    });

    table.innerHTML = str;
}

function getAndUpdate(){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if(localStorage.getItem('itemsJson')==null){
        
        itemJsonArray= [];
        itemJsonArray.push([title, desc]);
        // console.log("Updated.")

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([title,desc]);

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}

function deleted (itemIndex){
    // console.log("Deleted item", itemIndex);
    itemJsonArray = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    
    itemJsonArray.splice(itemIndex, 1);
    
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function clearStorage(){
    title = document.getElementById('title').value;
    if(confirm("Do you want to clear whole list?")){
        console.log("Clearing the storage")
        localStorage.clear();
        update();
    }
}

function check(){
    if(title.value!== ""){
        update();
    }
}

function enterKey(e){
    if(title.value!=="" && e.keyCode == 13 ){
        // console.log("Entered entry")
        update();
    }
}

add.addEventListener('click',check); //for checking empty string;
add.addEventListener('click',enterKey); //for checking empty string;

add=document.getElementById('add')
add.addEventListener('click',update);
add.addEventListener('click',getAndUpdate);
update();