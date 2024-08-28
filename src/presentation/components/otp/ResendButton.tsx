import React, { useEffect, useState } from "react";

interface ResendButtonProps {
  onResend: () => void;
}

export const ResendButton: React.FC<ResendButtonProps> = ({ onResend }) => {
  const [timeToResendCode, setTimeToResendCode] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeToResendCode > 0) {
      interval = setInterval(() => {
        setTimeToResendCode((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeToResendCode]);

  const handleClick = () => {
    setTimeToResendCode(60);
    onResend();
  };

  return timeToResendCode === 0 ? (
    <button className="px-4 text-white mt-4" onClick={handleClick}>
      <span className="text-[15px]">Reenviar código</span>
    </button>
  ) : (
    <p className="text-white text-[12px] mt-4">00:{timeToResendCode}</p>
  );
};
