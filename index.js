
let count=0

function increment(){

	count=count+1

	let b=document.getElementById("count_el").innerText=count;

	console.log(b);
}

increment()


let nameValue=document.getElementById("fname").value;
let passValue=document.getElementById("pass").value;

function submit(){
	if(passValue=="123456"){
		console.log(nameValue,passValue)
	}else{
		console.log("error")
	 }
}
