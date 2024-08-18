document.getElementById("alltogether") = alltogether;
const daco = 1;

function click1(e)
{
    fuck = document.querySelectorAll(".game");
    fuck.forEach(element => 
    {
        if(element != e)
        {
            element.style.backgroundColor = "purple";
            element.style.height = "11vh";
            element.style.width = "max(7vw, 70px)";
        }
    });
    e.style.backgroundColor = "blue";
    e.style.height = "14vh";
    e.style.width = "max(8vw, 80px)";
    alltogether.style.animation = "moving2";
    alltogether.style.animationDuration = "1s";
    alltogether.style.animationFillMode = "forwards";

}

function back(back)
{
    alltogether.style.animation = "back";
    alltogether.style.animationDuration = "1s";
    alltogether.style.animationFillMode = "forwards";

    fuck = document.querySelectorAll(".game");
    fuck.forEach(element => 
    {
        element.style.backgroundColor = "blue";
        element.style.height = "20vh";
        element.style.width = "max(10vw, 100px)";
    });

}