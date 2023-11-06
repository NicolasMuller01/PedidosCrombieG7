'use client'

import { useEffect, useState } from 'react';

interface Municipio {
    id: string;
    nombre: string;
  }

  export default function SelectInputCiudades({ onSelectChangeCiudad, id }:{ onSelectChangeCiudad: any , id:string}) {
    const [ciudades, setCiudades] = useState<Municipio[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${id}&campos=nombre&max=1000`);
        const json = await response.json();
        const municipios = json.localidades;
        setCiudades(municipios);
      }
      fetchData();
    }, [id]);
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onSelectChangeCiudad(event.target.value);
    };
  
    return (
      <div className="w-full">
        <div className="mb-2 block">
          <label htmlFor="">Seleccione su ciudad</label>
        </div>
        <select
          className='select select-primary w-full'
          id="provincia"
          required
          onChange={handleChange}
        >
          {ciudades ? (
            ciudades.map((c) => (
              <option value={c.nombre} key={c.id}>
                {c.nombre}
              </option>
            ))
          ) : (
            <option>Cargando...</option>
          )}
        </select>
      </div>
    );
  }