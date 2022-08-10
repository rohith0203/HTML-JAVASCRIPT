
    // let x=document.getElementById("p");
    // document.getElementById("r").value=x;
    //  function ready()
    //  {
        // document.getElementById("btn").addEventListener("click",ready);

        function ready()
         {
         let xhttp=new XMLHttpRequest();
         xhttp.onload=function()
         {
             document.getElementById("h").innerHTML=this.responseText;
         }
         xhttp.open("GET","Ajax.txt");
         xhttp.send();
        }
        var colors = ["red","blue","car","green"];
        var carIndex = colors.indexOf("car");//get  "car" index
        //remove car from the colors array
        colors.splice(carIndex, 1); // colors = ["red","blue","green"]
