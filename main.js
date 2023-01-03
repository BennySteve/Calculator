let btn=document.querySelectorAll(".btn")
let display=[]
let upper=document.querySelector(".upper")
let lower=document.querySelector(".lower")
let value=""
let checkOperand=checkPoint=countOperation=0
let keyVal={
    Enter:"=",Backspace:"C",Delete:"AC"}
let key=document.querySelector("body")
let btns

//Keybroad compatibility
key.addEventListener("keydown",function(e){ 
    btns=e.key+""
    if(btns.charCodeAt()>=42&&btns.charCodeAt()<=57)
    {
        calculate(btns) 
    }
    if(btns in keyVal){
      btns=keyVal[btns]
      calculate(btns) 
    }
       
 } ) 

//READING
function calculate(val){
    if(val=="AC"){
        ac()
        lower.innerText=value
        
    }
    else if(val=="C"){
        c()
        lower.innerText=value
        
    }
    else if(val=="÷"||val=="×"||val=="+"||val=="-"){
        operand(val)
    }

    else if(val=="."){
        if(checkPoint==0){
            displaying(val)
            checkPoint++
        }
    }
    else if(val=="="){
        cal(value)
        lower.innerText=value
    }

    else{
        displaying(val)
        checkOperand=0
    }
}

//BUTTON FUNCTIONS
function ac(){
    display=[]
    value=""
    check=0
    upper.textContent=""
        
}

function c(){
    let len;
    len=value.length
    display.pop(-1)
    if(len==0)value=""
    else
    value=value.substring(0,len-1)
}

function displaying(val){
    display.push(val)
    //DISPLAY
    value=display.join("")
    lower.innerText=value
        
}

function cal(va){
    
    value=va
    upper.innerText=va+" ="
    value=value.replace("÷","/")
    value=value.replace("×","*")
    value=eval(value)
    value+=""
    display=[value]
    
}

function operand(v){
    val=v
    if(countOperation>0){
        len=value.length
        let valNew=value
        cal(valNew)    
    }
    if(checkOperand==0){
        displaying(val)
        checkOperand++
        countOperation++    
    
    checkPoint=0
    }
}

function wait (ms)  {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}


//EVENT
btn.forEach(element => {
    element.addEventListener("click", function(){
        calculate(element.innerText)
        console.log(element)
        element.classList.add("pressed")
        console.log(element)
        btn.forEach(tran=>{
            tran.addEventListener("transitionend",function(){
                wait(50);
                tran.classList.remove("pressed")
                console.log("time out")}
            )
        })
    } )
});
