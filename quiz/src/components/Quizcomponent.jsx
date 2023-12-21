import React, { Component } from 'react'
import "./Component.css"

export default class 
 extends Component {
  render() {
    return (
      <div className='box1'>
        <h1>Question</h1>
        <p>1 of 15</p>
        <div class="grid">
        <div className='div1'>Dog</div>
        <div className='div2'>Elephant</div>
        <div className='div3'>Goat</div>
        <div className='div4'>Lion</div>
        </div>
        <div className='flex'> 
        <div className='prev'>previous</div>
        <div className='next'>Next</div>
        <div className='quit'>Quit</div>
        </div>
      </div>
    )
  }
}
