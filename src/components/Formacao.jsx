
import print1 from '../assets/project1print1.png'
import { PiCertificateBold } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidBadgeCheck } from "react-icons/bi";

import rocketseat from '../assets/rocketseat.svg';
import estacio from '../assets/estacio.svg';

import theme from '../theme';

const cursos = [
    { instituicao: 'Microlins', curso: 'Montagem e Manutenção de Computadores e Rede', conclusao: '01/12', logo: {} },
    { instituicao: 'Prime Cursos', curso: 'Manutenção de Notebooks', conclusao: '09/17', logo: {} },
    { instituicao: 'CEDERJ ', curso: 'Curso em Formação EAD', conclusao: '07/18', logo: {} },
    { instituicao: 'SENAI ', curso: 'LGPD PRIVACIDADE E PROTEÇÃO DE DADOS', conclusao: '08/21', logo: {} },
    { instituicao: 'RocketSeat', curso: 'Discover', conclusao: 'Cursando', logo: { rocketseat } },
    { instituicao: 'RocketSeat', curso: 'Iginite', conclusao: 'Cursando', logo: { rocketseat } },
]

export function Formacao() {
    return (
        <>
            <div id="formacao" className="bg-white shadow-lg rounded-xl mt-5">
                <h2 className="flex mytitle text-primary ml-3 p-5">  <PiStudentFill size={25} color={theme.colors.primary} className='mt-1 mr-1' /> Formação</h2>
                <div className="mx-auto grid max-w-2xl grid-cols-3 items-center gap-x-8 gap-y-16 px-4 py-6 sm:px-12 lg:max-w-7xl lg:grid-cols-3 lg:px-8 ">
                    <div className=''>
                        {/* <img className='mx-auto' src={estacio} alt={'logo'} /> */}
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Estácio de Sá</h2>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-lg">Graduação em Gestão Tecnologia da Informação</h3>
                        {/* <div className='grid grid-cols-3'> */}
                            {/* <span></span> */}
                            <p className='tracking-tight mx-auto'>Conclusão: 11/15</p>
                            {/* <BiSolidBadgeCheck size={25} color={theme.colors.primary} className='ml-20' /> */}
                        {/* </div> */}
                    </div>
                    <div className=''>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Lante UFF</h2>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-lg">Extensão – Tutoria em EAD: Teorias e
                            Práticas na qualidade do aluno</h3>
                        <p>Conclusão: 10/2019</p>
                    </div>

                </div>

                <h2 className="flex mytitle text-primary ml-3 px-5">  <PiCertificateBold size={25} color={theme.colors.primary} className='mt-1 mr-1' /> Cursos & Qualificações</h2>
                <div className="mx-auto grid max-w-2xl grid-cols-3 items-center gap-x-6 gap-y-6 px-4 py-6 sm:px-12 lg:max-w-7xl lg:grid-cols-3 ">
                    {cursos.map((curso) => (
                        <div className=''>
                            {/* <img className='mx-auto' src={estacio} alt={'logo'} /> */}
                            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-1xl">{curso.instituicao}</h2>
                            <h3 className="text-md font-bold tracking-tight text-gray-900 sm:text-md">{curso.curso}</h3>
                            <p className='text-md tracking-tight' > Conclusão: {curso.conclusao}</p>
                        </div>
                    ))}

                </div>


            </div>
        </>
    )
}