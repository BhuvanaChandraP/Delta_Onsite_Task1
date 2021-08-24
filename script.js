let total = 0;
document.getElementById("score").innerHTML = total;
function restart(){
    window.location.reload();
}
function disable(){
    document.getElementById("zero").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
   
}

function choose0 (){
    yourchoice = 0;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	
    total += 0;
    document.getElementById("comment").innerHTML = "A dot ball.... ";
		
		
	
}
function choose1(){
    yourchoice = 1;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	if(compchoice === 1){
		
        document.getElementById("lost").style.display= "block";
		disable();
	}
	else{
        total += 1;
        document.getElementById("comment").innerHTML = "A single ";
		document.getElementById("score").innerHTML = total;
        console.log(total);
		
		
	}
}
function choose2(){
    yourchoice = 2;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	if(compchoice === 2){
		
        document.getElementById("lost").style.display= "block";
		disable();
	}
	else{
        total += 2;
        document.getElementById("comment").innerHTML = "Batsman looking for 2 runs..... ";
		document.getElementById("score").innerHTML = total;
		
		
	}
}
function choose3(){
    yourchoice = 3;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	if(compchoice === 3){
		
        document.getElementById("lost").style.display= "block";
		disable();
	}
	else{
        total += 3;
        document.getElementById("comment").innerHTML = "Batsman got 3 it was fast run... ";
        document.getElementById("score").innerHTML = total;
		
		
		
	}
}

function choose4(){
    yourchoice = 4;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	if(compchoice === 4){
		
        document.getElementById("lost").style.display= "block";
		disable();
	}
	else{
        total += 4;
        document.getElementById("comment").innerHTML = "Boundry !!";
        document.getElementById("score").innerHTML = total;
		
		
		
	}
}
function choose5(){
    yourchoice = 5;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	if(compchoice === 5){
		
	
		document.getElementById("lost").style.display= "block";
        disable();
	}
	else{
        total += 5;
        document.getElementById("comment").innerHTML = "A wide and a boundry... ";
		document.getElementById("score").innerHTML = total;
		
		
	}
}
function choose6(){
    yourchoice = 6;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoice").innerHTML = yourchoice;
	document.getElementById("computerchoice").innerHTML = compchoice;
	if(compchoice === 6){
		
	
		document.getElementById("lost").style.display= "block";
        disable();
	}
	else{
        total += 6;
        document.getElementById("comment").innerHTML = "Six";
		document.getElementById("score").innerHTML = total;
		
		
	}
}