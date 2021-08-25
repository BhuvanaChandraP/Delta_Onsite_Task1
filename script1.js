// localStorage.clear();
let total = 0;
let total1 = 0;
let total2 = 0;
let c = 0;
document.getElementById("score").innerHTML = total;
document.getElementById("score2").innerHTML = total1;
localStorage.removeItem("ss");
localStorage.removeItem("s");

if(localStorage.getItem("option") == "bat")
{
        document.getElementById("state").innerHTML = "You are Batting";
       
}
else{
        document.getElementById("state").innerHTML = "You are Bowling";
        
}
function inc(i)
{
    console.log(total)
    console.log(total1)
    if(localStorage.getItem("option") == "bat")
    {
        document.getElementById("state").innerHTML = "You are Batting";
        total += i;
    }
    else{
        document.getElementById("state").innerHTML = "You are Bowling";
        total1 += i;
    }
    if((localStorage.getItem('ing') == 1) && localStorage.getItem('ss') == "bated")
    {
        if(total1 > total)
        {
            document.getElementById("state").innerHTML = " ";
            document.getElementById("lost").innerHTML= " You lost";
            disable();
        }
    }
    // if((localStorage.getItem('ing') == 1) && localStorage.getItem('s') == "bated")
    // {
    //     if(total1 < total)
    //     {
    //         document.getElementById("lost").innerHTML= " You Won";
    //         disable();
    //     }
    // }
   
    if((localStorage.getItem('ing') == 1) && localStorage.getItem('s') == "bowled")
    {
        if(total1 < total)
        {
            document.getElementById("state").innerHTML = " ";
            document.getElementById("lost").innerHTML= " You won";
            disable();
        }
    }
}

function res(){
    c++;
    localStorage.setItem("ing" , c);
    // if(localStorage.getItem("ing") == 1)
    // {
    //     if(total > total1)
    //     {
       
    //         document.getElementById("lost").innerHTML= "You Won !!!!";
    //         disable();

    //     }

        
    // }
    

    if(localStorage.getItem("ing") == 2)
    {

        disable();
    }
    if(localStorage.getItem("option") == "bat")
    {
        //alert("You are going to bowl now");
        localStorage.setItem('ss' , "bated");
        localStorage.setItem("option" , "bowl");
        document.getElementById("state").innerHTML = "You are Bowling";
        document.getElementById("c").src = "com.jpg" ;
        document.getElementById("u").src = "u.png" ;
       
    }
    else if(localStorage.getItem("option") == "bowl")
    {
        //alert("You are going to bat now");
        localStorage.setItem('s' , "bowled");
        localStorage.setItem("option" , "bat");
        document.getElementById("state").innerHTML = "You are Batting";
        document.getElementById("c").src = "com.jpg" ;
        document.getElementById("u").src = "u.png" ;
        
    }
    else{

    }
    if(localStorage.getItem("ing" == 1))
    {
        document.getElementById("c").src = "com.jpg" ;
        document.getElementById("u").src = "u.png" ;
        if(total < total1)
        {
            document.getElementById("state").innerHTML = " ";
            document.getElementById("lost").innerHTML= " You lost";
            disable();
        }
        else if (total == total1)
        {
            document.getElementById("state").innerHTML = " ";
            document.getElementById("lost").innerHTML = "Match Draw";
            disable();
        }
        else{
            document.getElementById("state").innerHTML = " ";
            document.getElementById("lost").innerHTML= "You Won !!!!";
            disable();
        }
    }
    
    
    //localStorage.getItem("option")
}
document.getElementById("score").innerHTML = total;
let i ;
function restart(){
    // window.location = "index.html"
    //or 
    total=0;
    total1=0;
    document.getElementById("score").innerHTML = total;
    document.getElementById("score2").innerHTML = total1;
    localStorage.removeItem("ss");
    localStorage.removeItem("s");
    document.getElementById("c").src = "com.jpg" ;
    document.getElementById("u").src = "u.png" ;
    document.getElementById("zero").disabled = false;
    document.getElementById("one").disabled =false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
   
    document.getElementById("u").src = "u.png" ;
    document.getElementById("c").src = "com.jpg" ;
    document.getElementById("lost").innerHTML = "";
   
   
    // window.location.reload();
}
function disable(){
    document.getElementById("state").style.display= "none";
    console.log(total)
    console.log(total1)
    if(total < total1)
    {
        document.getElementById("lost").innerHTML= " You lost";
    }
    else if (total == total1)
    {
        document.getElementById("lost").innerHTML = "Match Draw";
    }
    else{
        document.getElementById("lost").innerHTML= "You Won !!!!";
    }
    
    document.getElementById("score").innerHTML = total;
    // total=0;
    document.getElementById("zero").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
   
}
function computer (i){
    if(i == 1)
    {
        document.getElementById("c").src = "1.jpg" ;
    }
    else if(i == 2 )
    {
        document.getElementById("c").src = "2.jpg" ;
    }
    else if(i == 3)
    {
        document.getElementById("c").src = "3.jpg" ;
    }
    else if(i == 4)
    {
        document.getElementById("c").src = "4.jpg" ;
    }
    else if(i == 5 )
    {
        document.getElementById("c").src = "5.jpg" ;
    }
    else 
    {
        document.getElementById("c").src = "6.jpg" ;
    }
}

function choose0 (){
    yourchoice = 0;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	
    document.getElementById("u").src = "0.jpg" ;
	
    computer(compchoice);
	
    total += 0;
    document.getElementById("comment").innerHTML = "A dot ball.... ";
		
		
	
}
function choose1(){
    yourchoice = 1;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	
    document.getElementById("u").src = "1.jpg" ;
    computer(compchoice);
	if(compchoice === 1){
		
        // document.getElementById("lost").style.display= "block";
        res()
		
	}
	else{
        if(localStorage.getItem("option") == "bat")
        {
            inc(1)
        }
        else{
            inc(compchoice)  
        }
        //inc(1);
        // total += 1;
        document.getElementById("comment").innerHTML = "A single ";
		document.getElementById("score").innerHTML = total;
        document.getElementById("score2").innerHTML = total1;
        console.log(total);
		
		
	}
}
function choose2(){
    yourchoice = 2;
	var compchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("u").src = "2.jpg" ;
    computer(compchoice);
	if(compchoice === 2){
		
        // document.getElementById("lost").style.display= "block";
        res();
		
	}
	else{
        if(localStorage.getItem("option") == "bat")
        {
            inc(2)
        }
        else{
            inc(compchoice)  
        }
        //inc(2);
        // total += 2;
        document.getElementById("comment").innerHTML = "Batsman looking for 2 runs..... ";
		document.getElementById("score").innerHTML = total;
        document.getElementById("score2").innerHTML = total1;
		
		
	}
}
function choose3(){
    yourchoice = 3;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	
    document.getElementById("u").src = "3.jpg" ;
    computer(compchoice);
	if(compchoice === 3){
		
        // document.getElementById("lost").style.display= "block";
        res()
		// disable();
	}
	else{
        if(localStorage.getItem("option") == "bat")
        {
            inc(3)
        }
        else{
            inc(compchoice)  
        }
        //inc(3);
        // total += 3;
        document.getElementById("comment").innerHTML = "Batsman got 3 it was fast run... ";
        document.getElementById("score").innerHTML = total;
        document.getElementById("score2").innerHTML = total1;
		
		
		
	}
}

function choose4(){
    yourchoice = 4;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	
    document.getElementById("u").src = "4.jpg" ;
    computer(compchoice);
	if(compchoice === 4){
		
        // document.getElementById("lost").style.display= "block";
        res()
		// disable();
	}
	else{
        if(localStorage.getItem("option") == "bat")
        {
            inc(4)
        }
        else{
            inc(compchoice)  
        }
        //inc(4);
        // total += 4;
        document.getElementById("comment").innerHTML = "Boundry !!";
        document.getElementById("score").innerHTML = total;
		document.getElementById("score2").innerHTML = total1;
		
		
	}
}
function choose5(){
    yourchoice = 5;
	var compchoice = Math.floor(Math.random() * 6) + 1;

    document.getElementById("u").src = "5.jpg" ;
    computer(compchoice);
	if(compchoice === 5){
		
	
		// document.getElementById("lost").style.display= "block";
        res()
        // disable();
	}
	else{
        if(localStorage.getItem("option") == "bat")
        {
            inc(5)
        }
        else{
            inc(compchoice)  
        }
        //inc(5);
        // total += 5;
        document.getElementById("comment").innerHTML = "A wide and a boundry... ";
		document.getElementById("score").innerHTML = total;
		document.getElementById("score2").innerHTML = total1;
		
	}
}
function choose6(){
    yourchoice = 6;
	var compchoice = Math.floor(Math.random() * 6) + 1;
	
    document.getElementById("u").src = "6.jpg" ;
    computer(compchoice);
	if(compchoice === 6){
		
	
		// document.getElementById("lost").style.display= "block";
        res()
        // disable();
	}
	else{
        if(localStorage.getItem("option") == "bat")
        {
            inc(6)
        }
        else{
            inc(compchoice)  
        }
        //inc(6);
        // total += 6;
        document.getElementById("comment").innerHTML = "Six!!!!!";
		document.getElementById("score").innerHTML = total;
        document.getElementById("score2").innerHTML = total1;
		
		
	}
}