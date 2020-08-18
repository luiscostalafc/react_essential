import './App.css'
import React from 'react';

import First from '../src/components/basic/First'
import Params from '../src/components/basic/Params'
import Children from './components/basic/Children'
import Card from '../src/components/layout/Card'
import Repeat from './components/basic/Repeat'
import Conditional from './components/basic/Conditional'
import ConditionalIf from './components/basic/ConditionalIf'
import Father from './components/comunication/direct/Father'
import Super from './components/comunication/indirect/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="cards">
    <Card titulo="#11 - Mega" color="#73503C">
        <Mega qtdeNumero={8}></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#425388">
        <Father sobrenome="Freitas"></Father>
      </Card>
      <Card titulo="#06 - Condicional v2" color="#FA6900">
        <ConditionalIf number={10}></ConditionalIf>
      </Card>
      <Card titulo="#05 - Condicional v1" color="#E94C6F">
        <Conditional number={11}></Conditional>
      </Card>
      <Card titulo="#04 - Repetição" color="#008BBA">
        <Repeat />
      </Card>
      <Card titulo="#03 - Componente Com Filhos" color="#D96459">
        <Children>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </Children>
      </Card>
      <Card titulo="#02 - Componente Com Parâmetros" color="#FF85CB">
        <Params titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#92B06A">
        <First />
      </Card>
    </div>


  </div>

);