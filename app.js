function getNumber(num){
  
var first = document.getElementById("first");
 first.value += num;
}

function clearfirst(){
    var first = document.getElementById("first");
 first.value = ""
}

function getresult(){
    var first = document.getElementById("first");
    first.value = eval(first.value)
}