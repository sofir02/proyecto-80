var names_of_people = [];
function submit(){
    var name = document.getElementById("name1").value;
    names_of_people.push(name);
    var length_names = names_of_people.length;
    document.getElementById("display_name").innerHTML = names_of_people.toString();
}

function sorting(){
    names_of_people.sort();
    var i = names_of_people.join("<br>");
    document.getElementById("sorted").innerHTML = i.toString();
}

function show(){
    var i = names_of_people.join("<br>");
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display = "block";

}
 
function searching(){
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j = 0; j< names_of_people.length; j ++){
        if (s==names_of_people[j]){
            found = found + 1;
        }
    }

    document.getElementById("p2").innerHTML = "name found " + found + " times";


}
