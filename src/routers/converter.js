const express = require('express')

const router = new express.Router()

const romanNumbers = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX',
    'XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI',
    'XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV',
    'LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII','LXIX','LXX','LXXI','LXXII',
    'LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX','LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI',
    'LXXXVII','LXXXVIII','LXXXIX','XC','XCI','XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C']

const convertToRoman = (number) => {
    if (number === 0){
        return 'Not defined';
    }
    if (number>100||number<0){
        throw new Error('the number must be between 0 and 100');
    }
    return romanNumbers[number-1];
}

//GET converter?number=9
router.get('/converter', async (req, res) => {
    try {
        const {number} = req.query;
        const romanNumber = convertToRoman(parseInt(number));
        res.send({romanNumber});
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
