// Bai 1
function js_style()
{
      document.getElementById("text").innerHTML = " Hello";
      document.getElementById("text").style.color= "red"; 
}
//Bai 2
function getFormvalue()
{
    var f= document.getElementsByName("fname")[0].value;
    var l= document.getElementsByName("lname")[0].value;
    var s=f+l;
    alert(s);
}
//bai 3
function Maunen()
{
    document.getElementById("maunen").style.backgroundColor="yellow"
}
//bai 4
function getAttributes()
{
    var u = document.getElementById("somelink").href;  
    var v = document.getElementById("somelink").hreflang;     
    var w = document.getElementById("somelink").rel;   
    var x = document.getElementById("somelink").target;   
    var y = document.getElementById("somelink").type;     
    var s=document.getElementById("link").value;
    s= "href: "+u+" hreflang: "+v+" rel: "+w+" target: "+x+" type: "+y;
    alert(s);
}
//bai 5

function insert_Row()
{
    var table =document.getElementById("sampleTable");
    var row =table.insertRow(2);
    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
}
//Bai 6
function changeContent()
{
    var table =document.getElementById("myTable");
    var row =table.insertRow(2);
    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Row in table";
    cell2.innerHTML = "Row in table";
}
//bai 7
function createTable()
{
     var myTableDiv = document.getElementById("TableDiv");
     
    var table = document.createElement('TABLE');
    table.border='1';
   
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
     
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
      
       for (var j=0; j<5; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
}
