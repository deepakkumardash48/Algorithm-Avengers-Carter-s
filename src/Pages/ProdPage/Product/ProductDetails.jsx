import React from 'react'
import './Productdetails.css'

const ProductDetails = () => {
  return (
    <div style={{height:'1400px'}}>
    <h2>Some of our most popular Styles</h2>
    <div className='products'>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw87da453f/productimages/3R445012.jpg?sw=320' alt='img'/>
            <pre><b>$5.99 </b> <span> $14.00*</span>&nbsp;<button>+</button></pre>
            
       </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw83cf3c0a/productimages/3Q457310.jpg?sw=320' alt='img'/>
            <pre><b>$10.99</b> <span>  $20.00*</span>&nbsp;<button>+</button></pre>
        </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7fa02ddf/productimages/3Q543410.jpg?sw=320' alt='img'/>
            <pre><b>$7.99</b> <span>  $20.00*</span>&nbsp;<button>+</button></pre>
        </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe96b5081/productimages/3R309912.jpg?sw=320' alt='img'/>
            <pre><b>$6.00</b> <span>  $16.00*</span>&nbsp;<button>+</button></pre>
        </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7fa02ddf/productimages/3Q543410.jpg?sw=320' alt='img'/>
            <pre><b>$10.99</b> <span>  $22.00*</span>&nbsp;<button>+</button></pre>
        </div>
    </div>
    <h2>Check out these Similar Styles</h2>
    <div className='products'>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw87027dd6/productimages/3R212916.jpg?sw=320' alt='img'/>
            <pre><b>$6.00</b> <span> $14.00*</span>&nbsp;<button>+</button></pre>
            
       </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe401e69d/productimages/3R212914.jpg?sw=320' alt='img'/>
            <pre><b>$6.00</b> <span>  $14.99*</span>&nbsp;<button>+</button></pre>
        </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwb2fcc324/productimages/3R445010.jpg?sw=320' alt='img'/>
            <pre><b>$5.99</b> <span>  $14.00*</span>&nbsp;<button>+</button></pre>
        </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw87da453f/productimages/3R445012.jpg?sw=320' alt='img'/>
            <pre><b>$5.99</b> <span>  $14.00*</span>&nbsp;<button>+</button></pre>
        </div>
        <div className='details'>
            <img src='https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd137f037/productimages/3R445016.jpg?sw=320' alt='img'/>
            <pre><b>$5.99</b> <span>  $14.00*</span>&nbsp;<button>+</button></pre>
        </div>
    </div>
    <h3>Details & Sizing</h3>
    <div className="container">
      <div className="details">
       
        <div className="about">
          <h3>About This Item</h3>
          <p>You can't go wrong with this graphic tee! Perfect for the changing season. Layer with a denim jacket on those chillier days, or wear alone with our iconic denim for a casual and cool style that is sure to turn heads.</p>
          <p>Style # <a href="#">V_3R456710</a></p>
        </div>
        <div className="features">
          <h4>Features:</h4>
          <ul>
            <li>Long sleeves</li>
            <li>Exclusive graphic</li>
          </ul>
        </div>
        <div className="care">
          <h4>Fabric & Care:</h4>
          <ul>
            <li>60% cotton, 40% poly</li>
            <li>Imported</li>
            <li>Machine washable</li>
          </ul>
        </div>
        <p className="dob">DOB 06/2024 <span className="info">&#9432;</span></p>
      </div>
      <div className="size-chart">
        <h2>Tops Size Chart</h2>
        <div className="units">
          <span className="active">US</span> | <span className="unit">Metric</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Numeric Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>40 - 42.5"</td>
              <td>34 - 38.5lb</td>
              <td>4</td>
            </tr>
            <tr>
              <td>XS</td>
              <td>42.5 - 45"</td>
              <td>38.5 - 43lb</td>
              <td>5</td>
            </tr>
            <tr>
              <td>S</td>
              <td>45 - 47.5"</td>
              <td>43 - 48lb</td>
              <td>6</td>
            </tr>
            <tr>
              <td>S</td>
              <td>48 - 51.5"</td>
              <td>50 - 59.5lb</td>
              <td>7</td>
            </tr>
            <tr>
              <td>M</td>
              <td>50.5 - 53.5"</td>
              <td>59.5 - 69.5lb</td>
              <td>8</td>
            </tr>
            <tr>
              <td>L</td>
              <td>54 - 56"</td>
              <td>69.5 - 87lb</td>
              <td>10</td>
            </tr>
            <tr>
              <td>L</td>
              <td>56 - 60"</td>
              <td>87 - 101lb</td>
              <td>12</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>59 - 62.5"</td>
              <td>97 - 113lb</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails