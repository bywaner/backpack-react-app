import React from 'react';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BpkText tagName="h1" textStyle="xl">
        ✈️ Flight Schedule
      </BpkText>
      <BpkButton onClick={() => alert('Hello Backpack!')}>
        Click Me
      </BpkButton>
    </div>
  );
}

export default App;
