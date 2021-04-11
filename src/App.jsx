import './App.css'
import React from 'react'

import Primeiro from './Components/Basicos/Primeiro'
import ComParametro from './Components/Basicos/ComParametro'
import ComFilhos from './Components/Basicos/ComFilhos'
import Card from './Components/Layout/Card'
import Repeticao from './Components/Basicos/Repeticao'
import Condicional from './Components/Basicos/Condicional'
import CondicionalComIf from './Components/Basicos/CondicionalComIf'
import Pai from './Components/Comunicacao/direta/Pai'
import Super from './Components/Comunicacao/indireta/Super'
import Input from './Components/Form/input'
import Contador from './Components/Contador/Contador'
import Mega from './Components/Mega/Mega'

export default (props) => (
    <div className="App">

        <h1>Fundamento React</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#E94C6F">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Componente Com Parametro" color="#E94C6F">
                <ComParametro
                    titulo="Esse e um titulo"
                    subtitulo="Esse e o subtitulo" />
            </Card>

            <Card titulo="#03 - Componente Com Filhos" color="#E94C6F">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Componente Repeticao" color="#E94C6F">
                <Repeticao>

                </Repeticao>
            </Card>

            <Card titulo="#05 - Componente Condicional v1" color="#E94C6F" >
                <Condicional numero={10}>

                </Condicional>
            </Card>
            <Card titulo="#06 - Componente Condicional v2" color="#FA6900" >
                <CondicionalComIf numero={11}>

                </CondicionalComIf>
            </Card>

            <Card titulo="#07 - Componente comunicacao direta" color="#FA6900" >
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#08 - Componente comunicacao indireta" color="#FA6900" >
                <Super></Super>
            </Card>

            <Card titulo="#09 - Input" color="#FA6900" >
                <Input></Input>
            </Card>

            <Card titulo="#10 - Contador" color="#FA6900" >
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#11 - Mega" color="#FA6900" >
                <Mega qtdeNumero={8}></Mega>
            </Card>

        </div>
    </div>
);