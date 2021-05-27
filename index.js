var temp1=Math.floor(Math.random()*6);
var temp2=Math.random();

temp1=temp1+1;
temp2=Math.floor(temp2*6)+1;

var temp_img1 = "images/" + "dice" + temp1 +".png";
var temp_img2 = "images/" + "dice" + temp2 +".png";

document.querySelectorAll("img")[0].setAttribute("src", temp_img1);
document.querySelectorAll("img")[1].setAttribute("src", temp_img2);

if (temp1>temp2)
{
    document.querySelector("h1").innerHTML= "Player 1 wins!!";
}
else if (temp2>temp1)
{
    document.querySelector("h1").innerHTML= "Player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="OOPS!! Draw";
}