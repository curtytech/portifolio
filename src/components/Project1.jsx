import print1 from '../assets/project1print1.png'
import { BsCodeSlash } from "react-icons/bs";
import theme from '../theme';

const features = [
    { name: 'Tecnologias', description: 'React Native' },
    { name: 'Banco de Dados', description: 'Water Melon DB' },
    { name: 'Design', description: 'CSS, React Native' },

]

export function Project1() {
    return (
        <div id="projetos" className="bg-white shadow-lg rounded-xl mt-5">
            <h2 className="flex mytitle text-primary ml-3 p-5">  <BsCodeSlash size={25} color={theme.colors.primary} className='mt-1 mr-1'/> Projetos</h2>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-6 sm:px-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div className=''>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Fazer Hoje</h2>
                    <p className="mt-4 text-gray-500">
                        Lista de afazeres rapida e intuitiva
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Use agora mesmo</dt>
                            <dd className="mt-2 text-sm text-gray-500">PlayStore</dd>
                            <dd className="mt-2 text-sm text-gray-500">Termo de Serviço</dd>
                        </div>
                    </dl>
                </div>
                <div className="lg:w-2/4 mx-auto shadow-lg">
                    <img
                        src={print1}
                        alt="print1"
                        className="rounded-lg object-contain  "
                    />
                    {/* <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    /> */}
                </div>
            </div>
        </div>
    )
}
