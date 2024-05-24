"use client";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export const format_date = (date: string) => {
  if (!date) return "";
  if (date.includes("T")) {
    const dateSplit = date.split("T")[0].split("-");
    const day = dateSplit[2];
    const month = dateSplit[1];
    const year = dateSplit[0];

    return `${day}/${month}/${year}`;
  }

  const dateSplit = date.split("/");

  const day = dateSplit[0].toString().padStart(2, "0");
  const month = dateSplit[1].toString().padStart(2, "0");
  const year = dateSplit[2];

  return `${day}/${month}/${year}`;
};

export const format_hour = (hour: string) => {
  if (!hour) return "";

  const hourSplit = hour.split(":");

  const hourNew = hourSplit[0].toString().padStart(2, "0");
  const minute = hourSplit[1].toString().padStart(2, "0");

  return `${hourNew}:${minute}`;
};

export const random_boolean = () => {
  return Math.random() < 0.5;
};

export const generate_user = () => {
  const user = {
    id: faker.string.uuid(),
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    telefone: faker.phone.number(),
    data_nascimento: faker.date.birthdate(),
    senha: faker.internet.password(),
  };

  return user;
};

export const gerarvalue = (min = 0, max = 1000) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const validateCpf = (cpf: string) => {
  let firstDigit = 0;
  let secondDigit = 0;

  //   Declarando um array vazio para os cpf's
  let cpf_array = [];

  //   Verificando se o cpf possui pontos e hífen, e caso tenha substituindo-os por nada
  for (let i = 0; i < cpf.length; i++) {
    if (cpf[i] == "." || cpf[i] == "-") {
      cpf = cpf.replace(cpf[i], "");
    }

    // Cálculo do primeiro dígito
    let sum = 0;
    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);

    let rest = sum % 11;

    if (rest < 2) {
      firstDigit = 0;
    } else {
      firstDigit = 11 - rest;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);

    rest = sum % 11;

    if (rest < 2) {
      secondDigit = 0;
    } else {
      secondDigit = 11 - rest;
    }
  }

  let cpf_verified = cpf.substring(0, 9) + firstDigit + secondDigit;

  cpf_array.push(cpf);
  cpf_array.push(cpf_verified);

  if (cpf_array[0] !== cpf_array[1]) {
    return false;
  }
  return true;
};

export const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // empty
  return width;
};

