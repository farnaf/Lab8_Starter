// unit.test.js

const {isPhoneNumber} = require('../code-to-unit-test/unit-test-me.js');
const {isEmail} = require('../code-to-unit-test/unit-test-me.js');
const {isDate} = require('../code-to-unit-test/unit-test-me.js');
const {isStrongPassword} = require('../code-to-unit-test/unit-test-me.js');
const {isHexColor} = require('../code-to-unit-test/unit-test-me.js');


// ____________________ isPhoneNUmber ____________________
test('invalid phone numbers', () => {
    expect(isPhoneNumber('123abc')).toBe(false);
    expect(isPhoneNumber('54ut')).toBe(false);
});

test('valid phone numbers', () => {
    expect(isPhoneNumber('858-444-0090')).toBe(true);
    expect(isPhoneNumber('123-457-8904')).toBe(true);
});


// ____________________ isEmail ____________________
test('invalid email', () => {
   expect(isEmail('adf@@gmail.org')).toBe(false);
   expect(isEmail('kjvgmail.com')).toBe(false);
    
});

test('valid emails', () => {
    expect(isEmail('thuc@ucsd.edu')).toBe(true);
    expect(isEmail('fnafarif@ucsd.edu')).toBe(true);
});


// ____________________ isStrongPassword ____________________
test('weak passwords', () => {
    expect(isStrongPassword('abc')).toBe(false);
    expect(isStrongPassword('tt')).toBe(false);
});

test('strong passwords', () => {
    expect(isStrongPassword('hello4_bye5')).toBe(true);
    expect(isStrongPassword('farnia_thuc_1')).toBe(true);
});


// ____________________ isDate ____________________
test('invalid dates', () => {
    expect(isDate('11112021')).toBe(false); 
    expect(isDate('11/11/21')).toBe(false); 
});
 
test('valid dates', () => {
    expect(isDate('02/02/2020')).toBe(true);
    expect(isDate('03/03/3030')).toBe(true);
});
 

// ____________________ isHexColor ____________________
test('invalid hex colors', () => {
    expect(isHexColor('#FFF1239asd')).toBe(false); 
    expect(isHexColor('#F013fasw')).toBe(false); 
});
 
test('valid hex colors', () => {
    expect(isHexColor('#7f1076')).toBe(true);
    expect(isHexColor('#1bd333')).toBe(true);
});
 