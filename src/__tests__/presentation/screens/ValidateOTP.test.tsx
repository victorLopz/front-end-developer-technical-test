import React, { useState } from "react";

export const ValidateOTP = () => {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      // Solo números
      const newInputs = [...inputs];
      newInputs[index] = value.slice(-1); // Solo el último carácter
      setInputs(newInputs);
      setIsButtonDisabled(newInputs.some((input) => input === ""));
    }
  };

  return (
    <div>
      <p>Digita el código para verificación de tu cuenta</p>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type="text"
            value={input}
            onChange={(e) => handleChange(index, e.target.value)}
            maxLength={1}
            data-testid={`otp-input-${index}`}
          />
        ))}
      </div>
      <button
        className={`mt-8 bg-white text-customBlue py-2 px-4 rounded-xl w-[200px] ${
          isButtonDisabled
            ? "disabled:bg-gray-500 disabled:cursor-not-allowed"
            : "bg-green-500"
        }`}
        disabled={isButtonDisabled}
        data-testid="submit-button"
      >
        Continuar
      </button>
    </div>
  );
};
