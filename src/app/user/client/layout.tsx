import ButtonStage from "@/app/Components/ButtonStage";
import ButtonStageClient from "@/app/Components/ButtonStageClient";
import NavClient from "@/app/Components/NavClient";

export default function layout({ children } : {children: any}) {
  return <div className="min-h-screen h-fit">
    <NavClient/>
    <ButtonStageClient/>
    {children}
  </div>;
}
