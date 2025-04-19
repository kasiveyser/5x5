var set = 5;

function startArr() {
    var arr = [];
    for(i=0; i < set*set; i++){
        arr[i] = i;
    }
    return arr;
}

var randArr = [];

function randomizeArr(){
    var arr = startArr();
    randArr = [];
    // if(randArr > 0) {
    //  randArr.length = 0;
    //  console.log("clear randArr \n" + randArr);
    // }

    while(arr.length) {
        var index = Math.random() * arr.length >> 0;
        var item = arr.splice(index, 1)[0];
        randArr.push(item);
    }
    console.log(randArr);
}

randomizeArr();

// console.log(JSON.stringify(randArr));

function renderTable() {
    // var div = document.createElement('div');
    // div.className = "cell";

    // function printCell() {
    //  var div = document.createElement('div');
    //  div.className = "cell";
    //  div.innerHTML = (randArr[i] + 1);
    //  domMain.appendChild(div);   
    //  console.log(div);
    //  console.log(randArr[i] + 1);
    // }
    var domMain = document.getElementById('main');
    domMain.innerHTML = "";
    var tableArr = "";
    for(let i = 0; i < set*set; i++){

        function printCell() {
            var div = document.createElement('div');
            div.className = "cell";
            div.innerHTML = (randArr[i] + 1);
            domMain.appendChild(div);   
            console.log(div);
            console.log(randArr[i] + 1);
        }
        if ((i+1)%set === 0){
            tableArr = tableArr + (randArr[i] + 1).toString() + "\n";
            printCell();
        }else{
            tableArr = tableArr + (randArr[i] + 1).toString() + " ";
            printCell();
        }
    }
    console.log(tableArr);
    return tableArr;
}

function restartTable (){
    randomizeArr();
    renderTable();
}

  function ready() {
    console.log(document.getElementById('main'));
    restartTable();
  }

document.addEventListener("DOMContentLoaded", ready);


document.addEventListener('keydown', function(event){
    var keyName = event.keyCode;
    if(keyName == 32) {
        event.preventDefault();
        console.log("start stopwatch");
        StartStop();
    }
});

const buttons = document.querySelectorAll('.startstop');
// Проходим циклом по каждому найденному элементу кнопки
buttons.forEach(button => {
    // Добавляем обработчик события click
    button.addEventListener('click', function() {
        StartStop();
    });
});

// *Секундомер

//объявляем переменные
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
//функция для очистки поля
function ClearСlock() { 
    clearTimeout(clocktimer); 
    h=1;m=1;tm=1;s=0;ts=0;ms=0; 
    init=0;
    readout='00:00:00.00'; 
    document.MyForm.stopwatch.value=readout; 
} 
//функция для старта секундомера
function StartTIME() { 
    var cdateObj = new Date(); 
    var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
    if (t>999) { s++; } 
    if (s>=(m*base)) { 
        ts=0; 
        m++; 
    } else { 
        ts=parseInt((ms/100)+s); 
        if(ts>=base) { ts=ts-((m-1)*base); } 
    } 
    if (m>(h*base)) { 
        tm=1; 
        h++; 
    } else { 
        tm=parseInt((ms/100)+m); 
        if(tm>=base) { tm=tm-((h-1)*base); } 
    } 
    ms = Math.round(t/10); 
    if (ms>99) {ms=0;} 
    if (ms==0) {ms='00';} 
    if (ms>0&&ms<=9) { ms = '0'+ms; } 
    if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
    dm=tm-1; 
    if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
    dh=h-1; 
    if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
    readout = dh + ':' + dm + ':' + ds + '.' + ms; 
    document.MyForm.stopwatch.value = readout; 
    clocktimer = setTimeout("StartTIME()",1); 
} 
//Функция запуска и остановки
function StartStop() { 
    if (init==0){ 
        ClearСlock();
        dateObj = new Date(); 
        StartTIME(); 
        init=1; 
        restartTable()
    } else { 
        clearTimeout(clocktimer);
        init=0;
        createResult();
    } 
} 


function createResult(lastTime){
    let div = document.createElement('div');
    div.className = "resultBarCell";
    div.innerHTML = readout;
    document.getElementById('resultBar').appendChild(div);  
}


// result list hide/show

const squareButton = document.querySelector('.right-button');
const resultBar = document.getElementById('resultBar');

squareButton.addEventListener('click', function() {
    if (resultBar.style.display === 'none' || !resultBar.style.display) { // Проверяем, скрыта ли панель
            resultBar.style.display = 'block'; // Показываем панель
        } else {
            resultBar.style.display = 'none';} // Скрываем панель
    console.log("Квадратная кнопка нажата!");
});
