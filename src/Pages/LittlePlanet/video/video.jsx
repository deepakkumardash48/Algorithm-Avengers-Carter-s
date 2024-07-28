import React from 'react';
import './video.css';

function Video() {
  return (
    <div className='video'>
      <video  loop autoPlay muted>
        <source src='https://videos.ctfassets.net/621t91s0mnkp/4J8EIT9UsiG2oQ2T8dtIil/3bf7f3cfc764199345c2172e5e337669/LP_FAL24_BRAND_LANDER_desktop_2.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Video