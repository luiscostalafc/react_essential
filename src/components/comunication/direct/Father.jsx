import React from 'react'
import Children from './Children'

export default props =>
  <div>
    <Children {...props}>João</Children>
    <Children sobrenome={props.sobrenome}>Maria</Children>
    <Children sobrenome="Silva">Pedro</Children>

  </div>