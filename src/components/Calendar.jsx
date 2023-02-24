import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">10 AM</td>
            <td></td>
            <Event event='Deepwork' color='blue' />
            <Event event='CST-311' color='orange' />
            <td></td>
            <Event event='CST-311' color='orange' />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 AM</td>
            <td></td>
            <Event event='' color='blue' />
            <Event event='' color='orange' />
            <td></td>
            <Event event='' color='orange' />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 PM</td>
            <td></td>
            <td></td>
            <Event event='IOS' color='green' />
            <Event event='Capstone' color='purple' />
            <Event event='IOS' color='green' />
            <Event event='Capstone' color='purple' />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 PM</td>
            <td></td>
            <td></td>
            <Event event='' color='green' />
            <Event event='' color='purple' />
            <Event event='' color='green' />
            <Event event='' color='purple' />
            <td></td>
          </tr>
          <tr>
            <td className="time">2 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='TA' color='lightblue' />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 PM</td>
            <td></td>
            <td></td>
            <Event event='WEB DEV' color='yellow' />
            <td></td>
            <Event event='' color='lightblue' />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">6 PM</td>
            <td></td>
            <Event event='JAPN 350' color='pink' />
            <Event event='' color='yellow' />
            <Event event='JAPN 350' color='pink' />
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
