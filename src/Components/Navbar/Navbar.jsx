import React, { useState } from 'react'
import { Collapse, useDisclosure, Box, Flex, Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import { Search2Icon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react'
import AllRoutes from '../Baby/AllRoutesBaby'
import AllRoutesKid from '../Kid/AllRoutesKid'
import AllRoutesToddler from '../Toddler/AllRoutesToddler'
import AllRoutesSale from '../Sale/AllRoutesSale'
import AllRoutesNP from '../New & Popular/AllRoutesNP'
import './Navbar.css'

function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const [isDisp] = useMediaQuery('(min-width: 650px)')
    const [menu, setMenu] = useState(false)

    return(
        <>
        {isDisp ? 
        <div style={{position:'sticky', top:'0', backgroundColor:'white'}}> 
        <Box display={'Flex'} justifyContent={'space-between'} alignItems={'center'} position={'absolute'} width={'98vw'}>
        <p style={{
            display:'inline-block',
            marginLeft:'1.5rem',
            fontSize:'2.5rem',
            fontWeight:'bold',
            color:'#00a9e0'
        }}>carter's</p>
        <InputGroup style={{width:'25%'}}>
            <Input
                type="text"
                placeholder='Find your product'
                style={{
                    marginRight:'2rem',
                    fontSize:'1.2rem', 
                    border:'2px solid rgba(0,0,0,0.1)',
                    borderRadius:'50px'
                }}/>
            <InputRightElement
                pointerEvents='none'
                children={<Search2Icon color='black.5' />}
                />
        </InputGroup>
        </Box>
        <Tabs align='center' position='relative' variant='unstyled'>
            <TabList>
                <Tab><Link style={{textDecoration:'none'}} to={'/'}><div onClick={onToggle}><h1>Baby</h1>Preemie-24M</div></Link></Tab>
                <Tab><Link style={{textDecoration:'none'}} to={'/'}><div onClick={onToggle}><h1>Toddler</h1>2T-5T</div></Link></Tab>
                <Tab><Link style={{textDecoration:'none'}} to={'/'}><div onClick={onToggle}><h1>Kid</h1>4-14</div></Link></Tab>
                <Tab><Link style={{textDecoration:'none'}} to={'/'}><div onClick={onToggle}><h1>New & Popular</h1></div></Link></Tab>
                <Tab><Link style={{textDecoration:'none'}} to={'/'}><div onClick={onToggle}><h1>Sale</h1></div></Link></Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
            <TabPanels>
                <TabPanel>
                    <Collapse in={isOpen} animateOpacity>
                        <Box>
                            <AllRoutes />
                        </Box>
                    </Collapse>
                </TabPanel>
                <TabPanel>
                    <Collapse in={isOpen} animateOpacity>
                        <Box>
                            <AllRoutesToddler />
                        </Box>
                    </Collapse>
                </TabPanel>
                <TabPanel>
                    <Collapse in={isOpen} animateOpacity>
                        <Box>
                            <AllRoutesKid />
                        </Box>
                    </Collapse>
                </TabPanel>
                <TabPanel>
                    <Collapse in={isOpen} animateOpacity>
                        <Box>
                            <AllRoutesNP />
                        </Box>
                    </Collapse>
                </TabPanel>
                <TabPanel>
                    <Collapse in={isOpen} animateOpacity>
                        <Box>
                            <AllRoutesSale />
                        </Box>
                    </Collapse>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
        </div>
            : 
        <div style={{
            position:'sticky',
            top:'0',
            backgroundColor:'white'
        }}>
            <div className='switch' style={{ 
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                padding:'1rem',
             }}>
                <div style={{
                    display:'flex',
                    width:'2.25rem',
                    height:'2rem',
                    top:'0.75rem',
                    left:'0.75rem',
                    zIndex:'1',
                    flexDirection:'column',
                    justifyContent:'space-between'

                }} onClick={() => {
                    setMenu(!menu);
                }}>
                    <div style={{ height:'0.2rem', width:'100%', backgroundColor:'black', borderRadius:'0.2rem' }}></div>
                    <div style={{ height:'0.2rem', width:'100%', backgroundColor:'black', borderRadius:'0.2rem' }}></div>
                    <div style={{ height:'0.2rem', width:'100%', backgroundColor:'black', borderRadius:'0.2rem' }}></div>
                </div>
                <svg style={{ height:'2rem', width:'2rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="search"><g><path d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z"></path></g></svg>
                <p style={{
                    display:'inline-block',
                    // marginLeft:'1.5rem',
                    fontSize:'2.5rem',
                    fontWeight:'bold',
                    color:'#00a9e0'
                }}>carter's</p>
                <svg style={{width:'2rem', height:'2rem', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" id="user" x="0" y="0" enable-background="new 0 0 16 16" version="1.1" viewBox="0 0 16 16" xml:space="preserve"><path id="path7" fill="#231f20" stroke="none" d="M8 .986A7.022 7.022 0 0 0 .986 8c0 1.874.73 3.635 2.055 4.959A6.965 6.965 0 0 0 8 15.014 7.022 7.022 0 0 0 15.014 8 7.022 7.022 0 0 0 8 .986zm0 1A6.021 6.021 0 0 1 14.014 8a5.984 5.984 0 0 1-1.606 4.074 5.836 5.836 0 0 0-2.564-1.754 2.999 2.999 0 0 0 1.11-2.326A2.997 2.997 0 0 0 7.94 5.006a2.997 2.997 0 0 0-2.988 3.012c0 .929.436 1.75 1.104 2.298a5.846 5.846 0 0 0-2.526 1.698A5.964 5.964 0 0 1 1.986 8 6.021 6.021 0 0 1 8 1.986zm-.035 4.02c1.097 0 1.988.892 1.988 2.012A1.988 1.988 0 0 1 8.03 10c-.029 0-.057-.006-.086-.006-.025 0-.049.005-.074.006a1.994 1.994 0 0 1-1.916-2.006c0-1.096.892-1.988 2.012-1.988zm-.096 4.992c.024.001.048.008.072.008h.024c.022 0 .04-.007.062-.008a4.84 4.84 0 0 1 3.643 1.752A5.963 5.963 0 0 1 8 14.014a5.965 5.965 0 0 1-3.742-1.31 4.848 4.848 0 0 1 3.611-1.706z"></path></svg>
                <svg style={{width:'2rem', height:'2rem', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="32.402" height="32" viewBox="0 0 32.402 32" id="cart"><path d="M6 30a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zm18 0a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zM-.058 5a1 1 0 0 0 1 1H3.02l1.242 5.312L6 20c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 0 0 6 26h22.688a1 1 0 0 0 0-2H7.248l.458-2.06c.1.016.19.06.294.06h18.23c1.104 0 1.77-.218 2.302-1.5l3.248-9.964C32.344 8.75 31.106 8 30 8H6c-.156 0-.292.054-.438.088l-.776-3.316A1 1 0 0 0 3.812 4H.942a1 1 0 0 0-1 1zm6.098 5h23.81l-3.192 9.798c-.038.086-.07.148-.094.19-.066.006-.17.012-.334.012H8v-.198l-.038-.194L6.04 10z"></path></svg>
            </div>
            {menu ? 
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
            }}>
                <div style={{
                    padding:'0 1.5rem',
                }}>
                    <div style={{
                        display:'flex', 
                        justifyContent:'space-between', 
                        alignItems:'center',
                        padding:'0.5rem 1rem',
                        borderBottom:'1px solid rgba(0,0,0,0.4)'
                    }}>
                        <p style={{display:'inline-block', fontSize:"1.5rem"}}>Baby</p>
                        <ChevronRightIcon boxSize={10}/>
                    </div>
                    <div style={{
                        display:'flex', 
                        justifyContent:'space-between', 
                        alignItems:'center',
                        padding:'0.5rem 1rem',
                        borderBottom:'1px solid rgba(0,0,0,0.4)'
                    }}>
                        <p style={{display:'inline-block', fontSize:"1.5rem"}}>Toddler</p>
                        <ChevronRightIcon boxSize={10}/>
                    </div>
                    <div style={{
                        display:'flex', 
                        justifyContent:'space-between', 
                        alignItems:'center',
                        padding:'0.5rem 1rem',
                        borderBottom:'1px solid rgba(0,0,0,0.4)'
                    }}>
                        <p style={{display:'inline-block', fontSize:"1.5rem"}}>Kid</p>
                        <ChevronRightIcon boxSize={10}/>
                    </div>
                    <div style={{
                        display:'flex', 
                        justifyContent:'space-between', 
                        alignItems:'center',
                        padding:'0.5rem 1rem',
                        borderBottom:'1px solid rgba(0,0,0,0.4)'
                    }}>
                        <p style={{display:'inline-block', fontSize:"1.5rem"}}>New & Popular</p>
                        <ChevronRightIcon boxSize={10}/>
                    </div>
                    <div style={{
                        display:'flex', 
                        justifyContent:'space-between', 
                        alignItems:'center',
                        padding:'0.5rem 1rem',
                        borderBottom:'1px solid rgba(0,0,0,0.4)'
                    }}>
                        <p style={{display:'inline-block', fontSize:"1.5rem"}}>Sale</p>
                        <ChevronRightIcon boxSize={10}/>
                    </div>
                    <div style={{padding:'0.5rem 1.5rem'}}><p style={{fontSize:'1.5rem'}}>Little Planet</p></div>
                    <div style={{padding:'0.5rem 1.5rem'}}><p style={{fontSize:'1.5rem'}}>OshKosh B'gosh</p></div>
                </div>
                <div style={{
                    height:'6rem',
                    padding:'0.5rem 2rem',
                    backgroundColor:'rgba(0,0,0,0.1)',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:"flex-end"
                }}>
                    <button style={{height:'3rem' , width:'40%', padding:'0.5rem 2rem', color:'#00a9e0' ,border:'1px solid #00a9e0', borderRadius:'0.5rem'}}>Order</button>
                    <button style={{height:'3rem' , width:'40%', padding:'0.5rem 2rem', color:'#00a9e0' ,border:'1px solid #00a9e0', borderRadius:'0.5rem'}}>Hearts</button>
                </div>
            </div>
                : 
            <div></div>    
            }
        </div>    
        }
        <Box style={{height:'6vh' ,backgroundColor:'rgba(0,0,0,0.05)'}}></Box>
        </>
    )
}

export default Navbar