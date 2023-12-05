
        var btn  = document.getElementById("actAnima");//get the elements from html
        btn.addEventListener("click",function(){//add an event listener
            alert('Thanks for question!');//take place of onclick
            var anima = document.getElementById("anima");//get another element which let the pic move
            anima.classList.remove("animation");//delet the former one and add the second time for pic action
            anima.offsetHeight = anima.offsetHeight; // force reflow
            anima.classList.add("animation");//add the animation 

            var communication = document.getElementById("communication");
            communication.value="";//Dingxie helped with this
        });
 
    