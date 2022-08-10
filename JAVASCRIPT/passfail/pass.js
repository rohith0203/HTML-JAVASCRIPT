
function metoo()
{
    var x=document.getElementById("in").value;
var z=parseInt(x);
var y=document.getElementById("ans");
var grade;

if(z>35 && z<100)
{
    grade="pass";
}else if(z<35)
{
     grade="fail";
}
else{
    grade="you entered the wrong marks";
}
   y.innerHTML = grade;
}