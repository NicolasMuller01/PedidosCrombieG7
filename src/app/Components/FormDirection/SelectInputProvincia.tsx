'use client'

import { useEffect, useState } from 'react';

interface Provincia {
  centroide: {
    lat: number;
    lon: number;
  };
  id: string;
  nombre: string;
}

type Props = {
  onSelectChange: any;
};

export default function SelectInputProvincia({ onSelectChange }: Props) {
  const [provincias, setProvincias] = useState<Provincia[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
      const json = await response.json();
      const provincias = json.provincias;
      setProvincias(provincias);
    }
    fetchData();
  }, []);

  const handleChange = (event: { target: { value: string; }; }) => {
    event.target.value == "" ? "MISIONES" : onSelectChange({ provincia: event.target.value , id: provincias.filter(n => n.nombre === event.target.value)[0].id});
  };
  
  return (
    <div className="w-full">
      <div className="mb-2 block">
       <label htmlFor="">Seleccione su provincia</label>
      </div>
      <select
        className='select select-primary w-full'
        id="provincia"
        required
        onChange={handleChange}
      >
       
        {provincias ? (
          provincias.map((provincia) => (
            <option value={provincia.nombre} key={provincia.id}>{provincia.nombre}</option>
          ))
        ) : (
          <option>Cargando...</option>
        )}
      </select>
    </div>
  )
}