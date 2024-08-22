import React, { useState } from 'react';
import moment from 'moment-timezone';
import './AgeCalculator.css'; // Import CSS for the AgeCalculator component

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const [todayInfo, setTodayInfo] = useState('');
  const [dobDay, setDobDay] = useState('');

  const calculateAge = (event) => {
    event.preventDefault();

    // Parse the date of birth using moment
    const birthDate = moment(dob, 'YYYY-MM-DD');
    const timezone = moment.tz.guess(); // Guess the user's local timezone
    const today = moment().tz(timezone); // Get the current date in the user's timezone

    // Calculate years, months, and days
    const years = today.diff(birthDate, 'years');
    birthDate.add(years, 'years');
    const months = today.diff(birthDate, 'months');
    birthDate.add(months, 'months');
    const days = today.diff(birthDate, 'days');

    setAge({ years, months, days });

    // Format today's date according to the user's device settings
    setTodayInfo(today.format('dddd, MMMM DD, YYYY'));

    // Get the original day of the week for the date of birth
    const originalBirthDay = moment(dob, 'YYYY-MM-DD').format('dddd');
    setDobDay(originalBirthDay);
  };

  const clearFields = () => {
    setDob('');
    setAge(null);
    setTodayInfo('');
    setDobDay('');
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <form onSubmit={calculateAge}>
        <label>
          Date of Birth
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <button type="submit">Calculate Age</button>
      </form>
      {age && (
        <div>
          <h2>
            You are: {age.years} years, {age.months} months, and {age.days} days old
          </h2>
          <p>Today's date: {todayInfo}</p>
          {dobDay && (
            <div>
              <h2>
                You were born on a {dobDay}
              </h2>
            </div>
          )}
          <button type="button" className="clear-button" onClick={clearFields}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
