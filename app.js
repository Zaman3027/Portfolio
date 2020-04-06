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
    }

    window.onscroll = function(e){
        if(window.pageYOffset<window.innerHeight*1){
           onClickDot(0)
            
        }else if(window.pageYOffset<window.innerHeight*2){
            onClickDot(1)
    
        }else if(window.pageYOffset<window.innerHeight*3){
            onClickDot(2)
        }else{
           onClickDot(3)
        }
    }
}





