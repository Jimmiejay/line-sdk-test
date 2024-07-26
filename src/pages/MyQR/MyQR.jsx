import React from 'react'
import './myqr.css'


const MyQR = () => {
  return (
    <>
      <div className='myQRContainer'>
        <div className='myQRBox'>
          <div className='myQR'>
          </div>
          <div>
              <button className='myQRBtn'>
                Scan
              </button>
          </div>
        </div>
      </div>

    </>

  )
}

export default MyQR