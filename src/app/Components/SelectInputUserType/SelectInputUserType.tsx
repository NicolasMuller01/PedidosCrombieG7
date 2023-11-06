export default function SelectInputUserType({ onSelectChange, title }: { onSelectChange: any, title: string }) {

    const handleChange = (event: any) => {
      if(event.target.value == "Cliente"){
        return onSelectChange("CLIENT")
      }else if(event.target.value == "Negocio"){
        return onSelectChange("LOCAL")
      }else if(event.target.value == "Repartidor"){
        return onSelectChange("DELIVERY")
      }
    };
    
    return (
      <div className="w-full">
        <div className="mb-2 block">
          <label htmlFor="">{title}</label>
        </div>
        <select
          className="select select-primary w-full"
          required
          onChange={handleChange}
        >
          <option>
            Cliente
          </option>
          <option>
            Negocio
          </option>
          <option>
            Repartidor
          </option>
        </select>
      </div>
    )
  }
  
  
  