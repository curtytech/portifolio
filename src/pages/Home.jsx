
import { useState } from 'react'

import '../App.css'
import foto from '../assets/foto.jpg'

import { Mynavbar } from '../components/Mynavbar'
import { Habilidades } from '../components/Habilidades'
import { SobreMim } from '../components/SobreMim'
import { ProjectOne } from '../components/ProjectOne'
import { Formacao } from '../components/Formacao'
import { Experiencia } from '../components/Experiencia'

export function Home() {

    return (
        <div className={`bg-lightbg`}>

            <Mynavbar />

            <SobreMim />

            <Habilidades />

            <ProjectOne />

            <Formacao />

            <Experiencia />

        </div>
    )

}

