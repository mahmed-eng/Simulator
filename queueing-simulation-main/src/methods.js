function showInputsDeter(){
    showTypeOfQueue('determ');
    makeAllHidden();
    constInput();
    document.getElementById('capacityk').classList.remove('d-none');
    document.getElementById('Lk').classList.remove('d-none');
    document.getElementById('initialm').classList.remove('d-none');
    document.getElementById('Lm').classList.remove('d-none');
    document.getElementById('time').classList.remove('d-none');
    document.getElementById('Lt').classList.remove('d-none');
    document.getElementById('n').classList.remove('d-none');
    document.getElementById('Ln').classList.remove('d-none');
    // costOutDeterm();
    document.getElementById('calcdeterm').classList.remove('d-none');
    document.getElementById('drawdeterm').classList.remove('d-none');
}

function showInputsMM1(){
    showTypeOfQueue('mm1');
    makeAllHidden();
    constInput();
    // constOutStotstic();
    document.getElementById('calcmm1').classList.remove('d-none');
}

function showInputsMM1K(){
    showTypeOfQueue('mm1k');
    makeAllHidden();
    constInput(); 
    document.getElementById('capacityk').classList.remove('d-none');
    document.getElementById('Lk').classList.remove('d-none');
    // constOutStotstic();
    document.getElementById('calcmm1k').classList.remove('d-none');
}

function showInputsMMC(){
    showTypeOfQueue('mmc');
    makeAllHidden();
    constInput();
    // constOutStotstic();
    document.getElementById('numSystem').classList.remove('d-none');
    document.getElementById('Lc').classList.remove('d-none');
    document.getElementById('calcmmc').classList.remove('d-none');
}

function showInputsMMCK(){
    showInputsMMC();
    showTypeOfQueue('mmck');
    document.getElementById('capacityk').classList.remove('d-none');
    document.getElementById('Lk').classList.remove('d-none');
    // constOutStotstic();
    //
    document.getElementById('calcmmc').classList.add('d-none');
    document.getElementById('calcmmck').classList.remove('d-none');
}

//---------------------------------------------------------------------------
function constInput(){
    document.getElementById('lamda').classList.remove('d-none');
    document.getElementById('mu').classList.remove('d-none');
    document.getElementById('Llamda').classList.remove('d-none');
    document.getElementById('Lmu').classList.remove('d-none');
}

function constOutStotstic(){
    document.getElementById('l').classList.remove('d-none');
    document.getElementById('lq').classList.remove('d-none');
    document.getElementById('w').classList.remove('d-none');
    document.getElementById('wq').classList.remove('d-none');
}

function costOutDeterm(){
    document.getElementById('nt').classList.remove('d-none');
    document.getElementById('wn').classList.remove('d-none');
}
// to make all hidden when click on a new queue
function makeAllHidden(){
    let check = document.querySelectorAll(".inputs");
    for (let i = 0; i < check.length; i++){
        check[i].classList.add('d-none');
    }
    let checOut = document.querySelectorAll('.out');
    for (let i = 0; i < checOut.length; i++){
        checOut[i].classList.add('d-none');
    }
    let hiddenBtnOUt = document.querySelectorAll('.btnout');
    for(let i = 0; i < hiddenBtnOUt.length; i++){
        hiddenBtnOUt[i].classList.add('d-none');
    }
    document.getElementById('hint').classList.add('d-none');
    document.getElementById('divChart').innerHTML = '';
}
// when click in a new queu show name of queue
function showTypeOfQueue(id){
    let typeQueue = document.getElementById('type-queue');
    let type = document.getElementById(id).value;
    typeQueue.innerHTML = type;
}

function clearOut(){
    document.getElementById('hint').classList.remove('d-none');
    document.getElementById('l').innerHTML = "L ---" ;
    document.getElementById('lq').innerHTML = "Lq ---";
    document.getElementById('w').innerHTML = "W ---";
    document.getElementById('wq').innerHTML = "Wq ---";
}


function setOutStotstic(l, lq, w, wq){
    document.getElementById('l').innerHTML = `L = ${l}`;
    document.getElementById('lq').innerHTML = `Lq = ${lq}`;
    document.getElementById('w').innerHTML = `W = ${w}`;
    document.getElementById('wq').innerHTML = `Wq = ${wq}`;
}

function factorial(num){
    if (num == 0)
    {
        return 1;
    }
    else
    {
        return (num * factorial(num - 1));
    }
}

function calcTi (lamda, mu, K){
    let ti = (K - (mu / lamda)) / (lamda - mu);
    let roundTi = Math.round(ti);
    let arrivalTime = 1 / lamda;

    while(true)
    {
        roundTi -= arrivalTime;
        let check = Math.trunc(lamda * roundTi) - Math.trunc((mu * roundTi) - (mu / lamda));
        if (check != K)
        {
            break;
        }
    }
    return Math.round(roundTi + arrivalTime);
}

function calcTiForM (lamda, mu, M){
    let ti = Math.trunc(M / (mu - lamda));
    let arrivalTime = 1 / lamda;

    while(true)
    {
        ti -= arrivalTime;
        let check = Math.trunc(mu * ti) - Math.trunc(lamda * ti);
        if (check != M)
        {
            break;
        }
    }
    return Math.round( ti + arrivalTime);
}

function getLamdaeval(){
    let getLamda;
    try{
        getLamda = eval(document.getElementById('lamda').value) + .00001;
    }
    catch(err){
            document.getElementById('hint').classList.remove('d-none');
            document.getElementById('hint').innerHTML = 'invalid input..!';
            document.getElementById('nt').innerHTML = 'n(t) = ----';
            document.getElementById('wn').innerHTML = 'W(n) = ----';
    }
    return getLamda;
}
function getMueval(){
    let getMu;
    try{
        getMu = eval(document.getElementById('mu').value) + .00001;
    }
    catch(err){
            document.getElementById('hint').classList.remove('d-none');
            document.getElementById('hint').innerHTML = 'invalid input..!';
            document.getElementById('nt').innerHTML = 'n(t) = ----';
            document.getElementById('wn').innerHTML = 'W(n) = ----';
    }
    return getMu;
}