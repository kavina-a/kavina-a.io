import React from 'react'
import './languages.scss'

const Languages = () => {
  return (
      <div className='profileCard'>
      <div className="flex-row">
        <div className="line-gradient"></div>
        <div className="line-gradient-reverse"></div>
      </div>
      <div className="header">
        <div className="flex-row space">
          <div className="circle red"></div>
          <div className="circle orange"></div>
          <div className="circle green"></div>
        </div>
      </div>

      <div className="content">
        <code className="code-block">
          <div className="blink">
            <span className="keyword">const </span>
            <span className="variable">aboutMe</span>
            <span className="operator"> = </span>
            <span className="bracket">{'{'}</span>
          </div>

          <div>
            <span className="key">name: </span>
            <span className="quote">{`'`}</span>
            <span className="value"> Kavina Alahapperuma </span>
            <span className="quote">{`',`}</span>
          </div>

          <div>
            <span className="key">age: </span>
            <span className="quote">{`'`}</span>
            <span className="value"> 20 </span>
            <span className="quote">{`',`}</span>
          </div>

          <div>
            <span className="key">university: </span>
            <span className="quote">{`'`}</span>
            <span className="value"> APIIT </span>
            <span className="quote">{`',`}</span>
          </div>

          <div>
            <span className="key">about: </span>
            <span className="quote">{`'`}</span>
            <span className="value"> An aspiring software engineer and math tutor, I'm passionate about harnessing technology to enhance daily life.</span>
            <br></br>
            <span className="value2">With a keen eye for innovation, I'm constantly exploring new tech skills to bring my visions to life.</span> <br></br>
            <span className="value2">Beyond the screen, I share my love for numbers as a math tutor, guiding students towards a deeper understanding of mathematics.</span><br></br>
            <span className="value2">Welcome to my profile, where you can explore my projects and get to know more about my journey in the tech world! </span>
            <span className="quote">{`',`}</span>
          </div>

          <div>
            <span className="key">characteristics : </span>
            <span className="quote"> {`{ `} </span>
          </div>

          <div>
            <span className="key2">quickLearner: </span>
            <span className="value"> true </span>
          </div>

          {/* <div>
            <span className="key2">hardWorker: </span>
            <span className="value"> true </span>
          </div> */}

          <div>
            <span className="key2">teamPlayer: </span>
            <span className="value"> true </span>
          </div>

          <div>
            <span className="key2">problemSolver: </span>
            <span className="value"> true </span>
          </div>

          <div>
            <span className="key2">allergicToBugs: </span>
            <span className="valueFalse"> false </span>
          </div>

          <div>
            <span className="key">{`}`}  </span>
          </div>

          <div>
            <span className="hireable">hireable: </span>
            <span className="number">function</span>
            <span className="value">()</span>
            <span className="value">{` {`}</span>
          </div>

          <div>
            <span className="key2">return: </span>
            <span className="value"> {`(`} </span>
          </div>

          <div>
            <span className="skills">this.</span>
            <span className="value"> hardWorker </span>
            <span className="key4"> && </span>
          </div>

          <div>
            <span className="skills">this.</span>
            <span className="value"> problemSolver </span>
            <span className="key4"> && </span>
          </div>

          <div>
            <span className="skills">this.</span>
            <span className="value"> skills.length </span>
            <span className="key4"> {`>= `} </span>
            <span className="key4"> 5 </span>
            <span className="value">{`)`} </span>
            <span className="bracket">{`;`} </span>

          </div>
          <span className="hireable">{`};`}</span> <br></br>
          <span className="key4">{`};`}</span>
            </code>
    </div>
    </div>
  )
}

export default Languages
