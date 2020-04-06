var dot_one ;
var dot_two ;
var dot_three ;
var dot_four;

console.log()

window.onload = function(){
    dot_one = document.getElementById('dot-one');
    dot_two = document.getElementById('dot-two');
    dot_three = document.getElementById('dot-three');
    dot_four= document.getElementById('dot-four');
    var listOfDots = [dot_one,dot_two,dot_three,dot_four]
    dot_one.onclick = function(e){
        onClickDot(0)
    }
    dot_two.onclick = function(e){
        onClickDot(1)
    }
    dot_three.onclick = function(e){
        onClickDot(2)
    }
    dot_four.onclick = function(e){
        onClickDot(3)
    }
    function onClickDot(element){
        listOfDots.forEach(v=>{
            v.classList.remove('side-dot-active');
        });
        listOfDots[element].classList.add('side-dot-active');
        console.log(window.pageYOffset)
        if(element===0){
            window.scrollTo({
                top:window.innerHeight*0,
                behavior:'smooth'
            })
        }else if(element===1){
            window.scrollTo({
                top:window.innerHeight,
                behavior:'smooth'
            })

        }else if(element===2){
            window.scrollTo({
                top:window.innerHeight*2,
                behavior:'smooth'
            })
        }else{
            window.scrollTo({
                top:window.innerHeight*3,
                behavior:'smooth'
            })

        }
    }
        
    function onScroll(element){
        listOfDots.forEach(v=>{
            v.classList.remove('side-dot-active');
        });
        listOfDots[element].classList.add('side-dot-active');
    }

    window.onscroll = function(e){
        if(window.pageYOffset<window.innerHeight*1-200){
            onScroll(0)
            
        }else if(window.pageYOffset<window.innerHeight*2-200){
            onScroll(1)
    
        }else if(window.pageYOffset<window.innerHeight*3-200){
            onScroll(2)
        }else{
            onScroll(3)
        }
    }
}





