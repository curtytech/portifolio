
import { TbCertificate } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

import { DiTerminal } from "react-icons/di";
import { DiReact } from "react-icons/di";
import theme from '../theme';

export function Habilidades() {

    const techs = [
        { name: 'Tail Wind', site: 'https://tailwindcss.com/', img: '', },
        { name: 'Bootstrap', site: 'https://getbootstrap.com/', img: '', },
        { name: 'Figma', site: 'https://www.figma.com//', img: '', },
        { name: 'Styled Components', site: 'https://www.styled-components.com', img: '', },
        { name: 'Next JS', site: 'https://nextjs.org/', img: '', },
        { name: 'React JS', site: 'https://www.react.dev/', img: '', },
        { name: 'React Native', site: 'https://reactnative.dev/', img: '', },
        { name: 'Native Base', site: 'https://nativebase.io/', img: '', },
        { name: 'Skia', site: 'https://skia.org/', img: '', },
        { name: 'Axios', site: 'https://axios-http.com/ptbr/docs/intro', img: '', },
        { name: 'React Navigation', site: 'https://reactnavigation.org/', img: '', },
        { name: 'WaterMelonDB', site: 'https://watermelondb.dev/docs', img: '', },
        { name: 'HealmDB', site: 'https://realm.io/', img: '', },
        { name: 'Laravel', site: 'https://laravel.com/', img: '', },
        { name: 'Code Igniter', site: 'https://codeigniter.com//', img: '', },
        { name: 'JQuery', site: 'https://jquery.com//', img: '', },
        { name: 'Postgres', site: 'https://www.postgresql.org/', img: '', },
        { name: 'MySQL', site: 'https://www.mysql.com/', img: '', },
        { name: 'Node JS', site: 'https://www.nodejs.org/', img: '', },
        { name: 'Apache', site: 'https://www.apache.org/', img: '', },
        { name: 'Prisma ORM', site: 'https://www.prisma.io/', img: '', },
        { name: 'Sequelize ORM', site: 'https://sequelize.org/', img: '', },
        
    ]

    return (
        <div id="habilidades" className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg rounded-xl bg-white p-5">

            <div className='' >
                <h2 className="flex mytitle text-primary ">  <TbCertificate size={25} color={theme.colors.primary} className='mt-1 mr-1' /> Habilidades</h2>

                <h2 className="flex mytitle text-primary text-xl ml-5">  <DiTerminal size={25} color={theme.colors.primary} className='mr-1' /> Linguagens</h2>
                <div className=' items-center justify-between grid grid-cols-3 lg:grid-cols-6 ml-5'>
                    <div className='p-2'>
                        <a className='items-center flex flex-col' target='_blank' href="https://typescriptlang.org/">
                            <i className="programming lang-typescript"></i>
                            <p className='text-sm'>TypeScript</p>
                        </a>
                    </div>
                    <div className='p-2'>
                        <a className='items-center flex flex-col' target='_blank' href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                            <i className="programming lang-javascript"></i>
                            <p className='text-sm'>JavaScript</p>
                        </a>
                    </div>
                    <div className='p-2'>
                        <a className='items-center flex flex-col' target='_blank' href="https://www.php.net/">
                            <i className="programming lang-php"></i>
                            <p className='text-sm'>PHP</p>
                        </a>
                    </div>
                    <div className='p-2'>
                        <a className='items-center flex flex-col' target='_blank' href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                            <i className="programming lang-html"></i>
                            <p className='text-sm'>HTML</p>
                        </a>
                    </div>
                    <div className='p-2'>
                        <a className='items-center flex flex-col' target='_blank' href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                            <i className="programming lang-css"></i>
                            <p className='text-sm'>CSS</p>
                        </a>
                    </div>
                    <div className='p-2'>
                        <a className='items-center flex flex-col' target='_blank' href="https://www.postgresql.org/">
                            {/* <i className="programming lang-sql"></i> */}
                            <BiLogoPostgresql size={25} color={theme.colors.facebook} />
                            <p className='text-sm'>SQL</p>
                        </a>
                    </div>

                </div>

                <h2 className="flex mytitle text-primary text-xl ml-5">  <DiReact size={25} color={theme.colors.primary} className='mr-1' /> Tecnologias</h2>
                <div className='items-center justify-between grid grid-cols-3 mt-2 ml-5 lg:grid-cols-10 lg:mt-0'>
                    {techs.map((row) => (
                        <div className='p-1'>
                            <a className='items-center flex flex-col' target='_blank' href={row.site}>
                                <img src={`https://www.google.com/s2/favicons?domain=${row.site}`} alt={row.name} />
                                <p className='text-sm'>{row.name}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}