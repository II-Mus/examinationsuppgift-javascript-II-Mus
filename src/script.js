let currentBalance = 0;

const descInput = document.querySelector('#desc');
const amountInput = document.querySelector('#amount');
const incomeList = document.querySelector('#incomeList');
const expenseList = document.querySelector('#expenseList');
const balanceDisplay = document.querySelector('#balance');

// Knapparna (inkomst och utgift)
const incomeBtn = document.querySelector('#incomeBtn');
const expenseBtn = document.querySelector('#expenseBtn');

/**
 * Funktion (inkomst eller utgift)
 * @param {string} type */
 
function addTransaction(type) {
    // Hämtar värden
    const descValue = descInput.value.trim();
    const amountValue = amountInput.value.trim();

    // Kontrollera
    if (descValue === '' || amountValue === '') {
        return;
    }

    const amount = Number(amountValue);
    if (isNaN(amount) || amountValue === '') {
        return;
    }

    // Uppdatera och beräkna
    const li = document.createElement('li');

    if (type === 'income') {
        // Formaterar
        li.textContent = `${descValue} - ${amount} kr (Inkomst)`;
        incomeList.appendChild(li);
        
        // Ökar aktuell saldo
        currentBalance += amount;
    } else if (type === 'expense') {
        li.textContent = `${descValue} - ${amount} kr (Utgift)`;
        expenseList.appendChild(li);
        
        currentBalance -= amount;
    }

    // Uppdaterar saldo
    balanceDisplay.textContent = currentBalance;

    // Tömmer båda inmatningsfälten
    descInput.value = '';
    amountInput.value = '';
}

// event listener till knapparna
incomeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTransaction('income');
});

expenseBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Förhindrar eventuell standardbeteende
    addTransaction('expense');
});
