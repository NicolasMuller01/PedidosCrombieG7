import NavRepartidor from "@/app/Components/NavRepartidor";


export default function layout({ children }) {
  return <div className="min-h-screen h-fit">
    <NavRepartidor/>
    {children}
  </div>;
}
