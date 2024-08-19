let text = [
    {content : 'Suraj Kumar'},
    {content : 'a Frontend Developer'},
    {content : 'a Backend Developer'}
]



let i = 0;
let j = 0;
let element = document.querySelector("#text")

function animation(){
    if(i<text.length){
        if(j< text[i].content.length){
            if(j===0){
                element.innerHTML = ""
            }
            element.innerHTML += text[i].content.charAt(j)
            j++;
        }
        else{
            i++
            j=0
        }
        setTimeout(animation, 200)
    }
    else{
        i = 0;
        setTimeout(animation, 200)
    }
    
}

animation()