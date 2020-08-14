import './App.css'
import React from 'react';

import First from '../src/components/First'
import Params from '../src/components/Params'
import Children from '../src/components/Children'
import Card from '../src/components/layout/Card'
import Repeat from './components/Repeat'
import Conditional from './components/Conditional'
import ConditionalIf from './components/ConditionalIf'

export default (props) => (
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <ConditionalIf number={10}></ConditionalIf>
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Conditional number={11}></Conditional>
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeat />
    </Card>
    <Card titulo="#03 - Componente Com Filhos">
      <Children>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </Children>
    </Card>
    <Card titulo="#02 - Componente Com Parâmetros">
      <Params titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <First />
    </Card>

  </div>

);