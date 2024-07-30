let addBtn=document.querySelector('#add-btn');
let table=document.querySelector('table');

let fnameInput=document.querySelector('#fname');
let emailInput=document.querySelector('#email');
let dobInput=document.querySelector('#dob');
let contactInput=document.querySelector('#contact');

// console.log("clickeddddddddd");

addBtn.addEventListener('click',()=>{
    // console.log("clickeddddddddd");
    let fname=fnameInput.value;
    let email=emailInput.value;
    let dob=dobInput.value;
    let contact=contactInput.value;


    if(fname.trim() =="" || /\d/.test(fname)){
        alert("Full Name is required. Enter Correctly");
    }
    else if(email.trim()=="" || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)==false ){
        alert("Email is required. Enter Correctly")
    }
    else if(contact.trim() =="" || contact.length!=10){
        alert("Contact is required. Enter Correctly");
    }
    else if(validateDate(dob) ==false){
        alert("DOB is required.");
    }
    else{
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = dob;
    row.insertCell(3).innerHTML = contact;
    row.insertCell(4).innerHTML = '<button class="edit-btn" onclick="editdata(this)"><img id="img-icon"src="/Dynamic-Table/Assets/edit.png"></button><button class="save-btn" onclick="savedata(this)"><img id="img-icon"src="/Dynamic-Table/Assets/save.png"></button><button class="dlt-btn" onclick="deletedata(this)"><img id="img-icon"src="/Dynamic-Table/Assets/delete.png"></button>';
    clearInputs();
    }
})

function validateDate(dateString) {
    const inputDate = new Date(dateString);
    const cutoffDate = new Date('2003-01-01');
    return inputDate <= cutoffDate;
}

function editdata(e) {
    // console.log("edit btn clicked ");
    let row = e.parentNode.parentNode;
    let name = row.children[0].innerHTML;
    let email = row.children[1].innerHTML;
    let dob = row.children[2].innerHTML;
    let contact = row.children[3].innerHTML;

    // console.log(name);

    let inpName = document.createElement('input');
    inpName.value = name;

    let inpEmail = document.createElement('input');
    inpEmail.value = email;

    let inpDOB = document.createElement('input');
    inpDOB.value = dob;

    let inpContact = document.createElement('input');
    inpContact.value = contact;

    row.children[0].innerHTML = '';
    row.children[0].appendChild(inpName);

    row.children[1].innerHTML = '';
    row.children[1].appendChild(inpEmail);

    row.children[2].innerHTML = '';
    row.children[2].appendChild(inpDOB);

    row.children[3].innerHTML = '';
    row.children[3].appendChild(inpContact);
}

function savedata(e){
    let row=e.parentNode.parentNode;

    //  console.log("naam batao -",row.children[0].innerHTML);
    //  console.log("naam batao -",row.children[0]);

    let name=row.children[0].querySelector('input').value;
    let email=row.children[1].querySelector('input').value;
    let dob=row.children[2].querySelector('input').value;
    let contact=row.children[3].querySelector('input').value;

    row.children[0].innerHTML=name;
    row.children[1].innerHTML=email;
    row.children[2].innerHTML=dob;
    row.children[3].innerHTML=contact;
}


function deletedata(e){
    // console.log("dlt btn clicked ")
    let row = e.parentNode.parentNode;
    row.parentNode.removeChild(row);
};

function clearInputs(){
    document.getElementById("fname").value="";
    document.getElementById("email").value="";
    document.getElementById("dob").value="";
    document.getElementById("contact").value="";
}