import React, {useState} from "react";

const FuncComponent = ({uorNewProp}) => {

  const [ourText, setOurText] = useState(1)
  const [newState] = useState('string')

  return (
    <div>
      {ourText}
      <button onClick={() => setOurText(prevState => ++prevState)}>+1</button>
      <p>{newState}</p>
        <p>
          {uorNewProp}
        </p>
    </div>
  )
}

export default FuncComponent;