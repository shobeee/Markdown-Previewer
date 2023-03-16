import React from 'react'

export default function Frst(props) {
  const {value,setValue} = props;
  const handleClick = (event) => {
    setValue(event.target.value);
  }
  
  return (
    <div>
      <textarea value={value} id='editor' onChange={handleClick} style={{margin:"5%"}}></textarea>
    </div>
  )
}
