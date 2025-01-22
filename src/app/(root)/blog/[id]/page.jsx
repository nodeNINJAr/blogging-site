import React from 'react'

const page = async({params}) => {
const {id} = await params ;


  return (
    <div>blog details {id}</div>
  )
}

export default page