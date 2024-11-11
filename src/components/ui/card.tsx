import React, { PropsWithChildren } from 'react'

interface Props {
    header: string,
}

const Card: React.FC<PropsWithChildren<Props>> = ({header, children}) => {
  return (
    <div className='card'>
      <div className='header'>
        <h1>{header}</h1>
      </div>
       <div className='content'>
        {children}
      </div>
    </div>
  )
}
export default Card;
