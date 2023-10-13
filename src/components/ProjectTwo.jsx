import print1 from '../assets/project1print1.png'
import { BsCodeSlash } from "react-icons/bs";
import theme from '../theme';
import { Link } from 'react-router-dom';

const features = [
    { name: 'Tecnologias', description: 'React Native, ' },
    { name: 'Banco de Dados', description: 'Async Storage' },
    { name: 'Design', description: 'Tail Wind CSS, React Native' },
]

export function ProjectTwo() {
    return (
        <div id="projetos" className="bg-white shadow-lg rounded-xl ">
            
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-6 sm:px-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div className=''>
                    <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">Meta do Dia</h2>
                    <p className="mt-4 text-gray-500">
                        Com o Meta do Dia, cada dia se torna uma oportunidade para superar desafios e alcançar o sucesso. Seja na vida profissional ou pessoal, este aplicativo é o seu aliado para transformar metas em realidade.
                        Cadastre suas metas e escolha os melhores horários para receber notificações.
                    </p>

                    <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-primary pt-3">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                        <div className="border-t border-primary pt-3">
                            <dt className="font-medium text-gray-900">Use agora mesmo</dt>
                            <a target='blank' href="https://play.google.com/store/apps/details?id=com.phelipecurty.metadodia"> <dd className="mt-2 text-sm text-white bg-primary p-1 rounded-xl">PlayStore</dd> </a>
                            <a target='blank' href='https://curtytech.github.io/politicasDePrivacidade/'> <dd className="mt-2 text-sm text-white bg-primary p-1 rounded-xl ">Termo de Serviço</dd> </a>
                        </div>
                    </dl>
                </div>
              
            </div>
        </div>
    )
}
