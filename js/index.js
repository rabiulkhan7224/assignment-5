
// common function 

function inputValueById (id){
    const inputNumber =parseFloat(document.getElementById(id).value)
    return inputNumber;
}

function textValue (id){
    const textValue =parseFloat(document.getElementById(id).innerText)
    return textValue;
}
 
document.getElementById('donate-noakhali-btn').addEventListener('click',function(){
    const amount=inputValueById('input-donation-noakhali')
    const balance=textValue('available-balance')
    const donateBalance=textValue('noakhali-donate-balance')
    if(!isNaN(amount)){
         const donation =donateBalance+amount
        const donate=balance-amount
        document.getElementById('available-balance').innerText=donate
        document.getElementById('noakhali-donate-balance').innerText=donation
                                                        

        
    }else{
        alert('Inviled information')
    }
    
})
