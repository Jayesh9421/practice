import React, { useState } from 'react';

const CardNumber = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const inputNumber = e.target.value.replace(/\s/g, ''); // Remove white spaces
    setCardNumber(inputNumber);
    setIsValid(validateCardNumber(inputNumber));
  };

  const validateCardNumber = (number) => {
    // Luhn algorithm implementation
    let sum = 0;
    let double = false;
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i), 10);
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }
    return sum % 10 === 0;
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl font-bold mb-6">Credit Card Number Validator</h1>
      <input
        type="text"
        placeholder="Enter your credit card number"
        value={cardNumber}
        onChange={handleChange}
        className="border border-gray-400 px-4 py-2 mb-4 rounded"
      />
      {isValid ? (
        <p className="text-green-500 font-semibold">Valid Card Number</p>
      ) : (
        <p className="text-red-500 font-semibold">Invalid Card Number</p>
      )}
    </div>
  );
};

export default CardNumber;
