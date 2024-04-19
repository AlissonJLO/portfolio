import React from "react";
import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
}

const experiencias: Experiencia[] = [
  {
    empresa: "Infocorp (Empresa junior da UFMT)",
    cargo: "Desenvolvedor Frontend",
    periodo: "2022 - Atualmente",
    descricao: "Deselvovi aplicatições web com React,Typescript e tailwind.",
  },
];
export default function Perfil(): React.JSX.Element {
  return (
    <div className="flex flex-col space-y-3  md:w-1/3 ">
      <div className="flex items-center space-x-2">
        <Avatar src="/asas.jfif" className="w-20 h-20" />
        <h1 className="font-bold text-xl">Alisson Joaquim</h1>
      </div>
      <div>
        <h1 className=" text-lg">Especialização</h1>
        <p className="text-base">
          Javascript/Typescript, React, HTML/CSS, Tailwind.
        </p>
      </div>
      <div className="py-2">
        <div className="flex space-x-2 justify-center md:justify-normal ">
          <Link
            href="https://github.com/AlissonJLO?tab=repositories"
            isExternal={true}
          >
            <Button
              variant="bordered"
              startContent={
                <Image
                  src="/icon-github.svg"
                  width={30}
                  height={30}
                  alt="icone do github"
                />
              }
            >
              Repositorios
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/alisson-joaquim-27aa92251"
            isExternal={true}
          >
            <Button
              variant="bordered"
              startContent={
                <Image
                  src="/icon-linkedin.svg"
                  width={30}
                  height={30}
                  alt="Icone do Linkedim"
                />
              }
            >
              Linkedim
            </Button>
          </Link>
          <Link href="https://wa.me/65996035266" isExternal={true}>
            <Button
              variant="bordered"
              startContent={
                <Image
                  src="/icons-whatsapp.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              }
            >
              Contato
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-2">
        <h2 className="font-bold text-xl mb-2">Experiência</h2>
        {experiencias.map((experiencia, index) => {
          return (
            <div
              key={index}
              className="space-y-1 rounded-lg p-2 ring-black ring-1"
            >
              <h3 className="text-lg font-semibold">
                {experiencia.cargo} - {experiencia.empresa}
              </h3>
              <p className="text-gray-600">{experiencia.periodo}</p>
              <p className="text-gray-500 text-sm">{experiencia.descricao}</p>
            </div>
          );
        })}
      </div>
      <Link href="/Currículo Front-end-Alisson Joaquim.pdf" download>
        <Button variant="bordered">Baixar currículo</Button>
      </Link>
    </div>
  );
}
