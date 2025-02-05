const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = document.getElementById('amount').value;
    let percentage = document.getElementById('discount-percentage').value;
    let discountAmt = document.getElementById('discount-amount');
    let FinalPay = document.getElementById('pay');
    let discountAmt1 = document.getElementById('discountAmt1');
    let FinalPay2 = document.getElementById('FinalPay2');

    discountAmt.value = billAmt * percentage / 100;
    FinalPay.value = billAmt - discountAmt.value;
    discountAmt1.value = billAmt * percentage / 100;
    FinalPay2.value = billAmt - discountAmt.value;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});

