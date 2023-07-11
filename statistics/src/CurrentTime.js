import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');


  

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      setCurrentTime(`${hours}:${minutes}|`);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
    
      <p>{currentTime}</p>
    </div>
  );
};

export default CurrentTime;




// import React, { useState, useEffect } from 'react';

// const CurrentTime = () => {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Current Time</h2>
//       <p>{currentTime}</p>
//     </div>
//   );
// };

// export default CurrentTime;
