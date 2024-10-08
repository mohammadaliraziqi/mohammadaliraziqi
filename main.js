function formSubmit(event){

    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var birthdate = document.getElementById("birthDate").value;
    var emailAddress = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var father = document.getElementById("fatherName").value;
    var mother = document.getElementById("motherName").value;
    var cv = document.getElementById("cv").value;
    var photo = document.getElementById("photo").value;


    var edu = document.getElementById("education");
    var value = edu.value;
    var text = edu.options[edu.selectedIndex].text;


    document.getElementById("nameResult").innerHTML=fullname;
    document.getElementById("birthResult").innerHTML=birthdate;
    document.getElementById("emailResult").innerHTML=emailAddress;
    document.getElementById("genderResult").innerHTML=gender;
    document.getElementById("educationResult").innerHTML=text;
    document.getElementById("fatherResult").innerHTML=father;
    document.getElementById("motherResult").innerHTML=mother;
    document.getElementById("cvResult").innerHTML=cv;
    document.getElementById("photoResult").innerHTML=photo;


}

formSubmit();