import NavGeneral from "../Components/NavGeneral";

export default function layout({ children }) {
  return <div className="min-h-screen h-fit">
    <NavGeneral/>
    {children}
  </div>;
}
