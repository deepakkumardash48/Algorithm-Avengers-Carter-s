import React, {useEffect, useState } from "react";
import { SimpleGrid,Box, ButtonGroup, Button, chakra, Icon} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,Text,Img,IconButton } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import { useSearchParams,Link } from "react-router-dom";
import './ProductPage.css'
// import Product1 from "./Product1";
// import { Button} from '@chakra-ui/react'
// import Navbar from "./Navbar";'
function ProductPage () {
    const[ Productarr, setproductArr] = useState([])
    let [searchparams,setSearchparams] = useSearchParams([])

    async function getData () {
        let res = await fetch ('http://localhost:3000/Products');
        let data = await res.json();
        console.log(data)
        setproductArr(data)
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <>
        <div>
            <p className="proHead">Back To School Clothes & Outfits</p>
            <div className="box1">
                <div className="cir">
                    <div className="circl">
                        <img className="im1" src="https://images.ctfassets.net/621t91s0mnkp/brv0sL50DUPjRWATmcxsl/6b700adf0de478cd352347037c54332f/kidgirlactiveshorts.jpg?fm=webp&w=133" alt="Active" />
                    </div>
                    <a className="circle" href="#">Active</a>
                </div>
                <div className="cir">
                    <div className="circl">
                        <img  className="im1" src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/ab0b1b10eb5d013b3b7a0ead9ecbf798.yottaa.net/v~4b.2de/621t91s0mnkp/6aDOO6lhYpzhIuXjkANHJX/3ed8d3eb71631b97128d9a286a5da928/kid-boy_pants.png?fm=webp&w=133" alt="Jeans"/>
                    </div>
                    <a className="circle" href="#">Jeans</a>
                </div>
                <div className="cir">
                    <div className="circl">
                        <img  className="im1" src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/ab0b1b10eb5d013b3b7a0ead9ecbf798.yottaa.net/v~4b.2de/621t91s0mnkp/7nEhat6t3kcjdRhOPk10V8/5432e924bfb861d74481d55d65a45605/kid_graphic-tees.png?fm=webp&w=133" alt="Graphic Tee"/>
                    </div>
                    <a className="circle"href="#">Graphic Tee</a>
                </div>
            </div>
            <div className="btdiv">
                <div className="btns">
                    <button className="bt" >Size <ChevronDownIcon/> </button>
                    <button className="bt">Baby Girl</button>
                    <button className="bt">Baby Boy</button>
                    <button className="bt">Toddler Girl</button>
                    <button className="bt">Toddler Boy</button>
                    <button className="bt">Kid Girl</button>
                    <button className="bt">Kid Boy</button>
                </div>
            </div>
            <div className="sort">
                <div className="lbox">
                    <svg className='sortIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="filter"><path d="M2 7h.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2H9.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2zm4-3a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm24 11h-.142a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h20.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-4 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm4 7H19.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h10.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-14 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg>
                    <button className="sortbtn">Filter & Sort</button>
                </div>
                <div className="rbox">
                    <input type="checkbox" id="chbox" /><b>Free</b> 1 Hour Pickup
                </div>
            </div>
            <div className="box2">
            {/* <SimpleGrid columns={4} spacing={10}> */}
             {
                Productarr.map((el) => (
                    <Box>
                        <Link id="li" to = {`/productpage/${el.id}`}>
                        <Card id="card" maxW='sm' >
                            <CardBody>
                                {/* <div className="pic" style={{width:'300px', height:'400px'}}> */}
                                <img
                                id="productimage"
                                src={el.img1}
                                alt={el.title}
                                />
                                {/* </div> */}
                                <Stack mt='6' spacing='0px'>
                                    {/* <div className="Title"> */}
                                    <Text className="sty">{el.styles}Styles</Text>
                                    <Text className="tit">{el.title}</Text>
                                    {/* </div> */}
      {/* <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
        </Text> */}
                                    <div className="detail">
                                        <div className="det">
                                        <Text className="fpr" >{el.fprice }</Text>
                                        <Text className="pr" >{el.price}</Text>
                                        <Text className="disc" >{el.dis}</Text>
                                        </div>
                                        <div className="three">
                                        <ButtonGroup >
                                            <button className="addicn">+</button>
                                        </ButtonGroup>
                                        </div>
                                    </div>
                                </Stack>
                            </CardBody>
                            <Divider />
                            
                                {/* <CardFooter> */}
    {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
      Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
      Add to cart
      </Button>
      </ButtonGroup>
      </CardFooter> */}
                        </Card>
                    </Link>
                        {/* <div><img src={el.img} alt={el.title} /></div>
                        <div id="style">{el.style}</div>
                        <div id="prdctTitle">{el.title}</div> */}
                        {/* <div className="name">{el.title}</div> */}
                        {/* <div className="price">{el.fprice}{el.price}{el.dis}</div> */}
                        {/* <div className="details"><h4>Product Details:</h4></div> */}
                        {/* <div className="descr">{el.description}</div> */}
                        {/* <div className="category">{el.category}</div> */}
                        {/* <div id='rate'>
                         <p className='rate'>Ratings: {el.rating.rate}</p>
                         <p className='rate'>Reviews: {el.rating.count}</p> */}
                         {/* <button onClick={() => {}}> + </button>
                         <button onClick={() => {addToCart(el)}}>Add To cart</button> */}
                    </Box>
                ))
             }
            {/* // </SimpleGrid> */}
            </div>
    </div>
        </>
    )
}
export default ProductPage;
