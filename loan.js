document.getElementById('calculate').addEventListener('click', function(){

    let loan = document.getElementById('loanAmount');
    let interest = document.getElementById('interestRate');
    let month = document.getElementById('noOfMonth');


    if(loan.value == '' || interest.value == '' || month.value == ''){
        alert("Please Enter Three Input Field First Then Click Calculate");
    }

    else{
        const loanAmountTotal = loan.value;

        const loanAmountTotalInt = parseFloat(loanAmountTotal);

        const interestRate = interest.value;

        const interestRateInt = parseFloat(interestRate);

        const noOfMonthTotal = month.value;

        const noOfMonthTotalInt = parseFloat(noOfMonthTotal);



        const totalInterest = parseFloat(((interestRateInt / 100) * loanAmountTotalInt).toFixed(2));

        const perMonthInterest =  parseFloat((totalInterest / noOfMonthTotalInt).toFixed(2));

        const totalPayableMoney =  parseFloat((loanAmountTotalInt + totalInterest).toFixed(2));

        const perMonthPayable = parseFloat((totalPayableMoney / noOfMonthTotalInt).toFixed(2));

        document.getElementById('description').style.display = 'block';

        document.getElementById('interest').style.display = 'block';
        document.getElementById('perMonthInterest').style.display = 'block';
        document.getElementById('totalPay').style.display = 'block';
        document.getElementById('perMonth').style.display = 'block';

        document.getElementById('loan').innerText = loanAmountTotalInt + ' Tk';
        document.getElementById('interestValue').innerText = interestRateInt + ' %';
        document.getElementById('month').innerText = noOfMonthTotalInt + ' Months';
        document.getElementById('interestMoney').innerText = totalInterest + ' Tk';
        document.getElementById('perMonthInterestMoney').innerText = perMonthInterest + ' Tk';
        document.getElementById('totalPayMoney').innerText = totalPayableMoney + ' Tk';
        document.getElementById('perMonthMoney').innerText = perMonthPayable + ' Tk';
        
        loan.value = "";
        interest.value = "";
        month.value = "";
    }
})