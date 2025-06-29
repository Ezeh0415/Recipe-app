import React from 'react'
import { PiWarningFill } from "react-icons/pi";

const Error = ({error}) => {
  return (
    <div>
      {error && (
        <div className="warning">
          <div className="icon">
            <PiWarningFill />
          </div>
          <h1>could not fetch resourse or poor internet conection</h1>
        </div>
      )}
    </div>
  )
}

export default Error
