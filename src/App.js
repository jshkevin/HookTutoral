import React ,{useRef}from 'react';
import Average from './Average';
import Info from './Info';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import ContextSample from './Context';
import CounterRecucer from './CounterReducer';
import Layout from './Layout';
import FormContainer from './FormContainer';



function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


const App = () => {
  return (
    <div>
      <FormContainer/>
      {/* <Layout/> */}
      {/* <TextInputWithFocusButton/> */}
      {/* <InputSample/> */}
      {/* <ContextSample/> */}
      {/* <CounterClass/> */}
      {/* <CounterFunction/> */}
      {/* <CounterRecucer/> */}
      {/* <Info/> */}
      {/* <Average/> */}
    </div>
  )
}



export default App;