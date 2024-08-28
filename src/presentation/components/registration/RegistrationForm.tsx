import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchUsers } from "../../redux/slices/user/thunks";
import { Input } from "../../components/input";

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [registerProps, setRegisterProps] = useState({
    name: "",
    lastName: "",
    email: ""
  });

  const handleRegister = () => {
    dispatch(
      fetchUsers(
        registerProps.name,
        registerProps.lastName,
        registerProps.email
      )
    );
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Nombre"
        value={registerProps.name}
        onChange={(e) =>
          setRegisterProps({ ...registerProps, name: e.target.value })
        }
      />
      <Input
        type="text"
        placeholder="Apellido"
        value={registerProps.lastName}
        onChange={(e) =>
          setRegisterProps({ ...registerProps, lastName: e.target.value })
        }
      />
      <Input
        type="text"
        placeholder="Correo Electronico"
        value={registerProps.email}
        onChange={(e) =>
          setRegisterProps({ ...registerProps, email: e.target.value })
        }
      />
      <button
        className="bg-white w-80 rounded-xl h-9 mt-6 hover:bg-red-700"
        onClick={handleRegister}
      >
        Registrar
      </button>
    </>
  );
};
