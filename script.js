function getcountry(){
 var select = document.getElementById("list");
 var newOption = document.createElement("option");
 newOption.text=document.getElementById("textbox").value;
 select.add(newOption);
}