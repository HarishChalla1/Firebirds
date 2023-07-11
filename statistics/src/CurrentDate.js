import React, { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2); // Extract last two digits
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
};

export default CurrentDate;



// import React, { useState, useEffect } from 'react';

// const CurrentDate = () => {
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     const date = new Date();
//     const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
//     setCurrentDate(formattedDate);
//   }, []);

//   return (
//     <div>
//       <h2>Current Date</h2>
//       <p>{currentDate}</p>
//     </div>
//   );
// };

// export default CurrentDate;

