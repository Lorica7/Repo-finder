import React from 'react';

import Rocket from '../../assets/Rocket.gif';

function Spinner () {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        width="200"
        src={Rocket}
        alt="Loading...."
      />
    </div>
  );
}

export default Spinner;
