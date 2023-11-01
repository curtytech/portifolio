import cliqueiprint from '../assets/cliqueiprint.png'
// import  DefaultCarousel from './Carousel';

const features = [
    { name: 'Tecnologias', description: 'Code Igniter 4' },
    { name: 'Banco de Dados', description: 'MySql' },
    { name: 'Design', description: 'Tail Wind CSS' },
]

export function ProjectThree() {
    return (
        <div id="projetos" className="bg-white shadow-lg rounded-xl pb-2">
                <a target='blank' href="http://cliquei.tech"> 

                    <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">Cliquei.tech</h2>
                    </a>
                    <p className="mt-4 text-gray-500 px-5">
             Transforme seus URLs longos e complicados em links amigáveis e memoráveis com o cliquei.tech! Nosso serviço oferece um redirecionamento simples e eficiente, proporcionando uma experiência mais agradável para seus usuários. Simplifique a forma como você compartilha seus links e impulsione sua presença online com o cliquei.tech!                    </p>
             <div className="columns-3 px-10 mt-5">
             {features.map((feature) => (

                <div  key={feature.name} className='grid grid-cols-1 '>
                    <div className='border-t border-primary'>
                        <h2 className="font-medium text-gray-900 mt-3">{feature.name}</h2>
                        <h2 className="mt-2 text-sm text-gray-500">{feature.description}</h2>
                    </div>
                </div>
                ))}

                </div>
                <a target='blank' href="http://cliquei.tech"> 
               

             <img       src={cliqueiprint}
                        alt="print1"
                        className="rounded-lg border-4 object-contain md:m-5 "
                    />
                    </a>
          
            
        </div>
    )
}
