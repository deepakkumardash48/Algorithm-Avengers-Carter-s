import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import KidList from './KidList'
import '../CSS/Tab.css'

export default function Kid() {
    return(
        <div className="baby">
            <div className="container">
                <KidList />
                <div className='links'>
                    <h1>Kid Clothes</h1>
                    <div className='mid'>
                        <Image borderRadius='full' boxSize='130px' 
                            src='https://www.carters.com/v~4b.137/on/demandware.static/-/Sites-Carters-Library/default/dw87f10c5d/visualfilters/carters/consumerSegmentGender/COB_KG_VF.jpg' 
                            alt='Girl'/>
                        <Image borderRadius='full' boxSize='130px' 
                            src='https://www.carters.com/v~4b.137/on/demandware.static/-/Sites-Carters-Library/default/dwf49b81e0/visualfilters/carters/consumerSegmentGender/COB_KB_VF.jpg'
                            alt='Boy' />
                    </div>
                    <p>Easy on, easy go! We've made dressing easy peasy for your kids, from matching tops and bottoms to mix-and-match jammies to fun graphic tees that show off their personalities!</p>
                </div>
                <div className="size">
                    <h1>Shop By Size</h1>
                    <SimpleGrid columns={5} spacing={5}>
                        <Box><Button colorScheme='gray' variant='outline'>4</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>5</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>6</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>7</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>8</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>10</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>12</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>14</Button></Box>
                    </SimpleGrid>
                </div>
            </div>
        </div>
    )
}
