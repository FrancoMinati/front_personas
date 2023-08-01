import { AddOrUpdatePersona } from "../components/ABM/AddOrUpdate/AddOrUpdatePersona";
import { DetallePersona } from "../components/ABM/Detalles/DetallePersona";
import { PersonasABM } from "../components/ABM/Table/PersonasABM";
import { MainView } from "../views/Main";

export const staticRoutes = [
  { name: "Inicio", path: "/", element: <MainView /> },
  { name: "Personas", path: "ABM/Personas", element: <PersonasABM /> },
];
export const dinamicRoutes = [
  {
    path: "ABM/Personas/:id",
    element: <DetallePersona />,
  },
  {
    path: "ABM/Personas/newRegister",
    element: <AddOrUpdatePersona />,
  },
  {
    path: "ABM/Personas/edit/:id",
    element: <AddOrUpdatePersona />,
  },
];

export const AllRoutes = [...staticRoutes, ...dinamicRoutes];
