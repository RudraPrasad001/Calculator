const el = document.getElementById('display');
var scientific = document.getElementById('Scientific');
var  vis = false;
function append(key){
    el.value+=key;
}
function cl(){
    el.value=" ";
}

function back(){
    var str = el.value;
    var len = str.length;
    el.value=str.substring(0,len-1);
}

function eq(){
    try{
    el.value=eval(el.value);
    if(el.value=="Infinity"||el.value=="undefined"){
        throw new Error(er);
    }
}
    catch(error){
        el.value="Error";
        el.classList.add('red');
        setTimeout(()=>{
            
            el.value=" ";},1000);
        setTimeout(()=>{el.classList.remove('red');},1000);
    }
}
function scin(){
    if(!vis){
        scientific.classList.add('anim');
        scientific.classList.remove('upward');
        scientific.classList.remove('hid');
        vis = true;
    }
    else{
        scientific.classList.remove('anim');
        scientific.classList.add('upward');
        setTimeout(()=>{scientific.classList.add('hid');},1000);
        
        vis=false;
    }
}