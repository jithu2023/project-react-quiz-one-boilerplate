import React, { Component } from 'react'
import Homecomponent from './components/homecomponent'
import Quizcomponent from './components/quizcomponent'
import ResultComponents from './components/ResultComponents'

export default class App extends Component {
  render() {
    return (
      <>
        <Homecomponent/>
        <Quizcomponent/>
        <ResultComponents/>
      </>
      
    )
  }
}
