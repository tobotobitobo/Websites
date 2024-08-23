document.getElementById("alltogether") = alltogether;


function click1(e)
{
    alltogether.style.position = "fixed";
    e.style.backgroundColor = "blue";
    e.style.height = "14vh";
    e.style.width = "max(13vw, 80px)";
    fuck = document.querySelectorAll(".game");
    fuck.forEach(element => 
    {
        if(element != e)
        {
            element.style.backgroundColor = "orange";
            element.style.height = "11vh";
            element.style.width = "max(10vw, 70px)";
        }
    });
    alltogether.style.animation = "moving2";
    alltogether.style.animationDuration = "1s";
    alltogether.style.animationFillMode = "forwards";
    if (document.getElementById("game1") == e)
    {
        daco = document.querySelectorAll(".inside");
        daco.forEach(element =>
        {
            if(element != document.getElementById("metal"))
            {
                element.style.display = "none";
            }
        }
        )
        document.getElementById("metal").style.display = "block";
    }
    else if (document.getElementById("game2") == e)
    {
        daco = document.querySelectorAll(".inside");
        daco.forEach(element =>
        {
            if(element != document.getElementById("niemetal"))
            {
                element.style.display = "none";
            }
        }
        )
        document.getElementById("niemetal").style.display = "block";
    }
    else if (document.getElementById("game3") == e)
    {
        
    }
    else if (document.getElementById("game4") == e)
    {
        
    }
}

function back(back)
{
    alltogether.style.animation = "back";
    alltogether.style.animationDuration = "1s";
    alltogether.style.animationFillMode = "forwards";

    fuck = document.querySelectorAll(".game");
    fuck.forEach(element => 
    {
        element.style.backgroundColor = "yelow";
        element.style.height = "20vh";
        element.style.width = "max(20vw, 130px)";
    });

    inside = document.querySelectorAll(".inside");
    inside.forEach(element =>
    {
        element.style.display = "none";
    }
    );

}