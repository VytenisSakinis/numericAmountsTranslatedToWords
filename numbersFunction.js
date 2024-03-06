let data

async function getJSON() {
    const promise = await fetch("./words.json")
    data = await promise.json()
    numbersToWords(12200)
    console.log(data);
    return data
}


function numbersToWords(number) {
    
    const numberInitial = number.toString()
    const numberMin = numberInitial.padStart(6, "0")
    const numbersArray = numberMin.split('')
    let ones = numbersArray[5]
    let tens = numbersArray[4] + "0"
    const hundreds = numbersArray[3] + "00"
    const thousands = +(numberMin.slice(0, 3) + "000")

    if(tens === "10")
    {
        if(ones > 0)
        {
            tens = 1
            tens = tens + ones
            ones = 0
        }
    }

    let onesWord = data.vienetai[ones] || '';
    let tensWord = data.dešimtys[tens] || '';
    let hundredsWord = data.šimtai[hundreds] || '';
    let thousandsWord = data.tūkstančiai[thousands] || '';
    
    const fullword = thousandsWord + ' ' + hundredsWord + ' ' + tensWord + ' ' + onesWord
    console.log(fullword);
    return fullword
}

getJSON();