"use client";

import React, { useState } from "react";
import SelectInputProvincia from "../FormDirection/SelectInputProvincia";
import SelectInputCiudades from "../FormDirection/SelectFormCiudades";
import { getOrdersFromCity } from "@/app/hooks/getOrdersByCity";

const InputFindCity = ({ handleData }) => {
  const [provincia, setProvincia] = useState({ provincia: "MISIONES", id: 54 });
  const [ciudad, setCiudad] = useState("APOSTOLES");

  function handleSelectChangeProvincia(value: any) {
    setProvincia(value);
  }

  function handleSelectChangeCiudad(value: string) {
    setCiudad(value);
  }

  const filtrarporciudad = async () => {
    const ciudadNormalizada = ciudad
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s/g, "")
      .toUpperCase();
    const provNormalizada = provincia.provincia
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s/g, "")
      .toUpperCase();

    const data = await getOrdersFromCity(provNormalizada, ciudadNormalizada);

    handleData(data);
  };

  return (
    <div>
      <SelectInputProvincia onSelectChange={handleSelectChangeProvincia} />

      <SelectInputCiudades
        onSelectChangeCiudad={handleSelectChangeCiudad}
        id={provincia.id}
      />
      <button className="btn btn-primary" onClick={filtrarporciudad}>
        Buscar pedidos
      </button>
    </div>
  );
};

export default InputFindCity;
