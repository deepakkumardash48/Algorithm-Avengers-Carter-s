import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import ToddlerList from './ToddlerList'
import '../CSS/Tab.css'

function Toddler() {
    return(
        <div className="baby">
            <div className="container">
                <ToddlerList />
                <div className='links'>
                    <h1>Toddler Clothes</h1>
                    <div className='mid'>
                        <Image borderRadius='full' boxSize='130px' 
                            src='https://www.carters.com/v~4b.168/on/demandware.static/-/Sites-Carters-Library/default/dw2970063c/visualfilters/carters/consumerSegmentGender/COB_TG_VF.jpg' 
                            alt='Toddler Girl'/>
                        <Image borderRadius='full' boxSize='130px' 
                            src='https://www.carters.com/v~4b.137/on/demandware.static/-/Sites-Carters-Library/default/dwd35bb5d8/visualfilters/carters/consumerSegmentGender/COB_TB_VF.jpg'
                            alt='Toddler Boy' />
                    </div>
                    <p>Outfits? They're easy peasy. From sets to jammies to matching tops and bottoms, we have toddlers covered every day!</p>
                </div>
                <div className="size">
                    <h1>Shop By Size</h1>
                    <SimpleGrid columns={5} spacing={5}>
                        <Box><Button colorScheme='gray' variant='outline'>2T</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>3T</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>4T</Button></Box>
                        <Box><Button colorScheme='gray' variant='outline'>5T</Button></Box>
                    </SimpleGrid>
                </div>
            </div>
        </div>
    )
}

export default Toddler;