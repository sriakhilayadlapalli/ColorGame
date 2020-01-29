var colors=generateRandomColor(6);
var pickedColor=randomColor();
var squares=document.querySelectorAll(".square");
var messageContent=document.getElementById("message");
var newColors=document.querySelector("#newColors");
var h1=document.querySelectorAll("h1");
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var choosen=this.style.background;
		if(choosen==pickedColor){
			messageContent.textContent="Correct!";
			changeColors(pickedColor);
			h1.style.background="choosen";
		}
		else{
			this.style.background="#232323";
			messageContent.textContent="Try Again!";
		}

	})
}
var picked=document.getElementById("picked");
picked.textContent=pickedColor;

function changeColors(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=color;
	}
}
newColors.addEventListener("click",function(){
	generateRandomColor(6);
})
function randomColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColors());
	}
	return arr;
}
function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+","+" "+g+","+" "+b+")";

}