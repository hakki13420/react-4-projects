import React from 'react'
import '../styles/temoin.css'

const Temoin = ({temoin}) => {
    return (
      <div className="container-temoin">
        <img
          src={temoin.image}
          alt="temoinImage"
            />
        <div className='description-temoin'>
            <p>{temoin.name}</p>
            <p>{temoin.role}</p>
            <p>{temoin.description}</p>                        
        </div>
      </div>
    );
}

export default Temoin