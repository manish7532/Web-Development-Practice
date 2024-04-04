var randomNo1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice"+randomNo1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1)



var randomNo2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice"+randomNo2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)




if(randomNo1>randomNo2){
    document.querySelector("h1").innerText=`🚩Player 1 won.`
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").innerText=`Player 2 won 🚩`
}
else{
    document.querySelector("h1").innerText=`It's a Draw.`
}
