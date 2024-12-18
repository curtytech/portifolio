import print1 from "../assets/project1print1.png";
import { PiCertificateBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";

import theme from "../theme";

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const linegrid = (
  <div className="grid lg:grid-cols-9">
    <div className="col-span-3 ">
      <span className="invisible">a</span>
    </div>
    <div className="col-span-3 bg-primary w-2 mx-auto"></div>
    <div className="col-span-3 "></div>
  </div>
);

export function Experiencia() {
  return (
    <>
      <div
        id="experiencia"
        className="bg-white shadow-lg rounded-xl mt-5 mb-5 p-5 z-0"
      >
        <h2 className="flex mytitle text-primary ml-3 mb-5 ">
          {" "}
          <FaUserTie
            size={25}
            color={theme.colors.primary}
            className="mt-1 mr-1"
          />{" "}
          Experiência
        </h2>

        <div className="grid grid-cols-12 mb-7 md:mb-0">
          <div className="hidden md:col-span-5 md:block">
            <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-primary rounded-xl border-l-primary border-l-4 border-t-primary border-t-4">
              <div className="text-left pl-2 text-sm">
                <h3 className="font-bold">Desenvolvedor FullStack na Tridar</h3>
                <p>
                  <span className="font-bold">Início: </span> 01/10/2023{" "}
                  <span className="font-bold">Término: </span>Atualmente{" "}
                </p>
                <p>
                  <p>
                    {" "}
                    <span className="font-bold">Competências: </span>{" "}
                    Desenvolvimento de Sistemas Web - Dashboards - Relatórios Financeiras - Autenticação em dois fatores
                    Consumo e desenvolvimento de APIs - Upload e Plataformas de Cursos e Lives 
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">Tecnologias: </span> GO, JavaScript,
                    Typescript, Html, Css, NodeJS, NextJs, ReactJs, Laravel
                    Firebase - Firestore e MySQL
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">Atuação em time: </span>
                    Metodologia Ágil e SCRUM
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block">
            <div className="grid lg:grid-cols-9">
              <div className="md:col-span-3 "></div>
              <div className="md:col-span-3 bg-primary rounded-full text-white hidden md:block">
                {anoAtual}
              </div>
              <div className="md:col-span-3 "></div>
            </div>
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            <div className="grid lg:grid-cols-9 ">
              <div className="md:col-span-3 "></div>
              <div className="md:col-span-3 "></div>
              <div className="md:col-span-3 "></div>
            </div>
          </div>
          <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-primary rounded-xl border-r-primary border-r-4 border-t-primary border-t-4">
            <div className="text-right pl-2 text-sm">
              <h3 className="font-bold">Analista de Sistemas na A4PM</h3>
              <p>
                <span className="font-bold">Início: </span> 18/12/2023{" "}
                <span className="font-bold">Término: </span>20/06/2024{" "}
              </p>
              <p>
                <p>
                  {" "}
                  <span className="font-bold">Competências: </span>{" "}
                  Desenvolvimento de Sistemas Web e Mobile - Vídeo Chamadas -
                  Notificações por Email SMS e Push - Criação de dados em lote{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Tecnologias: </span> JavaScript,
                  Typescript, Html, Css, NodeJS, Vue.js, React Native, Firebase
                  - Firestore e MySQL{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Atuação em time: </span>
                  Metodologia Ágil e SCRUM{" "}
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-7 md:mb-0">
          <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-primary rounded-xl border-l-primary border-l-4 border-t-primary border-t-4">
            <div className="text-left pl-2 text-sm">
              <h3 className="font-bold">
                Analista de Sistemas no Instituto de Desenvolvimento e Pesquisa
              </h3>
              <p>
                <span className="font-bold">Início: </span> 07/01/2020{" "}
                <span className="font-bold">Término: </span>30/06/2023{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Desenvolvimento de Sistemas Web e Mobile - Suporte e Gestão dos
                sistemas – Instalação e Backup de Servidores Linux - Apache
                <p>
                  {" "}
                  <span className="font-bold">Tecnologias: </span> JavaScript,
                  Typescript, Html, Css, NodeJS, React Native, Prisma e
                  PostgreSQL{" "}
                </p>
              </p>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block">
            <div className="grid lg:grid-cols-9">
              <div className="md:col-span-3 "></div>
              <div className="md:col-span-3 bg-primary rounded-full  text-white hidden md:block">
                <h1>2023</h1>
              </div>
              <div className="md:col-span-3 "></div>
            </div>
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            <div className="grid lg:grid-cols-9 ">
              <div className="md:col-span-3 "></div>
              <div className="md:col-span-3 bg-primary rounded-full  text-white hidden md:block">
                <h1>2020</h1>
              </div>
              <div className="md:col-span-3 "></div>
            </div>
          </div>
          <div className="hidden md:col-span-5"></div>
        </div>
        <div className="grid grid-cols-12 mb-7 md:mb-0">
          <div className="hidden md:col-span-5 md:block"></div>
          <div className="hidden md:col-span-2 md:block">
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            <div className="grid lg:grid-cols-9 ">
              <div className="col-span-3 "></div>
              <div className="col-span-3 bg-primary rounded-full  text-white hidden md:block">
                <h1>2018</h1>
              </div>
              <div className="col-span-3 "></div>
            </div>
          </div>

          <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-primary rounded-xl border-r-primary border-r-4 border-t-primary border-t-4">
            <div className="text-right pl-2 text-sm">
              <h3 className="font-bold">
                Tutor de Informática na Universidade CEDERJ Polo Magé
              </h3>
              <p>
                <span className="font-bold">Início: </span> 02/01/2018{" "}
                <span className="font-bold">Término: </span>Atualmente{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Tutorias sobre: Linux - Ubuntu; LibreOffice; Conceitos de
                Internet, Intranet e Extranet; Conceitos de Computação em nuvem;
                Conceitos de Web 2.0;
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-7 md:mb-0">
          <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-blue-400 rounded-xl border-l-primary border-l-4 border-t-primary border-t-4">
            <div className="text-left pl-2 text-sm">
              <h3 className="font-bold">
                Técnico em TI na Secretaria de Educação de Magé
              </h3>
              <p>
                <span className="font-bold">Início: </span> 03/01/2017{" "}
                <span className="font-bold">Término: </span>05/01/2020{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Desenvolvimento e Implatação de Sistemas Gerenciamento e
                Manutenção de Servidores - Criação de Sites e Sistemas - Banco
                de dados MySQL - Gestão de sistemas - Administração de Sistemas
                Linux & Terminal Manutenção de Computadores, Notebooks e Rede -
                Design de Imagens e Vídeos
              </p>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block">
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            <div className="grid lg:grid-cols-9 ">
              <div className="col-span-3 "></div>
              <div className="col-span-3 bg-primary rounded-full  text-white hidden md:block">
                <h1>2017</h1>
              </div>
              <div className="col-span-3 "></div>
            </div>
          </div>
          <div className="hidden md:col-span-5 md:block"></div>
        </div>
        <div className="grid grid-cols-12 mb-7 md:mb-0">
          <div className="hidden md:col-span-5 md:block"></div>
          <div className="hidden md:col-span-2 md:block">
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            <div className="grid lg:grid-cols-9 ">
              <div className="col-span-3 "></div>
              <div className="col-span-3 bg-primary rounded-full  text-white hidden md:block">
                <h1>2012</h1>
              </div>
              <div className="col-span-3 "></div>
            </div>
          </div>

          <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-primary rounded-xl border-r-primary border-r-4 border-t-primary border-t-4">
            <div className="text-right pl-2 text-sm">
              <h3 className="font-bold">
                Consultor de Vendas Externo na Empresa Cix Distribuidora
              </h3>
              <p>
                <span className="font-bold">Início: </span> 02/07/2012{" "}
                <span className="font-bold">Término: </span>30/08/2015{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Vendas; Relacionamento com cliente; Administração de Sistemas de
                Vendas; Merchandising e Marketing
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="md:col-span-5 col-span-12 p-2 mx-5 shadow-lg shadow-primary rounded-xl border-l-primary border-l-4 border-t-primary border-t-4">
            <div className="text-left pl-2 text-sm">
              <h3 className="font-bold">Tele Cobrança nas Lojas Nalin</h3>
              <p>
                <span className="font-bold">Início: </span> 05/01/2011{" "}
                <span className="font-bold">Término: </span>05/01/2012{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Cobrança de Faturas; TeleMarketing; SAC; Gerenciamento e uso de
                Sistemas;{" "}
              </p>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block">
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            {linegrid}
            <div className="grid lg:grid-cols-9 ">
              <div className="col-span-3 "></div>
              <div className="col-span-3 bg-primary rounded-full  text-white hidden md:block">
                <h1>2011</h1>
              </div>
              <div className="col-span-3 "></div>
            </div>
          </div>
          <div className="hidden md:col-span-5 md:block"></div>
        </div>

        <h2 className="flex mytitle text-primary ml-3 mb-5 mt-10">
          {" "}
          <RiUser2Fill
            size={25}
            color={theme.colors.primary}
            className="mt-1 mr-1"
          />{" "}
          Experiências Complementares
        </h2>

        <div className="grid  grid-cols-1 md:grid-cols-12">
          <div className="col-span-4 p-2 mb-5 shadow-lg shadow-primary rounded-xl mx-5 border-l-primary border-l-4 border-t-primary border-t-4">
            <div className="text-left pl-2 text-sm  ">
              <h3 className="font-bold">
                Professor de Informática no Projeto Caravana na Universidade
                UNIRIO
              </h3>
              <p>
                <span className="font-bold">Início: </span> 01/12/18{" "}
                <span className="font-bold">Término: </span>14/02/19{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Aulas de Informática Básica com nível de cursos técnicos
              </p>
            </div>
          </div>
          <div className="col-span-4 p-2 mb-5 shadow-lg shadow-primary rounded-xl mx-5  border-t-primary border-t-4">
            <div className="text-left pl-2 text-sm  ">
              <h3 className="font-bold">
                Professor de Manutenção de Dispositivos Móveis, Computadores e
                Rede na Microlins
              </h3>
              <p>
                <span className="font-bold">Início: </span> 27/01/19{" "}
                <span className="font-bold">Término: </span>20/03/20{" "}
              </p>
              <p>
                <span className="font-bold">Competências: </span>
                Aulas de Manutenção de Dispositivos Móveis como disciplinas de
                Hardware, Software e Eletrônica. Montagem e manutenção de
                computadores notebooks e rede
              </p>
            </div>
          </div>
          <div className="col-span-4 p-2 mb-5 shadow-lg shadow-primary rounded-xl mx-5 border-r-primary border-r-4 border-t-primary border-t-4">
            <div className="text-left pl-2 text-sm  ">
              <h3 className="font-bold">Projetos Proprios ou Particulares</h3>
              <span className="font-bold"> </span>
              <p> Desenvolvimento de Sistema de Gestão e Vendas: Laravel </p>
              <p>
                {" "}
                Desenvolvimento de Sistema Sistema de Gestão, Vendas e Estoque:
                PHP – SQL – HTML – CSS – Java Script (JQuery) – Bootstrap{" "}
              </p>
              <p>
                {" "}
                Instalação e configuração de Ubuntu Server: Apache - PHP –
                PostgreSQL - MySQL{" "}
              </p>
              <p> Manutenção de Sistemas Operacionais: Windows, Ubuntu, Mac </p>
              <p>
                {" "}
                Desenvolvimento de Sistema de Educação: PHP, SQL, HTML, CSS,
                Java Script(JQuery), Bootstrap App Mobile Educação: JavaScript,
                TypeScript, React Native, Native Base, Water Melon DB. API
                Educação: Node JS, Express, ORM Prisma
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
