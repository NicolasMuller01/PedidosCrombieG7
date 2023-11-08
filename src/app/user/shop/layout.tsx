import ButtonStage from "@/app/Components/ButtonStage";
import NavLocal from "@/app/Components/NavLocal";

export default function layout({ children }:{children: any}) {
  return <div className="min-h-screen h-fit">
    <ButtonStage/>
    <NavLocal/>
    {children}
  </div>;
}
