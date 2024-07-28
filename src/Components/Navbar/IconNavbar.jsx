import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
} from '@chakra-ui/react'
import SignIn from '../../Pages/NavLinks/signin/signin'

export default function IconNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('')
    const btnRef = React.useRef()
    const [isDisp] = useMediaQuery('(min-width: 650px)')

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const sizes = ['sm']
    return(
        <>
        { isDisp ? 
        <Box style={{
            height:'6vh',
            display:'flex',
            justifyContent:'space-between',
            backgroundColor:'rgba(0,0,0,0.05)'
        }}>
            <Box style={{
                width:'15vw',
                display:'flex',
                justifyContent:'space-between'
            }}>
                <Link to={'/littleplanet'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbuvJaS85AsHglEqm17cTQiIcVuztljPucQ&s" alt="logo" 
                    style={{
                        display:'inline-block',
                        width: '7vw', 
                        height: '6vh'
                    }}
                /></Link>
                <Link to={'/'}>
                <img src="data:image/png;base64,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" alt="logo" 
                    style={{
                        display:'inline-block',
                        width: '7vw', 
                        height: '6vh'
                    }}
                /></Link>
                {/* <Link to={'/littleplanet'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="205" height="50" fill="none" viewBox="0 0 205 50" focusable="false" class="chakra-icon css-8epigf"></svg>
                </Link>
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="202" height="34" fill="none" viewBox="0 0 202 34" focusable="false" class="chakra-icon css-n0m4th"></svg>
                </Link> */}
            </Box>
            <Box style={{
                width:'15vw',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around',
                flexDirection:'row-reverse'
                
            }}>
                <Link to={'/cart'}>
                <svg style={{width:'1.75rem', height:'4vh', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="32.402" height="32" viewBox="0 0 32.402 32" id="cart"><path d="M6 30a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zm18 0a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zM-.058 5a1 1 0 0 0 1 1H3.02l1.242 5.312L6 20c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 0 0 6 26h22.688a1 1 0 0 0 0-2H7.248l.458-2.06c.1.016.19.06.294.06h18.23c1.104 0 1.77-.218 2.302-1.5l3.248-9.964C32.344 8.75 31.106 8 30 8H6c-.156 0-.292.054-.438.088l-.776-3.316A1 1 0 0 0 3.812 4H.942a1 1 0 0 0-1 1zm6.098 5h23.81l-3.192 9.798c-.038.086-.07.148-.094.19-.066.006-.17.012-.334.012H8v-.198l-.038-.194L6.04 10z"></path></svg>
                </Link>
                <Link to={'/track'}>
                <svg style={{width:'1.75rem', height:'4vh', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="box"><path d="M20.47,7.37s0,0,0-.08l-.06-.15a.71.71,0,0,0-.07-.09.94.94,0,0,0-.09-.12l-.09-.07L20,6.78l-7.5-4.63a1,1,0,0,0-1.06,0L4,6.78l-.09.08-.09.07a.94.94,0,0,0-.09.12.71.71,0,0,0-.07.09l-.06.15s0,0,0,.08a1.15,1.15,0,0,0,0,.26v8.74a1,1,0,0,0,.47.85l7.5,4.63h0a.47.47,0,0,0,.15.06s.05,0,.08,0a.86.86,0,0,0,.52,0s.05,0,.08,0a.47.47,0,0,0,.15-.06h0L20,17.22a1,1,0,0,0,.47-.85V7.63A1.15,1.15,0,0,0,20.47,7.37ZM11,19.21l-5.5-3.4V9.43L11,12.82Zm1-8.12L6.4,7.63,12,4.18l5.6,3.45Zm6.5,4.72L13,19.21V12.82l5.5-3.39Z"></path></svg>
                </Link>
                <Link to={'/createacc'}>
                <svg style={{width:'1.75rem', height:'4vh', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="heart"><path d="M45.281 25.915c4.949-5.004 4.949-13.146 0-18.15A12.556 12.556 0 0 0 36.292 4h-.001c-3.396 0-6.59 1.337-8.991 3.765L25 10.09l-2.3-2.325A12.56 12.56 0 0 0 13.709 4a12.56 12.56 0 0 0-8.99 3.765c-4.949 5.004-4.949 13.146 0 18.15L25 46.422l20.281-20.507zM6.141 9.171A10.575 10.575 0 0 1 13.709 6c2.858 0 5.547 1.126 7.569 3.171L25 12.935l3.722-3.764A10.576 10.576 0 0 1 36.291 6c2.858 0 5.546 1.126 7.568 3.171 4.183 4.229 4.183 11.109 0 15.338L25 43.578 6.141 24.509c-4.183-4.229-4.183-11.11 0-15.338z"></path></svg>
                </Link>
                {sizes.map((size) => (
                    <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
          style={{backgroundColor:'rgba(0,0,0,0.01)'}}
          >
          <svg style={{width:'1.75rem', height:'4vh', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" id="user" x="0" y="0" enable-background="new 0 0 16 16" version="1.1" viewBox="0 0 16 16" xml:space="preserve"><path id="path7" fill="#231f20" stroke="none" d="M8 .986A7.022 7.022 0 0 0 .986 8c0 1.874.73 3.635 2.055 4.959A6.965 6.965 0 0 0 8 15.014 7.022 7.022 0 0 0 15.014 8 7.022 7.022 0 0 0 8 .986zm0 1A6.021 6.021 0 0 1 14.014 8a5.984 5.984 0 0 1-1.606 4.074 5.836 5.836 0 0 0-2.564-1.754 2.999 2.999 0 0 0 1.11-2.326A2.997 2.997 0 0 0 7.94 5.006a2.997 2.997 0 0 0-2.988 3.012c0 .929.436 1.75 1.104 2.298a5.846 5.846 0 0 0-2.526 1.698A5.964 5.964 0 0 1 1.986 8 6.021 6.021 0 0 1 8 1.986zm-.035 4.02c1.097 0 1.988.892 1.988 2.012A1.988 1.988 0 0 1 8.03 10c-.029 0-.057-.006-.086-.006-.025 0-.049.005-.074.006a1.994 1.994 0 0 1-1.916-2.006c0-1.096.892-1.988 2.012-1.988zm-.096 4.992c.024.001.048.008.072.008h.024c.022 0 .04-.007.062-.008a4.84 4.84 0 0 1 3.643 1.752A5.963 5.963 0 0 1 8 14.014a5.965 5.965 0 0 1-3.742-1.31 4.848 4.848 0 0 1 3.611-1.706z"></path></svg>
        </Button>
      ))}
                {/* <Button ref={btnRef} onClick={onOpen} style={{backgroundColor:'rgba(0,0,0,0.01)'}}> */}
                {/* </Button> */}
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size={size}
                    >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Sign in</DrawerHeader>
        
                    <DrawerBody>
                        <SignIn />
                    </DrawerBody>
        
                    <DrawerFooter>
                    
                    </DrawerFooter>
                </DrawerContent>
                </Drawer>
            </Box>
        </Box>
            :
        <div></div> 
        }
        </>
    )
}