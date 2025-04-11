import React, { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  // State variables for counting
  const [ageGroups, setAgeGroups] = useState(0);
  const [countries, setCountries] = useState(0);
  const [peopleImpacted, setPeopleImpacted] = useState(0);

  // Function to animate counting
  const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
    let start = 0; // Starting value
    const increment = Math.ceil(target / (duration / 1000)); // Calculate increment value per second
    const intervalDuration = 300; // Update interval in milliseconds

    const interval = setInterval(() => {
      start += increment; // Increment the start value
      if (start >= target) {
        clearInterval(interval); // Stop counting if the target is reached
        setter(target); // Ensure the final value is set to the target
      } else {
        setter(start); // Update state with the current value
      }
    }, intervalDuration); // Set interval duration

    return () => clearInterval(interval); // Cleanup on unmount
  };

  useEffect(() => {
    // Start the counting animation
    animateCount(9, setAgeGroups, 2000);
    animateCount(81, setCountries, 2000);
    animateCount(657753, setPeopleImpacted, 2000);
  }, []);

  return (
    <div className="py-16">
      <div className="flex text-black justify-center space-x-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold">{ageGroups}+ </h3>
          <p className="text-lg">Age Groups</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">{countries}+ </h3>
          <p className="text-lg">Countries</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">{peopleImpacted}+ </h3>
          <p className="text-lg">People Impacted</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
