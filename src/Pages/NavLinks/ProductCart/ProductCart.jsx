import React, { useEffect, useState } from 'react'
import "./ProductCart.css"


export default function Cart() {
    const [selectedOption, setSelectedOption] = useState('');
    const [cartArr, setCartArr] = useState([]);

    async function getCartData() {
        let res = await fetch (`http://localhost:3000/Cart`);
        let data = await res.json();
        console.log(data);
        setCartArr(data);
    }

    async function removeCart(pro) {
        let proId = pro.id;
        let res = await fetch (`http://localhost:3000/Cart/${proId}`, {
            method: 'DELETE'
        })
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect (() => {
        getCartData();
    },[removeCart])
    


    return(
        <div className='body'>
            <div className="cart">
                <h3 id='yrCrt' className='headings'>Your cart</h3> ({cartArr.length} Item)
                <div className="card">
                    <img src="https://www.carters.com/on/demandware.static/-/Sites-Carters-Library/default/dw0b1f945e/icons/CREW_PLCC_Art_65x41.png" alt="card" />
                    <div className="txt">
                        <pre>open & save <p>30% today</p> with your first Carter's® Credit Card purchase.</pre>
                        <p>Save <b>$6.00</b> on your cart!</p>
                    </div>
                    <button id='btn'>Apply Now</button>
                </div>
                <div className='midBody'>
                    <div className='list'>
                        <div className="upperBtn">
                            <button id='ship'>Ship to address</button>
                            <button id='pick'>Free Pickup in Store</button>
                        </div>
                        <h3 className='headings'>Arrives in 3 to 8 Days</h3>
                        {
                            cartArr.map((pro) => (
                                <div className='order'>
                                    <img src={pro.img1} alt="" />
                                    <div className='orderCard'>
                                        <div className='orderDetails'>
                                            <p className='logoName'>OshKosh</p>
                                            <p className='title'>{pro.title}</p>
                                            <p className='size'>Size: {pro.styles}  /  Qty: 1 </p>
                                            <p className='color'>Color: Navy</p>
                                    
                                        </div>
                                        <div className="price">
                                            <p className='fpr'>{pro.fprice}</p>
                                            <p className='pr'>{pro.price}</p>
                                            <div className='removeOptn'>
                                                <button id='edit'>Edit</button>
                                                <button id='remove'onClick={() => removeCart(pro)}>Remove</button>
                                                <button id='save'>Save for later</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='gift'>
                            <input type="checkbox" name="" id="giftCheck" />
                            <div className='check'>
                                <p id='p1'>This order is a gift</p>
                                <p id='p2'>Gift receipt will not display pricing information (<a href="#">details</a>)</p>
                            </div>
                        </div>
                    </div>
                    <div className='rlist'>
                        <div className='donet'>
                            <h3 className='headings'>Make a difference today!</h3>
                            <img src="https://www.carters.com/on/demandware.static/-/Sites-Carters-Library/default/dw5bc919d6/images/slots/OKB_BgoshJeanius_checkout_265x195.jpg" alt="donet" />
                            <div className='donBtn'>
                                <button className='don'>$1</button>
                                <button className='don'>$3</button>
                                <button className='don'>$5</button>
                                <button className='don'>$7</button>
                            </div>
                        </div>
                        <div className="deliveryOpt">
                            <h3 className='headings'>Delivery Options</h3>
                            <select value={selectedOption} onChange={handleSelectChange}>
                                <option value="" disabled>Select an option</option>
                                <option value="option1">Standard shipping - $6.00</option>
                                <option value="option2">Expedited shipping - $15.00</option>
                                <option value="option3">Overnight shipping - $25.00</option>
                            </select>
                        </div>
                        <div className="checkout">
                            <h3 className='headings'>Order summary</h3>
                            <div className="promoCode">
                                <input type="text" placeholder='Promo code' id="promo" />
                                <button id='promoBtn'>Apply</button>
                            </div>
                            <div className="bill">
                                <p className='billTitle'>Subtotal</p>
                                <p>$6.00</p>
                            </div>
                            <div className="bill">
                                <p className='billTitle'>Shipping</p>
                                <p>$6.00</p>
                            </div>
                            <div className="bill">
                                <p className='billTitle'>Estimated tax</p>
                                <p>$0.00</p>
                            </div>
                            <div className="bill">
                                <p className='totalBill'>Order total</p>
                                <p className='totalBill'>$21.00</p>
                            </div>
                            <p id='billsave'>You saved $15.00. Check out now!</p>
                            <button id='checkoutBtn'>Checkout</button>
                            <button id='pp'><p id='pay'><i>Pay</i></p><p id='pal'><i>Pal</i></p></button>
                            <p id='extra'>Exact shipping and taxes are calculated at checkout.</p>
                            <button id='share'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="shareIcon"><path d="m26.6 6.13-1.6.81V12a21.25 21.25 0 0 0-14.54 5.06C4.84 22 2 30.05 2 41.06l1.93.36c.2-.49 4.83-11.89 21.07-12.34v6.11l1.6.8 19-14.12v-1.61ZM27 33.2v-5.14l-1-1c-12.4 0-18.91 6.09-21.87 10.13.58-8.42 3.14-14.67 7.62-18.62A19.42 19.42 0 0 1 24.44 14c.88 0 1.41.06 1.43.06l1.13-1V8.93l16.32 12.13Z"></path></svg>
                                Share Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}