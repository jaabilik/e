name_of_student_array = [];

function submit() {
    var name_1 = document.getElementById("name_of_student1").value;
    var name_2 = document.getElementById("name_of_student2").value;
    var name_3 = document.getElementById("name_of_student3").value;
    var name_4 = document.getElementById("name_of_student4").value;
    var name_5 = document.getElementById("name_of_student5").value;
    var name_6 = document.getElementById("name_of_student6").value;
    var name_7 = document.getElementById("name_of_student7").value;
    var name_8 = document.getElementById("name_of_student8").value;
    var name_9 = document.getElementById("name_of_student9").value;
    var name_10 = document.getElementById("name_of_student10").value;
    var name_11 = document.getElementById("name_of_student11").value;
    var name_12 = document.getElementById("name_of_student12").value;
    var name_13 = document.getElementById("name_of_student13").value;
    var name_14 = document.getElementById("name_of_student14").value;
    var name_15 = document.getElementById("name_of_student15").value;
    var name_16 = document.getElementById("name_of_student16").value;
    var name_17 = document.getElementById("name_of_student17").value;
    var name_18 = document.getElementById("name_of_student18").value;
    var name_19 = document.getElementById("name_of_student19").value;
    var name_20 = document.getElementById("name_of_student20").value;
    var name_21 = document.getElementById("name_of_student21").value;
    var name_22 = document.getElementById("name_of_student22").value;
    var name_23 = document.getElementById("name_of_student23").value;
    var name_24 = document.getElementById("name_of_student24").value;

    name_of_student_array.push(name_1);
    name_of_student_array.push(name_2);
    name_of_student_array.push(name_3);
    name_of_student_array.push(name_4);
    name_of_student_array.push(name_5);
    name_of_student_array.push(name_6);
    name_of_student_array.push(name_7);
    name_of_student_array.push(name_8);
    name_of_student_array.push(name_9);
    name_of_student_array.push(name_10);
    name_of_student_array.push(name_11);
    name_of_student_array.push(name_12);
    name_of_student_array.push(name_13);
    name_of_student_array.push(name_14);
    name_of_student_array.push(name_15);
    name_of_student_array.push(name_16);
    name_of_student_array.push(name_17);
    name_of_student_array.push(name_18);
    name_of_student_array.push(name_19);
    name_of_student_array.push(name_20);
    name_of_student_array.push(name_21);
    name_of_student_array.push(name_22);
    name_of_student_array.push(name_23);
    name_of_student_array.push(name_24);

    console.log(name_of_student_array);

    document.getElementById("display_name").innerHTML = name_of_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML = name_of_student_array;
}