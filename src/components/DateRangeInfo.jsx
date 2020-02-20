import React from 'react';
import './rootCalculator.css';

const DateRangeInfo = ({ datesDiff, isStartDateInLeapYear, isEndDateInLeapYear, numberOfMondaysInDateRange, messageFromDateApi}) => {
    return ( 
        <React.Fragment>
            <h className="subheading">Calculated Results</h>
            <table>
            <tr>
                <th><h>Total days selected: </h></th><br />
                <td><label for="name">{datesDiff}</label></td>
            </tr>
            <tr>
                <th><h>Selected start date leap year? </h></th><br />
                <td><label for="name">{isStartDateInLeapYear ? "Yes" : "No"}</label></td>
            </tr>
            <tr>
                <th><h>Selected end date leap year? </h></th><br />
                <td><label for="name">{isEndDateInLeapYear ? "Yes" : "No"}</label></td>
            </tr>

            <tr>
                <th><h>Total Mondays in the range: </h></th><br />
                <td><label for="name">{numberOfMondaysInDateRange}</label></td>
            </tr>
            <tr>
                <th><h>Event occured on date selected: </h></th><br />
                <td><label for="name">{messageFromDateApi}</label></td>
            </tr>
            </table>
        </React.Fragment>
     );
}

export default DateRangeInfo;