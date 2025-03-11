import React from 'react'
import './advertise.css';
import { useNavigate } from 'react-router-dom';

const Advertise = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='main'>
            <div className='section-1'>
                <h5>spring / summer</h5>
                <h2>buy 1 get 1 free</h2>
                <p>The best classic dress is on sale</p>
                <button type="button" class="btn btn-success" onClick={()=>navigate('/product')}>collection</button>


            
            </div>

            <div className='section-2'>
                <h2 style={{display:'flex', alignItems:'flex-end'}}>SEASONAL SALE</h2>
                <p style={{color:'red'}}>Winter Collection - 50% offer</p>
            </div>
        </div>
    </div>
  )
}

export default Advertise