let determ = document.getElementById('determ');
determ.addEventListener('click',showInputsDeter);

let mm1 = document.getElementById('mm1')
mm1.addEventListener('click', showInputsMM1)

let mm1k = document.getElementById('mm1k');
mm1k.addEventListener('click', showInputsMM1K);

let mmc = document.getElementById('mmc');
mmc.addEventListener('click', showInputsMMC);

let mmck = document.getElementById('mmck');
mmck.addEventListener('click', showInputsMMCK);

//----------------------------------------------------------------------------------

let calcdeterm = document.getElementById('calcdeterm');
calcdeterm.addEventListener('click', calcDetermBtn);

let calcmm1 = document.getElementById('calcmm1');
calcmm1.addEventListener('click', calcMM1Btn);

let calcmm1k = document.getElementById('calcmm1k');
calcmm1k.addEventListener('click', calcMM1kBtn);

let calcmmc = document.getElementById('calcmmc');
calcmmc.addEventListener('click', calcMMcBtn);

let calcmmck = document.getElementById('calcmmck');
calcmmck.addEventListener('click' , calcMMckBtn);

let drawChart = document.getElementById('drawdeterm');
drawChart.addEventListener('click', drawChartBtn);