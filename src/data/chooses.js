import IconRg from "../assets/Doc/IconRG.png";
import IconCNH from "../assets/Doc/IconCNH.png";

import { rg } from "./rg";
import { cnh } from "./cnh";

export const chooses = [
  {
    title: "USAR MEU RG",
    resource: IconRg,
    document: { title: "Escolha como quer enviar o Seu RG", value: rg },
  },
  {
    title: "USAR MINHA CNH",
    resource: IconCNH,
    document: { title: "Escolha como quer enviar a sua CNH", value: cnh },
  },
];
