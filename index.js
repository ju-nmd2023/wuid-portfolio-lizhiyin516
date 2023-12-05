
        var btn  = document.getElementById("actAnima");
        btn.addEventListener("click",function(){
            alert('Thanks for question!');
            var anima = document.getElementById("anima");
            anima.classList.remove("animation");
            anima.offsetHeight = anima.offsetHeight; // force reflow
            anima.classList.add("animation");
        });
 
    