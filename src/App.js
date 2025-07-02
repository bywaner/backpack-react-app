import React, { useState } from 'react';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkCalendar from 'bpk-component-calendar';
import format from 'date-fns/format';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <BpkText tagName="h1" textStyle="xl">
        ✈️ Flight Schedule
      </BpkText>

      <BpkCalendar
        id="calendar"
        onDateSelect={(date) => {
          setSelectedDate(date);
          console.log('Selected date:', format(date, 'yyyy-MM-dd'));
        }}
        selectedDate={selectedDate}
      />

      <div style={{ marginTop: '1rem' }}>
        <BpkButton onClick={() => alert('Hello Backpack!')}>
          Continue
        </BpkButton>
      </div>
    </div>
  );
}

export default App;
