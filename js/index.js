
// common function 

function inputValueById(id) {
    const inputNumber = parseFloat(document.getElementById(id).value)
    return inputNumber;
}

function textValue(id) {
    const textValue = parseFloat(document.getElementById(id).innerText)
    return textValue;
}
// donate noakhali

document.getElementById('donate-noakhali-btn').addEventListener('click', function () {
    const amount = inputValueById('input-donation-noakhali')
    const balance = textValue('available-balance')
    const donateBalance = textValue('noakhali-donate-balance')
    if (!isNaN(amount) && amount > 0) {
        const donation = donateBalance + amount
        const donate = balance - amount
        document.getElementById('available-balance').innerText = donate.toFixed(2)
        document.getElementById('noakhali-donate-balance').innerText = donation.toFixed(2)

        const modal = document.getElementById('modal')

        modal.showModal();
        document.getElementById('close-modal').addEventListener('click', function () {
            modal.close();
        })

        const historyList = document.createElement("div")
        historyList.className = "border-2 border-gray-200 rounded-md p-5 space-y-4"
        historyList.innerHTML = `
        <p class="text-xl">${amount}Taka is Donate for Flood at Noakhali, Bangladesh</p>
        <p class="text-sm font-normal">  ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}</p>
        
        
        `;
        const history = document.getElementById('history')

        history.insertBefore(historyList, history.firstChild)








    } else {
        alert('Inviled information')
    }

})









// donate feni 


document.getElementById('donate-feni-btn').addEventListener('click', function () {
    const amount = inputValueById('input-donation-feni')
    const balance = textValue('available-balance')
    const donateBalance = textValue('feni-donate-balance')
    if (!isNaN(amount) && amount > 0) {
        const donation = donateBalance + amount
        const donate = balance - amount
        document.getElementById('available-balance').innerText = donate
        document.getElementById('feni-donate-balance').innerText = donation

        const modal = document.getElementById('modal')

        modal.showModal();
        document.getElementById('close-modal').addEventListener('click', function () {
            modal.close();
        })

        const historyList = document.createElement("div")
        historyList.className = "border-2 border-gray-200 rounded-md p-5 space-y-4"
        historyList.innerHTML = `
        <p class="text-xl">${amount}Taka is Donate for Flood Relief in Feni,Bangladesh</p>
        <p class="text-sm font-normal">  ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}</p>
        
        
        `;
        const history = document.getElementById('history')

        history.insertBefore(historyList, history.firstChild)








    } else {
        alert('Inviled information')
    }

})

// donate qouta
document.getElementById('donate-qouta-btn').addEventListener('click', function () {
    const amount = inputValueById('input-donation-qouta')
    const balance = textValue('available-balance')
    const donateBalance = textValue('qouta-balance')
    if (!isNaN(amount) && amount > 0) {
        const donation = donateBalance + amount
        const donate = balance - amount
        document.getElementById('available-balance').innerText = donate
        document.getElementById('qouta-balance').innerText = donation

        const modal = document.getElementById('modal')

        modal.showModal();
        document.getElementById('close-modal').addEventListener('click', function () {
            modal.close();
        })

        const historyList = document.createElement("div")
        historyList.className = "border-2 border-gray-200 rounded-md p-5 space-y-4"
        historyList.innerHTML = `
        <p class="text-xl">${amount}Taka is Aid for Injured in the Quota Movement</p>
        <p class="text-sm font-normal">  ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}</p>
        
        
        `;
        const history = document.getElementById('history')

        history.insertBefore(historyList, history.firstChild)








    } else {
        alert('Inviled information')
    }

})


// history button tap

document.getElementById('history-button').addEventListener('click', function () {
    const history = document.getElementById('history')
    const historyButton = document.getElementById('history-button')
    const donationButton = document.getElementById('donatoin-button')
    const donateSection = document.getElementById('donetion-section')


    history.classList.remove('hidden')
    historyButton.classList.add('bg-lime-300')
    donationButton.classList.remove("bg-lime-300")
    donateSection.classList.add('hidden')

    document.getElementById('donatoin-button').addEventListener('click', function () {
        donateSection.classList.remove('hidden')
        history.classList.add('hidden')
        donationButton.classList.add('bg-lime-300')
        historyButton.classList.remove("bg-lime-300")
    })

})


// donation button tap 

// navigation blog and home

document.getElementById('blog')
    .addEventListener('click', function () {
        window.location.href = './home.html'
    })