// cash amount function
function cashAmount() {
    const CashAmount = document.getElementById('cashAmount')
    const CashAmountValue = CashAmount.value;
    console.log(CashAmountValue)
}
function deposit() {
    const CashAmount = document.getElementById('cashAmount')
    const CashAmountValue2 = CashAmount.value;
    const cash=parseInt(CashAmountValue2);
    const deposit = document.getElementById('Deposit')
    const depositValue = deposit.value;
    const depo=parseInt(depositValue);
    const result = cash + depo;
    // console.log(result)
    document.getElementById('cashAmount').value=result;
    document.getElementById('Deposit').value=' ';
}
function withdraw(){
    const CashAmount = document.getElementById('cashAmount')
    const CashAmountValue2 = CashAmount.value;
    const cash=parseInt(CashAmountValue2);
    const withdraw = document.getElementById('withdraw')
    const withdrawValue = withdraw.value;
    const Wdraw=parseInt(withdrawValue);
    const result = cash - Wdraw;
    // console.log(result)
    document.getElementById('cashAmount').value=result;
    document.getElementById('withdraw').value=' ';
    if(result<0){
        alert('Fokir...Tk Duka');
        document.getElementById('cashAmount').value='';

    }else{
        document.getElementById('withdraw').value=' ';
    }
}