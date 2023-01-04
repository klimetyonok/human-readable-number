module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'
    ];

    let numString = number.toString();
    if (number < 0) throw new Error('Negative numbers are not supported.');
    /*0*/
    if (number == 0) {
        return 'zero';
    }
    /*1-20*/
    if (number < 20) {
        return ones[number];
    }
    /*21-99*/
    if (numString.length == 2)
        if (numString[1] == 0) {
            return tens[numString[0]];
        } else {
            return tens[numString[0]] + ' ' + ones[numString[1]];
        }
        /*100-999*/
    if (numString.length == 3) {
        let end = +(numString[1] + numString[2]);
        if (end < 20 && end > 0) {
            return ones[numString[0]] + ' hundred ' + ones[end];
        }
        if (numString[1] == '0' && numString[2] == '0') {
            return ones[numString[0]] + ' hundred';
        } else if (numString[2] == 0) {
            return ones[numString[0]] + ' hundred ' + tens[numString[1]];
        } else if (numString[1] < 2) {
            return ones[numString[0]] + ' hundred ' + ones[numString[2]];
        } else {
            return ones[numString[0]] + ' hundred ' + tens[numString[1]] + ' ' + ones[numString[2]];
        }
    }
}