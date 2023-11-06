export default function RegisterSelectInputLocalCategory({ onSelectChange }: { onSelectChange: any }) {

  const handleChange = (e: any) => {    

    if(e.target.value === "Rostisceria"){
      onSelectChange('DELICATESSEN')
    }
    else if(e.target.value === "Mercado"){
      onSelectChange('MARKET')
    }
    else if(e.target.value === "Panaderia"){
      onSelectChange('BAKERY')
    }
    else if(e.target.value === "Pasteleria"){
      onSelectChange('PASTRYSHOP')
    }
    else if(e.target.value === "Heladeria"){
      onSelectChange('GELATERIA')
    }
    else if(e.target.value === "Supermercado"){
      onSelectChange('GROCERY')
    }else{
      onSelectChange('RESTAURANT')
    }
  }

  return (
    <div className="w-full">
      <div className="block">
        <label>Ingrese el tipo de negocio</label>
      </div>
      <select className="select select-primary w-full" onChange={handleChange}>
        <option>Restaurante</option>
        <option>Mercado</option>
        <option>Panaderia</option>
        <option>Pasteleria</option>
        <option>Heladeria</option>
        <option>Supermercado</option>
        <option>Rostisceria</option>
      </select>
    </div>
  )
}


