import React from 'react';
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import ShowDateRangeDetails from './ShowDateRangeDetails';
import './rootCalculator.css';

const RootCalculator = () => {
    return ( 
        <React.Fragment>
        <header className="appBar">React Date Range Calculator</header>
        <main className ="mainTwoCal">
          <div className="calanderPicker rightcolum">
            <div className="calanderLabel">
              Select Date range
            </div>
            <DateRangePicker  clearIcon={null} className="dateSelector" />
          </div>
          <div className = "leftcolum">
            <ShowDateRangeDetails/>
            </div>
        </main>
        <footer>footer</footer>
      </React.Fragment>
     );
}
 
export default RootCalculator;