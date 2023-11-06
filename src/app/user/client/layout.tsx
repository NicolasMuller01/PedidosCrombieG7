import ButtonStage from "@/app/Components/ButtonStage";
import NavClient from "@/app/Components/NavClient";

export default function layout({ children }) {
  return <div className="min-h-screen h-fit">
    <NavClient/>
    {children}
  </div>;
}
