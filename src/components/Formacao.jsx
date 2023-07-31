
import { PiCertificateBold } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";

import rocketseat from '../assets/rocketseat.svg';
// import estacio from '../assets/estacio.svg';

import theme from '../theme';

const cursos = [
    { instituicao: 'Microlins', curso: 'Montagem e Manutenção de Computadores e Rede', conclusao: '01/2012', logo: {} },
    { instituicao: 'Prime Cursos', curso: 'Manutenção de Notebooks', conclusao: '09/2017', logo: {} },
    { instituicao: 'CEDERJ ', curso: 'Curso em Formação EAD', conclusao: '07/2018', logo: {} },
    { instituicao: 'SENAI ', curso: 'LGPD Privacidade e Proteção de Dados', conclusao: '08/2021', logo: {} },
    { instituicao: 'RocketSeat', curso: 'Discover', conclusao: 'Cursando', logo: { rocketseat } },
    { instituicao: 'RocketSeat', curso: 'Iginite', conclusao: 'Cursando', logo: { rocketseat } },
]

export function Formacao() {
    return (
        <>
            <div id="formacao" className="bg-white shadow-lg rounded-xl mt-5">
                <h2 className="flex mytitle text-primary ml-3 pl-5 pt-5">  <PiStudentFill size={25} color={theme.colors.primary} className='mt-1 mr-1' />Formação</h2>
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-5 md:gap-y-16 px-4 py-6 md:max-w-7xl md:grid-cols-2 lg:px-8 ">

                    <div className='shadow-md bg-blue-100 border-blue-300 border-2 rounded-xl p-2 pl-5 text-left  '>
                        <div className="grid md:grid-cols-12">
                            <div className="md:col-span-1">
                                <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-2xl"><PiStudentFill size={25} color={theme.colors.primary} className='mt-1 mr-1' /></h2>
                            </div>
                            <div className="md:col-span-11">
                                <h2 className="text-xl font-bold tracking-tight text-primary"> Estácio de Sá</h2>
                                <h3 className="text-md font-bold tracking-tight text-primary">Graduação em Gestão Tecnologia da Informação</h3>
                                <br />
                                <p className='text-sm tracking-tight text-gray-500'>Conclusão: 11/2015</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md bg-blue-100 border-blue-300 border-2 rounded-xl p-2 pl-5 text-left '>
                        <div className="grid md:grid-cols-12">
                            <div className="md:col-span-1">
                                <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-2xl"><PiStudentFill size={25} color={theme.colors.primary} className='mt-1 mr-1' /></h2>
                            </div>
                            <div className="md:col-span-11">
                                <h2 className="text-xl font-bold tracking-tight text-primary">Lante UFF</h2>
                                <h3 className="text-md font-bold tracking-tight text-primary">Extensão em Tutoria em EAD: Teorias e
                                    Práticas na qualidade do aluno</h3>
                                <p className='text-sm tracking-tight text-gray-500'>Conclusão: 10/2019</p>
                            </div>

                        </div>
                    </div>
                </div>

                <h2 className="flex mytitle text-primary ml-3 px-5">  <PiCertificateBold size={25} color={theme.colors.primary} className='mt-1 mr-1' /> Cursos & Qualificações</h2>
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-6 gap-y-6 px-4 py-6 sm:px-12 lg:max-w-7xl lg:grid-cols-3 ">
                    {cursos.map((curso) => (
                        <div className='shadow-md bg-blue-100 border-blue-300 border-2 rounded-xl p-2 pl-5 text-left'>
                            <div className="grid md:grid-cols-12">
                                <div className="md:col-span-1">
                                    <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-2xl"><PiCertificateBold size={25} color={theme.colors.primary} className='mt-1 mr-1' /></h2>
                                </div>
                                <div className="md:col-span-11 ml-3 ">
                                    <h2 className="text-xl font-bold tracking-tight text-primary sm:text-1xl">{curso.instituicao}</h2>
                                    <h3 className="text-md font-bold tracking-tight text-primary sm:text-md">{curso.curso}</h3>
                                    {/* <br /> */}
                                    {curso.curso.length < 40 ? <br /> : ''}
                                    <p className='text-sm tracking-tight' > Conclusão: {curso.conclusao}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </>
    )
}