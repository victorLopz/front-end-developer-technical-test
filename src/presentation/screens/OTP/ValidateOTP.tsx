import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RegistrationForm } from "../../components/registration/RegistrationForm";
import OTPVerification from "../../components/otp/OTPInput";
import { fetchCode } from "../../redux/slices/user/thunks";

export const ValidateOTP = () => {
  const dispatch = useAppDispatch();
  const { isCreatedUser } = useAppSelector((state) => state.users);

  const [userRegistered, setUserRegistered] = useState(false);

  const [timeToResendCode, setTimeToResendCode] = useState(0);

  const code = useAppSelector((state) => state.users.code);
  console.log(code);

  useEffect(() => {
    if (isCreatedUser) {
      setUserRegistered(true);
    }
  }, [isCreatedUser]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeToResendCode > 0) {
      interval = setInterval(() => {
        setTimeToResendCode(timeToResendCode - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeToResendCode]);

  const onResendOtpCode = () => {
    if (timeToResendCode === 0) {
      setTimeToResendCode(60);
    }
  };

  useEffect(() => {
    dispatch(fetchCode("example@example.com"));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {userRegistered ? (
        <OTPVerification
          onResendOtpCode={onResendOtpCode}
          predefinedCode={code}
        />
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
};
