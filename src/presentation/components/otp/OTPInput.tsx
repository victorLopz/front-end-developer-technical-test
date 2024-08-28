import React, { useState } from "react";
import Swal from "sweetalert2";

interface OTPVerificationProps {
  onResendOtpCode: () => void;
  predefinedCode: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  predefinedCode
}) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(4).fill(""));
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newValues = [...inputValues];
      newValues[index] = value;
      setInputValues(newValues);

      // Enfocar siguiente input si es necesario
      if (value && index < inputValues.length - 1) {
        const nextInput = document.querySelectorAll("input")[
          index + 1
        ] as HTMLInputElement;
        nextInput?.focus();
      }

      // Validar código
      const code = newValues.join("");
      // Se actualiza la validez en función del código ingresado y del código predefinido
      setIsValid(code === predefinedCode && code.length === inputValues.length);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "ArrowRight" && index < inputValues.length - 1) {
      const nextInput = document.querySelectorAll("input")[
        index + 1
      ] as HTMLInputElement;
      nextInput.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      const prevInput = document.querySelectorAll("input")[
        index - 1
      ] as HTMLInputElement;
      prevInput.focus();
    } else if (e.key === "Backspace" && inputValues[index] === "") {
      if (index > 0) {
        const prevInput = document.querySelectorAll("input")[
          index - 1
        ] as HTMLInputElement;
        prevInput.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4).split(""); // Limita a 4 caracteres
    setInputValues(pastedData);
    // Actualiza la validez basado en el dato pegado
    setIsValid(
      pastedData.join("") === predefinedCode && pastedData.length === 4
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center text-white mb-8">
          Digita el código para verificación de tu cuenta
        </h1>

        <div className="flex flex-col items-center justify-center rounded-xl w-[355px] h-[309px] bg-customOrange py-4 px-8">
          <h2 className="text-white my-4 text-center">Aviso importante</h2>
          <h3 className="text-white my-4 text-center">
            Digita los 4 números que hemos enviado a tu correo electrónico
          </h3>

          <div className="flex justify-center space-x-2 mt-4 my-4">
            {inputValues.map((value, index) => (
              <input
                key={index}
                type="number"
                maxLength={1}
                className="w-10 h-10 border border-gray-300 rounded text-center"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                inputMode="numeric"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className={`mt-2 py-2 px-4 rounded-xl w-[200px] text-white ${
                isValid ? "bg-green-500" : "bg-gray-500 cursor-not-allowed"
              } transition-colors duration-300`}
              disabled={!isValid}
              onClick={() => {
                Swal.fire({
                  icon: "success",
                  title: "¡Cuenta verificada!",
                  showConfirmButton: false,
                  timer: 1500
                });
              }}
            >
              <span className="text-[15px]">Continuar</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
