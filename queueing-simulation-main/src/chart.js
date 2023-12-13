function drawChartBtn(){

    document.getElementById('divChart').innerHTML = '<canvas  id="myChart" class=""></canvas>'
    
    var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xLabel(),
                datasets: [{
                    data: dataForNt(),
                    label: "N(t)",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: false,
                    stepped: true,
                }]
            }
        });
        
        
}


function xLabel(){
    let getLamda = getLamdaeval();
    let getMu = getMueval();
    let getK = Number(document.getElementById('capacityk').value);
    let getM = Number(document.getElementById('initialm').value);
    let Ti = 0;
    if (getM <= 0)
    {
        Ti = calcTi(getLamda, getMu, getK+1);
    }
    else
    {
        Ti = calcTiForM(getLamda, getMu, getM);
    }
    console.log(`I am in x label ${Ti}`)
    let arrLabel = [];
    for (let i = 0; i <= Ti; i++ ) // change delete equal
    {
        arrLabel[i] = i;
    }
    return arrLabel;
}

function dataForNt(){
    let getLamda = getLamdaeval();
    let getMu = getMueval();
    let getK = Number(document.getElementById('capacityk').value);
    let getM = Number(document.getElementById('initialm').value);
    let Ti = 0;
    if (getM <= 0)
    {
        Ti = calcTi(getLamda, getMu, getK+1);
    }
    else
    {
        Ti = calcTiForM(getLamda, getMu, getM);
    }
    let dataNt = [];
    for (let i = 0; i <= Ti; i++){ // change delete equal
       dataNt[i] = ntForCahrt(i);
    }
    return dataNt;
}
function ntForCahrt(i){
    let getLamda = getLamdaeval();
    let getMu = getMueval();
    let getK = Number(document.getElementById('capacityk').value);
    let getM = Number(document.getElementById('initialm').value);
    let getT = i;
    let getN = Number(document.getElementById('n').value);
    let setNt;
    if (getLamda > getMu)
    {
            //calc D D 1 k-1
            // because in system k-1
            getK += 1;
            document.getElementById('hint').classList.add('d-none');
            let Ti = calcTi(getLamda, getMu, getK);
            // calc n(t)
            console.log(`Befor calc nt for chart`)
            if (getT >= Ti)
            {   
                // speacial Case
                if (getLamda == (2 * getMu))
                {
                    console.log(`I am in sepeacial case in t =  ${getT} and ti = ${Ti}`);
                    return getK-1;// change from 1 to 2
                }
                else
                {
                    return getK - 1;// change from 2 to 1
                }
                
            }
            else
            {
                setNt = Math.trunc(getLamda * getT) - Math.trunc((getMu * getT) - (getMu / getLamda));
                return setNt;
            }
            
    }
    else
    {
            if (getM <= 0)
            {
                setNt = 0;
                return setNt;
            }
            else
            {
                //calc D D 1 k-1 + M
                document.getElementById('hint').classList.add('d-none');
                let Ti = calcTiForM(getLamda, getMu, getM);
                console.log(Ti);
                // calc N(t)
                if (getT < Ti)
                {
                    setNt = getM + Math.trunc(getLamda * getT) - Math.trunc(getMu * getT);
                    return setNt;
                }
                else
                {
                    return 0; // change form 1 to 0
                }
            }
    }
}