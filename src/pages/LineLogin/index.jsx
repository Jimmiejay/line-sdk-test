import React from 'react'
import {useParams} from 'react-router-dom'

function LineLogin() {
    const { liffId } = useParams();

  return (
    <div>
        ilffId = {liffId}
    </div>
  )
}

export default LineLogin