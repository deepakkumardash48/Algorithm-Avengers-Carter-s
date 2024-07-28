import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import BabyList from './BabyList'
import '../CSS/Tab.css'

function Baby() {
    return(
        <div className="baby">
            <div className="container">
                <BabyList></BabyList>
                <div className='links'>
                    <h1>Baby Clothes</h1>
                    <div className='mid'>
                        <Image borderRadius='full' boxSize='130px' 
                            src='https://www.carters.com/v~4b.137/on/demandware.static/-/Sites-Carters-Library/default/dw5b3b0e96/visualfilters/carters/consumerSegmentGender/COB_BG_VF.jpg' 
                            alt='Baby Girl'/>
                        <Image borderRadius='full' boxSize='130px' 
                            src='https://www.carters.com/v~4b.137/on/demandware.static/-/Sites-Carters-Library/default/dwbaae8a16/visualfilters/carters/consumerSegmentGender/COB_BB_VF.jpg'
                            alt='Baby Boy' />
                    </div>
                    <p>Big styles for your littlest loves! Tiny sets, sweet sleep & play, must-have outfits... we have baby covered from the start!</p>
                </div>
                <div className="size">
                    <h1>Shop By Size</h1>
                    <SimpleGrid columns={5} spacing={5}>
                        <Box><Button colorScheme='gray' variant='outline'>P</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>NB</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>3M</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>6M</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>9M</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>12M</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>18M</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>24M</Button></Box>
                    </SimpleGrid>
                </div>
            </div>
        </div>
    )
}

export default Baby;