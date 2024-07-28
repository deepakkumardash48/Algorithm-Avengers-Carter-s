import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Button,Img,Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import ProductDetails from "../Product/ProductDetails";
import './Product1.css'


function Product1 () {
    const[ prod, setProd] = useState({})
    const {id} = useParams()
    console.log(id) 

    async function getData () {
        try {
            let res = await fetch (`http://localhost:3000/Products/${id}`);
            let data = await res.json();
            console.log(data)
            setProd(data)
        } catch(error){
            console.log(error)
        }
    }

    async function addCart(cartPro) {
        let pro = cartPro;
        let res = await fetch(`http://localhost:3000/Cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pro)
        });
        let data = await res.json();
        alert("Product added to cart")
    }

    useEffect(() => {
        getData()
    },[])
    return(
        <>
        <div className="main">
            <div className="pict">
                <div><Img id="i1" src={prod.img1}/></div>
                <div><Img id="i2" src={prod.img2} alt='Toddler Heart Pocket Tee' /></div>
            </div>
            <div className="det">
                <div id="prdctTitle">{prod.title}</div>
                <div id="rev"><a>Write a review</a></div>
                <div id="style">
                    <Text fontFamily='sans-serif'><b>Styles</b>:Pink</Text>
                    <Button width='4rem' height='3rem' backgroundColor ='white' borderWidth='thin' borderRadius='25%' marginRight='10px'><img className ='drs' src="https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw80e93e8c/productimages/2R537810.jpg?sw=128&sh=170" alt="Pink"/></Button>
                    <Button width='4rem' height='3rem' backgroundColor ='white' borderWidth='thin' borderRadius='25%' marginRight='10px'><img className ='drs' src="https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe951b6c0/productimages/2R537510.jpg?sw=128&sh=170" alt="Teal"/></Button>
                    <Button width='4rem' height='3rem' backgroundColor ='white' borderWidth='thin' borderRadius='25%' marginRight='10px'><img className ='drs' src="https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dweffb0738/productimages/2R537910.jpg?sw=128&sh=170" alt="Blue"/></Button>
                </div>

                <Text><b>Size</b>:3</Text>
                <div className="btn">
                   <button className="sizeBtn" >2</button>
                   <button className="sizeBtn" >4</button>
                   <button className="sizeBtn" >6</button>
                   <button className="sizeBtn" >8</button>
                   <button className="sizeBtn" >10</button>
                   <button className="sizeBtn" >12</button>
                </div>
                <div id="pric">
                    <div id="fpr">{prod.fprice}</div>
                    <div id="pr">{prod.price}</div>
                    <div id="ic"><InfoOutlineIcon/></div>
                    <Button 
                        id="btnCart"
                        style={{width:'700px', height:'5vh'}}
                        onClick={() => addCart(prod)}
                    >Add  to  Cart</Button>
                </div>
                <div id="inf">
                    <p><b>Select a store</b> to see in store availability </p>
                    <p>Return availability within 90days.<a>Return Details</a></p>
                    <p>Afterpay available for orders over $35 <b>afterpay</b></p>
                    <p>Earn more with Carter's Rewards.<a>Join Us</a> </p>
                    <a>Product Details</a>
                </div>
            </div>
       </div>
       <ProductDetails/>
        </>
    )
    
}
export default Product1;