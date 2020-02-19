import React from 'react';
import './rootCalculator.css';

const ShowDateRangeDetails = () => {
    return ( 
        <React.Fragment>
            <h className="subheading">Calculated Results</h>
            <table>
            <tr>
                <td><h>Total days selected: </h></td>
                <td><label for="name">tobe dynamic </label></td>
            </tr>
            <tr>
                <td><h>Leap year if start / end dates: </h></td>
                <td><label for="name">tobe dynamic </label></td>
            </tr>
            <tr>
                <td><h>Total Mondays in the range: </h></td>
                <td><label for="name">tobe dynamic </label></td>
            </tr>
            <tr>
                <td><h>Event occured on date selected: </h></td>
                <td><label for="name">tobe dynamic </label></td>
            </tr>
            </table>
        </React.Fragment>
     );
}

export default ShowDateRangeDetails;