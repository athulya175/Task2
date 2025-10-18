let input_value=document.getElementById("input_value")
let print_name=document.getElementById("print_name")
function nameFunction(){
   print_name.textContent=`Hello:${input_value.value}`
}
console.log(nameFunction())
