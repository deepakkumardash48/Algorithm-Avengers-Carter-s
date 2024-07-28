
import React from 'react';
import './Footer.css';
import { SearchIcon,ChevronRightIcon } from '@chakra-ui/icons'
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, IconButton } from '@mui/material';


const Footer = () => {
    return (
        <>
                <p id='para'>
                    OshKosh B'gosh was founded in 1895 in Oshkosh, Wisconsin as a manufacturer of hickory-striped denim bib overalls for railroad workers and farmers. It was the brilliant idea of designing a pint-size version for the children of these customers that gave OshKosh B'gosh its true meaning and purpose. The World's Best Overalls embody the hopes, dreams, and pride of every parent for their kids. More than just a clothing company, OshKosh B'gosh is an emotional connection between generations. As we grew to offer style-conscious kids everything from casual playwear to special occasion dresses, we've stayed true to our roots in quality, durability, and craftsmanship... things worth holding on to. After 117 years, we've decided we may never grow up. We're fine with growing old. We're just not fine with forgetting where we came from. So we're staying true to our original recipe: build great products, put the customer first and provide honest value every day. In 2005, OshKosh B'gosh joined the Carter's family of brands. Together, OshKosh B'gosh and Carter's are two of the oldest, largest, and most-recognized brands of baby and children's apparel in the world. That's a lot of history — connections binding families, and lasting relationships forged with customers and tales of timeless quality. History has earned OshKosh B'gosh the trust of generations of families, and that's history we intend to repeat.
                </p> <div className="footer-top">
            </div>
        <footer className="footer">
           
            <div className="footer-links">
                <div className="footer-column" >
                    <h4 style={{fontWeight:'bold'}}>Support</h4>
                    <ul style={{color:'rgba(0,0,0,0.5)'}}>
                        <li><a href='#'>Customer Service</a></li>
                        <li><a href='#'>Accessibility Support</a></li>
                        <li><a href='#'>Shipping</a></li>
                        <li><a href='#'>Returns</a></li>
                        <li><a href='#'>Gift Cards</a></li>
                        <li><a href='#'>Today's Deals</a></li>
                        <li><a href='#'>Size Chart</a></li>
                        <li><a href='#'>My Account</a></li>
                        <li><a href='#'>Carter's Credit Card</a></li>
                        <li><a href='#'>Carter's Rewards™</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column" >
                    <h4 style={{fontWeight:'bold'}}>About</h4>
                    <ul style={{color:'rgba(0,0,0,0.5)'}}>
                        <li><a href='#'>Carter's Inc.</a></li>
                        <li><a href='#'>Love Every Moment Blog</a></li>
                        <li><a href='#'>Baby of the Month Contest</a></li>
                        <li><a href='#'>All Store Locations</a></li>
                        <li><a href='#'>International</a></li>
                        <li><a href='#'>Join Carter's Affiliate Program</a></li>
                        <li><a href='#'>Investor Relations</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Raise the Future</a></li>
                        <li><a href='#'>Carter's by DaVinci</a></li>
                    </ul>
                </div>
                <div className="footer-column" style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start',
                    marginLeft:'20%'
                }}>
                    <h3 style={{
                        fontSize:'1.1rem',
                        marginLeft:'0',
                        color:'rgba(0,0,0,0.5)'
                    }}>Stay in the know</h3>
                    <div className="email">
                        <input type="email" placeholder="Email Address" style={{width:'20em'}}/>
                        <button style={{backgroundColor:'rgba(0,0,0,0.1)'}}><ChevronRightIcon/></button>
                    </div>
                
               
                    <h3 style={{
                        fontSize:'1.1rem',
                        marginLeft:'0',
                        marginTop:'2em',
                        color:'rgba(0,0,0,0.5)'

                    }}>Find a store</h3>
                    <div className="space-locator" >
                        <input type="text" placeholder="Zip Code" style={{width:'20em'}}/>
                        <button style={{backgroundColor:'rgba(0,0,0,0.1)'}}><SearchIcon /></button>
                    </div>
                    {/* <div display="flex" justifyContent="start" gap={1}>
                    <IconButton aria-label="facebook" href="https://www.facebook.com">
                    <FacebookIcon fontSize="small" />
                     </IconButton>
                     <IconButton aria-label="pinterest" href="https://www.pinterest.com">
                     <PinterestIcon fontSize="small" />
                     </IconButton>
                     <IconButton aria-label="twitter" href="https://www.twitter.com">
                     <TwitterIcon fontSize="small" /> 
                     </IconButton>
                     <IconButton aria-label="youtube" href="https://www.youtube.com">
                     <YouTubeIcon fontSize="small" />
                     </IconButton>
                    <IconButton aria-label="instagram" href="https://www.instagram.com">
                    <InstagramIcon fontSize="small" />
                    </IconButton>
                    </div> */}
                </div>
            </div>
            
            <div className="footer-bottom">
                <p style={{fontSize:'0.8rem'}}>© 2024 Carter’s, Inc. All rights reserved.</p>
                <ul className="footer-bottom-links">
                    <li><a href='#'>Google Ad Price Policy</a></li>
                    <li><a href='#'>Terms and conditions</a></li>
                    <li><a href='#'>Privacy Statements</a></li>
                    <li><a href='#'>Do Not Sell My Personal Information</a></li>
                    <li><a href='#'>Accessibility</a></li>
                    <li><a href='#'>Coupon Policy</a></li>/       
                    <li><a href='#'>Product Recalls</a></li>              
                    <li><a href='#'>UK Tax Strategy</a></li>
                    <li><a href='#'>Site Map</a></li>
                </ul>
                <ul className="footer-social-links">
                <li><b>Now Trending</b></li>
                     <li><a href='#'>Big Sister Shirts</a></li>
                     <li><a href=''>Carter’s Coupons, Promo Codes, and Promotions</a></li>
                     <li><a href='#'>Kids Clothing Size Chart | Carter’s</a></li>
                 
                </ul>
            </div>
            <div className="footer-disclaimer">
                <h4 style={{fontSize:'0.9rem', fontWeight:'bold'}}>*EXCLUSIONS & DISCLAIMERS:</h4>
                <p className='fp'>UP TO 50% OFF: Savings based on MSRP. Excludes Select New Arrivals, LITTLE PLANET®, Sneak Peek, Treasure Box, Licensed Styles, SKIP HOP®, Doorbusters, Everyday Value, and Clearance. Select styles. Other exclusions may apply.</p>
                <p className='fp'>BUY 1, GET 2 FREE DENIM: First item at MSRP. Additional items of equal or lesser value. Excludes select styles and clearance. Discount reflected in cart online.</p>
                <p className='fp'>50% OFF CHRISTMAS IN JULY PJ DROP: Online only. Savings based on MSRP. Excludes Select New Arrivals, Little Planet®, Sneak Peek, Treasure Box, Licensed Styles, Skip Hop®, Doorbusters, Everyday Value, and Clearance. Select styles. Other exclusions may apply.</p>
                <p className='fp'>UP TO 70% OFF CLEARANCE: Savings based on MSRP.</p>
                <p className='fp'>Composable v2.0.3</p>
            </div>
        </footer>
    </>
    );
}

export default Footer;
