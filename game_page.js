player_1=localStorage.getItem("text1");
player_2=localStorage.getItem("text2");

score_1=0;
score_2=0;

document.getElementById("corner1").innerHTML=player_1 + " = ";
document.getElementById("corner2").innerHTML=player_2 + " = ";
document.getElementById("score_1").innerHTML=score_1 ;
document.getElementById("score_2").innerHTML=score_2 ;
document.getElementById("question").innerHTML= "Question = " + player_1 ; 
document.getElementById("answer").innerHTML= "Answer = " + player_2 ; 

function send()
{

typo= document.getElementById("typing word").value;
type=typo.toLowerCase();
console.log(typo);

}

charAt1= type.charAt(1);
console.log(charAt1);

length_divide_2=Math.floor(type.length/2);
charAt2=type.charAt(length_divide_2);
console.log(charAt2);

length_minus_1=type.length-2;
charAt3=type.charAt(length_minus_2);
console.log(charAt3);

remove_charAt1=type.replace(charAt1,"_");
remove_charAt2=charAt1.replace(charAt2,"_");
remove_charAt3=charAt2.replace(charAt3,"_");
console.log(remove_charAt3);