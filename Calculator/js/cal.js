function addNow(Add){
    document.getElementById('result').value += Add;
}
function deleteNow(){
    document.getElementById('result').value = '';
}
function delNow(){
    var del = document.getElementById('result').value;
    var str = del.toString().slice(0, -1);
    document.getElementById('result').value = str;
}
function averTotal(){
    var a = document.getElementById('result').value;
    var x = eval(a);
    document.getElementById('result').value = x;
}