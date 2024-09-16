import React from 'react';
import Img1 from '../../assets/google.png' ;
import Img2 from '../../assets/slack.png';
import Img3 from '../../assets/atlassian.png';
import Img4 from '../../assets/dropbox.png';
import Img5 from '../../assets/shopify.png';
import './brand.css';

const Brand = () => (
  <div className="gpt4__brand section__padding">
    <div>
      <img src={Img1} alt='google'/>
    </div>
    <div>
      <img src={Img2} alt='slack' />
    </div>
    <div>
      <img src={Img3} alt='atlassian' />
    </div>
    <div>
      <img src={Img4} alt='dropbox'/>
    </div>
    <div>
      <img src={Img5} alt='shopify'/>
    </div>
  </div>
);

export default Brand;