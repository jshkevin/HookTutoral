import React from 'react';
import Average from './Average';
import Info from './Info';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';

const App = () => {
  return (
    <div>
      <CounterClass/>
      <CounterFunction/>
      <Info/>
      <Average/>
    </div>
  )
}

export default App;