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