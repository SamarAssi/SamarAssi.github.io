const about=document.getElementsByClassName('about');
function print(index){
    for(let i=0;i<about.length;i++){
        if(i==index){
            console.log('about #${i} has showed')
            about[i].style.display='flex';
            document.getElementsByTagName('button')[i+1].classList='border';
        }else{
            console.log('about #${i} has vanished')
            about[i].style.display='none';
            document.getElementsByTagName('button')[i+1].classList=' ';
        }
    }
}
function myfunction(){
    window.location.href="index.html";
}







const form=document.getElementsByTagName('form')[0];
const required=document.getElementsByClassName('required');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let empty=[];
    for(let i=0;i<required.length;i++){
        if(required[i].value==' ' || required[i].value==''){
            empty.push(required[i].name);
            required[i].classList="required red-border";
        }
        else{
            required[i].classList="required";
        }
    }
    if(empty.length==0){
        form.submit();
        alert("form has been submited");
        reload()
    }
    else{
        let err=empty.join('\n');
        alert('these fields are required: \n'+err);
    }
})



for(let i=0;i<required.length;i++){
    required[i].addEventListener('keypress', () => {
        required[i].classList='required';
        required[i+1].removeAttribute('readonly');
    })
}


document.getElementById('save').addEventListener('click',() => {
    const name=required[2].value.split('@')[0];
    console.log('The application of ${name} is saved!');
})



document.getElementById('reseter').addEventListener('click', () =>{
    location.reload();
})

window.onload=function(){
    let date=new Date();
    let day=date.getDay().toString();
    day.length==1 ? day ='0' + day: "";
    let month=date.getMonth().toString();
    month.length ==1 ? month= '0' + month: "";
    let yearMin=date.getFullYear();
    let yearMax=yearMin+1;
    yearMin=yearMin.toString();
    yearMax=yearMax.toString();
    let dateInput=document.getElementById('date');
    dateInput.max='${yearMax}-${month}-${day}';
    dateInput.min='${yearMin}-${month}-${day}';
}