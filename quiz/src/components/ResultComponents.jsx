import React, { Component } from 'react'

export default class ResultComponents extends Component {
  render() {
    return (
      <div className='box2'>
        <h3>Result Component</h3>
      
          <h1>You Need More Practice</h1>
          <h3>You'r Score Is 20%</h3>
          <div className='grid2'> 
          <div  className='qst'>
          <div >Total number of questions</div>
          <div>Number of attempted questions</div>
          <div >Number of correct Answers</div>
          <div >Number of wrong Answers</div>
        </div>
        <div className='Mark'>
          <div >15</div>
          <div>9</div>
          <div>3</div>
          <div>6</div>
        </div>
</div>

<button className='playagain'>Play Again</button>
<button className='backtohome'>Back To Home</button>

      </div>
      


    )
  }
}
