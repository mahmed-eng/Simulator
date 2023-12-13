function calcDetermBtn(){
    costOutDeterm();
    let getLamda = getLamdaeval();
    console.log(`getlamda ${getLamda}`, typeof(getLamda));
    let getMu = getMueval();
    let getK = Number(document.getElementById('capacityk').value);
    let getM = Number(document.getElementById('initialm').value);
    let getT = Number(document.getElementById('time').value);
    let getN = Number(document.getElementById('n').value);

    if (getLamda > getMu)
    {
        console.log(`I am in M=0: ${getK}`);
        document.getElementById('initialm').classList.add('d-none');
        document.getElementById('Lm').classList.add('d-none');
        if (getLamda == undefined || isNaN(getLamda)  || getMu === undefined || isNaN(getMu) || getK <= 0 || getT <= 0)
        {
            // No inputs
            document.getElementById('hint').classList.remove('d-none');
            document.getElementById('nt').innerHTML = 'n(t) = ----';
            document.getElementById('wn').innerHTML = 'W(n) = ----';
        }
        else
        {
            //calc D D 1 k-1
            // because in system k-1
            getK += 1;
            document.getElementById('hint').classList.add('d-none');
            let Ti = calcTi(getLamda, getMu, getK);
            console.log(Ti);
            // calc n(t)
            if (getT >= Ti)
            {   
                // speacial Case
                if (getLamda == (2 * getMu))
                {
                    document.getElementById('nt').innerHTML = `n(${getT}) = ${getK - 1}`;
                }
                else
                {
                    document.getElementById('nt').innerHTML = `n(${getT}) = ${getK - 1} or ${getK - 2}`;
                }
                
            }
            else
            {
                let setNt = Math.trunc(getLamda * getT) - Math.trunc((getMu * getT) - (getMu / getLamda));
                document.getElementById('nt').innerHTML = `n(${getT}) = ${setNt}`;
            }
            // calc W(n)
            let lamdaTi = getLamda * Ti;
            console.log(lamdaTi);
            if (getN == 0)
            {
                document.getElementById('wn').innerHTML = `Wq(${getN}) = 0`
            }
            else if (getN < lamdaTi)
            {
                let setWn = Math.round(((1 / getMu) - (1 / getLamda)) * (getN - 1));
                document.getElementById('wn').innerHTML = `Wq(${getN}) = ${setWn}`;
            }
            else
            {
                if (getLamda == (2 * getMu))
                {
                    let setWn1 = Math.round(((1 / getMu) - (1 / getLamda)) * (lamdaTi - 2));
                    document.getElementById('wn').innerHTML = `Wq(${getN}) = ${setWn1}`;
                }
                else
                {
                    let setWn1 = Math.round(((1 / getMu) - (1 / getLamda)) * (lamdaTi - 2));
                    let setWn2 = Math.round(((1 / getMu) - (1 / getLamda)) * (lamdaTi - 3));
                    document.getElementById('wn').innerHTML = `Wq(${getN}) = ${setWn1} or ${setWn2}`;
                }
                
            }

        }
    }
    else // lamda <= mu
    {
        if (getLamda == undefined || isNaN(getLamda)  || getMu === undefined || isNaN(getMu) || getK <= 0 || getT <= 0)
        {
            // No inputs
            document.getElementById('hint').classList.remove('d-none');
            document.getElementById('nt').innerHTML = 'n(t) = ----';
            document.getElementById('wn').innerHTML = 'W(n) = ----';
        }
        else
        {
            if (getM <= 0)
            {
                document.getElementById('nt').innerHTML = `n(${getT}) = 0 or 1`;
                document.getElementById('wn').innerHTML = `Wq(${getN}) = 0`;
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
                    let setNt = getM + Math.trunc(getLamda * getT) - Math.trunc(getMu * getT);
                    document.getElementById('nt').innerHTML = `n(${getT}) Where ${getM} initial = ${setNt}`;
                }
                else
                {
                    document.getElementById('nt').innerHTML = `n(${getT}) Where ${getM} initial = 0 or 1`;
                }

                // calc W(n)
                let lamdaTi = Math.trunc(getLamda * Ti);
                if (getN == 0)
                {
                    let setWq = (getM - 1) / (2 * getMu);
                    document.getElementById('wn').innerHTML = `Wq(${getN}) = ${setWq}`;
                }
                else if (getN <= lamdaTi)
                {
                    let setWq = ((getM - 1 + getN) * (1 / getMu)) - (getN * (1 / getLamda));
                    document.getElementById('wn').innerHTML = `Wq(${getN}) = ${setWq.toFixed(2)}`;
                }
                else
                {
                    document.getElementById('wn').innerHTML = `Wq(${getN}) = 0`;
    
                }
            }
        }

    }
}

//----------------------------------------------------------------------------
// M M 1
function calcMM1Btn(){
    
    console.log('calc mm1 btn');
    constOutStotstic();
    clearOut();
    let getLamda = getLamdaeval();
    let getMu = getMueval();
    console.log(getLamda);
    console.log(getMu);
    if (getLamda == undefined || isNaN(getLamda)  || getMu === undefined || isNaN(getMu)){
        clearOut();
    }

    else{
        document.getElementById('hint').classList.add('d-none');
        let setL = getLamda / (getMu - getLamda);
        let setLq = (getLamda * getLamda) / (getMu * (getMu - getLamda));
        let setW = 1 / (getMu - getLamda);
        let setWq = getLamda / (getMu * (getMu - getLamda));
        
        setOutStotstic(setL.toFixed(3), setLq.toFixed(3), setW.toFixed(3), setWq.toFixed(3));
    }
}

//---------------------------------------------------------------------------
// M M 1 K
function calcMM1kBtn(){
    console.log('calc mm1k btn');
    constOutStotstic();
    clearOut();

    let getLamda = getLamdaeval();
    let getMu = getMueval();
    let getK = Number(document.getElementById('capacityk').value);
    if (getLamda == undefined || isNaN(getLamda)  || getMu === undefined || isNaN(getMu) || getK <= 0)
    {
        clearOut();
    }
    else
    {
        document.getElementById('hint').classList.add('d-none');
        let row = getLamda / getMu;
        let setL;
        let Pk;
        let lamdaDash;
        if (row === 1)
        {
            setL = getK / 2;
            Pk = 1 / (getK + 1);
        }
        else 
        {
            let up = 1 - ((getK + 1) * Math.pow(row, getK)) + (getK * Math.pow(row, getK+1));
            let down = (1 - row) * (1 - Math.pow(row, getK+1));
            setL = row * (up / down);
            Pk = Math.pow(row, getK) * ((1 - row) / (1 - Math.pow(row, getK+1)));

        }
        lamdaDash = getLamda * (1 - Pk);
        let setW = setL / lamdaDash;
        let setWq = setW - (1 / getMu);
        let setLq = lamdaDash * setWq;
        setOutStotstic(setL.toFixed(3), setLq.toFixed(3), setW.toFixed(3), setWq.toFixed(3));
    }
}

//-----------------------------------------------------------------------------------
// M M C
function calcMMcBtn(){
    console.log('calc mmc btn');
    constOutStotstic();
    clearOut();
    let getLamda = getLamdaeval();
    let getMu = getMueval();
    let getC = Number(document.getElementById('numSystem').value);

    if (getLamda == undefined || isNaN(getLamda)  || getMu === undefined || isNaN(getMu) || getC <= 0)
    {
        clearOut();
    }
    else
    {
        document.getElementById('hint').classList.add('d-none');
        let R = getLamda / getMu;
        let row = R / getC;
        console.log(row);
        console.log(getC);
        let Po;
        if (row < 1)
        {
            let firstPart = 0;
            for (let i = 0; i <= getC-1; i++)
            {
                let power = Math.pow(R, i);
                let fact = factorial(i);
                firstPart += (power / fact);
                console.log(`power ${power}: fact ${fact}`);
            }
            
            console.log(firstPart);
            let oneDivPo = firstPart + ((getC * Math.pow(R, getC)) / (factorial(getC) * (getC - R)));
            Po = 1 / oneDivPo;
            console.log(`I am here ${Po}`);
        }
        else
        {
            let firstPart = 0;
            for (let i = 0; i <= getC-1; i++)
            {
                firstPart += (1 / factorial(i)) * Math.pow(R, i);
            }
            let oneDivPo = firstPart + ((1 / factorial(getC)) * Math.pow(R, getC) * ((getC * getMu) / ((getC * getMu) - getLamda )));
            Po = 1 / oneDivPo;

        }
        let up = Math.pow(R, getC) * getLamda * getMu;
        let down = factorial(getC-1) * Math.pow((getC * getMu) - getLamda, 2);
        let setLq = (up / down) * Po;
        let setWq = setLq / getLamda;
        let setW = setWq + (1 / getMu);
        let setL = setLq + R;

        setOutStotstic(setL.toFixed(3), setLq.toFixed(3), setW.toFixed(3), setWq.toFixed(3));



    }
}

//-----------------------------------------------------------------------------------
// M M C K
function calcMMckBtn(){
    console.log('calc MMck btn');
    constOutStotstic();
    clearOut();
    let getLamda = getLamdaeval();
    let getMu = getMueval();
    let getC = Number(document.getElementById('numSystem').value);
    let getK = Number(document.getElementById('capacityk').value);
    if (getLamda == undefined || isNaN(getLamda)  || getMu === undefined || isNaN(getMu) || getC <= 0 || getK <= 0)
    {
        clearOut();
    }
    else
    {
        document.getElementById('hint').classList.add('d-none');
        let R = getLamda / getMu;
        let row = R / getC;
        console.log(`row ${row}`);
        console.log(`R: ${R}`);
        let Po;
        if (row == 1)
        {
            let firstPart = 0;
            for (let i = 0; i <= getC-1; i++)
            {
                firstPart += (Math.pow(R, i) / factorial(i));
            }
            let oneDivPo = firstPart + ((Math.pow(R, getC) / factorial(getC)) * (getK - getC + 1) );
            Po = 1 / oneDivPo;
        }
        else
        {
            let firstPart = 0;
            for (let i = 0; i <= getC-1; i++)
            {
                firstPart += (Math.pow(R, i) / factorial(i));
            }
            let oneDivPo = firstPart + ( (Math.pow(R, getC) / factorial(getC)) * ((1 - Math.pow(row, getK-getC+1)) / (1 - row)));
            Po = 1 / oneDivPo;
        }
        console.log(`Po = ${Po}`);
        let Pk = (Math.pow(R, getK) / (Math.pow(getC, getK-getC) * factorial(getC))) * Po;
        let lamdaDash = getLamda * (1 - Pk);
        let firstPartLq = (row * Math.pow(R, getC) * Po) / (factorial(getC) * Math.pow(1-row, 2));
        let setLq = firstPartLq * (1 - Math.pow(row, getK-getC+1) - ((1-row) * (getK - getC + 1) * Math.pow(row, getK-getC)));
        let secondPartL = 0;
        for (let i = 0; i <= getC - 1; i++)
        {
            secondPartL += (getC -i) * (Math.pow(R, i) / factorial(i));
        }
        let setL = setLq + getC - (Po * secondPartL);
        let setW = setL / lamdaDash;
        let setWq = setLq / lamdaDash;

        setOutStotstic(setL.toFixed(3), setLq.toFixed(3), setW.toFixed(3), setWq.toFixed(3));
    }


}