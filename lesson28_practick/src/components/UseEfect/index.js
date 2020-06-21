import React, {useEffect, useState} from "react";

// class Redux extends React.Component {
//
//   state = {
//     value: 'value',
//     value2: 'value2'
//   }
//
//   change = () => {
//     this.setState({
//       value: 132
//     })
//   }
//
//   render() {
//     return (
//       <>
//         <p>{this.state.value}</p>
//         <p>{this.state.value2}</p>
//         <button onClick={this.change}>Change</button>
//       </>
//
//     )
//   }
// }
//
// export default Redux;

const UseEfect = () => {
  const [number, setNumber] = useState(0)
  const [number2, setNumber2] = useState(100)
  const [test, setTest] = useState('string test')
  const [values, sertValues] = useState({
    value: 'value',
    value2: 'value2',
  })

  const change = () => {
    // setTest(prevState => {})
    sertValues(prevState => ({...prevState, value: 123}))
  }

  useEffect(() => {
    console.log('useEffect')
  },[number])

  return (
    <>
      <div>
        <p>{number}</p>
        <button onClick={() => setNumber(prevState => (++prevState))}>+</button>
      </div>
      <div>
        <p>{number2}</p>
        <button onClick={() => setNumber2(prevState => (++prevState))}>+</button>
      </div>
      <h1>{test}</h1>
      <p>{values.value}</p>
      <p>{values.value2}</p>
      <button onClick={change}>Change</button>
    </>
  )
}

export default UseEfect