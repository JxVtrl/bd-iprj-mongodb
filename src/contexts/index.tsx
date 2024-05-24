"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  cpf?: string;
};

interface ContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);


  const getRotas = async () => {
    const url = `/api/rotas/all`;
    const res = await axios.get(url);
    // setRotas(res.data);
  };

  
  const handleCheckout = async () => {

    try {
      const response = await fetch("/api/ticket/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // user,
          // quantidadeDePassageiros: passengersInfo.length,
          // rota: selectedRoute,
          // precoTotal: selectedRoute?.value || 100 * passengersInfo.length,
          // passageiros: passengersInfo.map((passengerInfo) => {
          //   return {
          //     nome: passengerInfo.passenger.name,
          //     cpf: passengerInfo.passenger.cpf,
          //     seat: passengerInfo.seat,
          //   };
          // }),
        }),
      });
      const status = response.status;

      if (status !== 200) throw new Error('Erro ao realizar compra')
      
      // await axios.post("/api/send-email", {
      //   email: user?.email,
      // }, {
      //   headers: {
      //     "Content-Type": "application/json",

      //   },
      //   method: "POST"

      // }).then(() => {
      //   alert("Email enviado com sucesso!")
      // }).catch(() => {
      //   alert("Erro ao enviar email")
      // })

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRotas()
    // fetchRotas();
  }, []);

  const value = {
    user,
    setUser,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
