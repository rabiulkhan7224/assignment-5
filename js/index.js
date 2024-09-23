
// common function 

function inputValueById(id) {
    const inputNumber = parseFloat(document.getElementById(id).value)
    return inputNumber;
}

function textValue(id) {
    const textValue = parseFloat(document.getElementById(id).innerText)
    return textValue;
}

document.getElementById('donate-noakhali-btn').addEventListener('click', function () {
    const amount = inputValueById('input-donation-noakhali')
    const balance = textValue('available-balance')
    const donateBalance = textValue('noakhali-donate-balance')
    if (!isNaN(amount)) {
        const donation = donateBalance + amount
        const donate = balance - amount
        document.getElementById('available-balance').innerText = donate
        document.getElementById('noakhali-donate-balance').innerText = donation


        const historyList = document.createElement("div")
        historyList.innerHTML = `
        <p>${amount}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p> ${new Date().toLocaleDateString}</p>
        
        
        `;
        const history = document.getElementById('history')

        history.appendChild(historyList, history.childNodes)
        console.log(history)




        const modal = document.getElementById('modal')


        modal.showModal();
        document.getElementById('close-modal').addEventListener('click', function () {
            modal.close();
        })



    } else {
        alert('Inviled information')
    }

})

// document.getElementById ('donate-noakhali-btn').addEventListener('click',function(){
// })
