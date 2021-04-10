import './App.css'
import React from 'react'

import Primeiro from './Components/basicos/Primeiro'
import ComParametro from './Components/basicos/ComParametro'
import ComFilhos from './Components/basicos/ComFilhos'
import Card from './Components/Layout/Card'
import Repeticao from './Components/basicos/Repeticao'
import Condicional from './Components/basicos/Condicional'
import CondicionalComIf from './Components/basicos/CondicionalComIf'

export default (props) => (
    <div className="App">

        <Card titulo="#01 - Primeiro Componente" >
            <Primeiro />
        </Card>

        <Card titulo="#02 - Componente Com Parametro" >
            <ComParametro
                titulo="Esse e um titulo"
                subtitulo="Esse e o subtitulo" />
        </Card>

        <Card titulo="#03 - Componente Com Filhos" >
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 - Componente Repeticao" >
            <Repeticao>

            </Repeticao>
        </Card>

        <Card titulo="#05 - Componente Condicional v1" >
            <Condicional numero={10}>

            </Condicional>
        </Card>

        <Card titulo="#06 - Componente Condicional v2" >
            <CondicionalComIf numero={11}>

            </CondicionalComIf>
        </Card>

    </div>
);