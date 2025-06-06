import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import MyImage from "../assets/IProf.png";
import theme from "../theme";
import { FaAddressCard } from "react-icons/fa";

export function SobreMim() {
  return (
    <div
      id="sobremim"
      className="mt-4 max-w-7xl mx-auto sm:px-6 lg:px-8 shadow-lg rounded-xl bg-white flex flex-row"
    >
      <div className="flex flex-col items-center justify-center basis-4/4 md:basis-1/4 rounded-xl p-3 ">
        <img
          src={MyImage}
          alt="Logo"
          className=" w-48 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-125 hover:mb-5 "
        />

        <h3 className="mt-1 font-bold text-xl text-primary">Phelipe Curty</h3>
        <p className="mt-1 text-gray-400">Desenvolvedor FullStack & Mobile</p>
        <p className="mt-1 text-gray-400">phelipecurty@gmail.com</p>

        <div className="flex items-center justify-between mx-7 mt-3">
          <a target="_blank" href="https://github.com/curtytech">
            {" "}
            <AiFillGithub size={25} color="black" />{" "}
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/phelipe-curty-810435b8/"
          >
            {" "}
            <AiFillLinkedin size={25} color={theme.colors.linkedin} />{" "}
          </a>
          <a target="_blank" href="https://www.instagram.com/phelipecurty/">
            {" "}
            <AiFillInstagram size={25} color={theme.colors.instagram} />{" "}
          </a>
          <a target="_blank" href="https://www.facebook.com/phelipe.curty">
            <AiFillFacebook size={25} color={theme.colors.facebook} />{" "}
          </a>
        </div>
      </div>

      <div className="ml-5 basis-3/4 rounded-xl bg-white p-5 hidden md:block ">
        <h2 className="flex mytitle text-primary">
          {" "}
          <FaAddressCard
            size={25}
            className="mt-1 mr-2"
            color={theme.colors.primary}
          />{" "}
          Sobre mim
        </h2>
        <p className="mt-1 text-sm leading-6  sm:col-span-2 justify-center ">
          Sou um desenvolvedor FullStack e Mobile com experiência em várias
          áreas da tecnologia. Tenho habilidades em Javascript, Typescript,
          React Native, NodeJs, Prisma, e PHP. Trabalhei como desenvolvedor web,
          onde fui responsável pelo desenvolvimento de sites e sistemas web
          utilizando tecnologias como PHP, HTML, CSS, Javascript, Bootstrap,
          Jquery, Code Igniter e PostgresSQL. Além disso, também tive a
          responsabilidades de oferecer suporte técnico para sistemas web,
          desenvolver sites criar manuais e documentar sistemas. Como tutor de
          informática, tenho experiência em fornecer conhecimentos sobre Linux
          (Ubuntu), LibreOffice, conceitos de internet, intranet e extranet,
          computação em nuvem e web 2.0 em diante. Também ensinei em cursos
          técnicos de manutenção de computadores e dispositivos móveis mas que
          não forneceram vinculo empregatício. Anteriormente, trabalhei como
          técnico de suporte de informática, onde lidava com a manutenção de
          computadores, administração de redes, gerenciamento de bancos de dados
          PostgreSQL e implantação de sistemas de informação em ambientes Linux
          e Windows. Em resumo, possuo experiência sólida como desenvolvedor e
          áreas distintas do TI como design, manutenção, e redes. Além disso,
          tenho conhecimentos em várias tecnologias e linguagens de programação,
          incluindo Javascript, Typescript, HTML, CSS e SQL, PHP, C#, Python,
          Kotlin. Também tenho muita experiência como tutor de na área
          informática. Além disso, minha experiência em vendas me proporcionou
          boa comunicação e facilidade em resolver problemas.
        </p>
      </div>
    </div>
  );
}
