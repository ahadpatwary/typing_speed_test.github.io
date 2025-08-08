const div=document.querySelector('#text');
const circle=document.querySelectorAll('circle');
const p=document.querySelectorAll('.lk');
const calculate=document.querySelectorAll('.calculate');
const form=document.querySelector('form');
const input=document.querySelectorAll('input');
const div1=document.querySelector('#last');
const result=document.querySelector('#result');
const button=document.querySelector('button');
const small=document.querySelector('#small');
const text='For most people, the average typing speed is around 40 words per minute. However, for admins and executive assistants whose jobs heavily rely on computer skills, the average typing speed is around 60 words per minute. If you can produce at least 80 words per minute, you are considered an advanced typist.';
const textElement=document.querySelector('#text-bold');
let al;
input[0].value=null;
input[1].value=null;
for(let i=0;i<70;i++)
{
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(json =>{
        let el=document.createElement('p');
        div.appendChild(el);
        let str=json.fact;
        el.classList.add('newClass');
        for(let j in str){
            al=document.createElement('span');
            el.appendChild(al);
            al.innerText=str[j];
            al.classList.add('al');
        }
    })
}
let k=0;
let kk=0;
let m=0;
let right=0;
let error=0;
let charCount=right+error;
let poi=true;
let word=0;
let char=0;
let pointerCros=true;

function handleKeyDown(e) {
    e.preventDefault();
    let a=div.childNodes[k].childNodes[kk];

    if(a.innerText==e.key)
    {
        if(a.offsetWidth==0)
        {
            m=m+60;
            div.scrollTo(0, m);
        }
        char++;
        if(a.innerText==' ' || a.innerText=='.')
        {
            word++;
        }
        right++;
        a.style.backgroundColor='#edf7e7';
        a.style.color='#95c590';
        a.classList.add('al');
        div.childNodes[k].childNodes[kk].style.textDecoration='none';

        if(div.childNodes[k].childNodes.length-1==kk){
            k++;
            kk=-1;
        }
        kk++;
        div.childNodes[k].childNodes[kk].style.textDecoration='underline blue 2px';
        pointerCros=false;

    }
    if(a.innerText!=e.key && e.keyCode!=16 && e.keyCode!=8 && e.keyCode!=20)
    {
        char++;
        if(a.offsetWidth==0)
        {
            m=m+60;
            div.scrollTo(0, m);
        }
        if(a.innerText==' ' || a.innerText=='.')
        {
            word++;
        }
        error++;
        a.style.backgroundColor='#ffdcd9';
        a.style.color='red';

        a.classList.add('al');
        div.childNodes[k].childNodes[kk].style.textDecoration='none';


        if(div.childNodes[k].childNodes.length-1==kk){
            k++;
            kk=-1;
        }
        kk++;
        div.childNodes[k].childNodes[kk].style.textDecoration='underline blue 2px';
        pointerCros=false;
    }
    let point=false;
    if(e.keyCode==8)
    {
        if(kk==0 && k>0)
        {
            point=true;
            if(point===true)
            {
                div.childNodes[k].childNodes[kk].style.textDecoration='none'
            }
            k--;
            kk=div.childNodes[k].childNodes.length;
        }

        if((div.childNodes[k].childNodes[kk-1].style.color=='red' && div.childNodes[k].childNodes[kk-1].offsetWidth!=0)|| (div.childNodes[k].childNodes[kk-1].offsetWidth==0 && div.childNodes[k].childNodes[kk-2].style.color=='red'))
        {    
            if(a.offsetWidth==0 && pointerCros==true)
            {
                 m=m-60;
                div.scrollTo(0,m);
            }
            error--;
            if(point===false)
            {
                div.childNodes[k].childNodes[kk].style.textDecoration='none'
            }                  
            kk=kk-1;
            div.childNodes[k].childNodes[kk].style.backgroundColor='#ffffff';
            div.childNodes[k].childNodes[kk].style.color='black';
            a.classList.add('al');
            if( div.childNodes[k].childNodes[kk].innerText==' ' ||  div.childNodes[k].childNodes[kk].innerText=='.' )
            {
                word--;
            }
            char--;
            if(div.childNodes[k].childNodes[kk].style.color='black' )
            {
                pointerCros=true;
            }
        }
    }
    charCount=right+error;
    if(poi===true)
    {
        ahad();
        poi=false;
    }
}
let min;
let sec;
function handleSubmit(e){
    e.preventDefault();
    min=Number(input[0].value);
    sec=Number(input[1].value);
    console.log(min,sec);
    if(min!=NaN && sec!=NaN &&  min<=10 && min>=0 && sec<=60 && sec>=0 &&(min!=0 || sec!=0))
        { 
        input[0].style.pointerEvents='none';
        input[1].style.pointerEvents='none';
        input[2].style.pointerEvents='none';
        p[2].innerHTML= `${sec}<br><span id='span'>SECOND</span>`
        p[1].innerHTML= `${min}<br><span id='span'>MINUTE</span>`
        small.style.visibility='hidden';
        window.addEventListener('keydown', handleKeyDown);
    }
    else
    {
        input[0].value=5;
        input[1].value=0;
        small.innerHTML=`please give me valid value Else exacuat default value `;
        small.style.color='red';
        form.removeEventListener('submit', handleSubmit);
        form.addEventListener('submit', handleSubmit);
    }

}
form.addEventListener('submit', handleSubmit);

let text1;
let index = 0;
let idx=0;
function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); 
    } else {
        textElement.style.borderRight = 'none';
    }
}

function ahad()
{
    let amm=true;
    let nowCount=0;
    let kko;
    let intervalId=setInterval(()=>{

        let ti=((min*60)+sec)/60;
        let wpm=Math.round(word/ti);
        let cpm=Math.round(char/ti);
        text1=`YOUR TYPING SPEED IS ${wpm} W/m`;
        calculate[0].innerHTML=`<p class='calculate'>${wpm}<br><span class='span'>WORD/min</span></p>`;
        calculate[1].innerHTML=`<p class='calculate'>${cpm}<br><span class='span'>CHAR/min</span></p>`;
        nowCount++;
        let endDate = (min* 60) + sec;
        let different=endDate-nowCount;
        let mm=different/60;
        let m=parseInt(mm);
        if(amm)
        {
            kko=m;
            amm=false; 
            if(kko==0)
            {
                kko=1;
            }
        }
        p[1].innerHTML= `${m}<br><span id='span'>MINUTE</span>`
        let ll=different-(m*60);
        let l=parseInt(ll);
        circle[1].style.strokeDashoffset=440-((440/kko)*m);
        circle[2].style.strokeDashoffset=440-((440/60)*ll);
        p[2].innerHTML= `${l}<br><span id='span'>SECOND</span>`
        if(endDate==nowCount)
        {
           p[2].innerHTML= `TIME<br><span id='span'>OVER</span>`
           p[1].innerHTML= `TIME<br><span id='span'>OVER</span>`
           div1.classList.add('scroll');
           window.removeEventListener('keydown', handleKeyDown);
            setTimeout(function typeText1(text1) {
                if (idx < text.length) {
                    result.innerHTML += text1.charAt(idx);
                    idx++;
                    setTimeout(typeText1, 100,text1); 
                } else {
                    textElement.style.borderRight = 'none';
                }
            },5000,text1);
  
            setTimeout(()=>{
                typeText();
            },8000)

            setTimeout(()=>{
                button.addEventListener('click',()=>{
                    window.location.reload();
                })
                button.style.opacity='1';
            },10000)
            clearInterval(intervalId);
            clearInterval(intervalId2);
        }
    },1000);

    p[0].innerHTML= `100%`;
    let intervalId2=setInterval(()=>{
        let a=(440/charCount)*right;
        let b=(right*100)/charCount;
        p[0].innerHTML= `${parseInt(b)}%<br><span id='span'>ACCURACY</span>`;
        circle[0].style.strokeDashoffset=440-a;
    })
}