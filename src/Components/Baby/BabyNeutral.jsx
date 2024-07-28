import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import BabyList from './BabyList'
import '../CSS/Tab.css'

function BabyNeutral() {
    return(
        <div className="baby">
            <div className="container">
                <BabyList></BabyList>
                <div className='links'>
                    <SimpleGrid row={9} spacing={5}>
                        <div className='link'><Link>Shop All Baby Neutral</Link></div>
                        <div className='link'><Link>Best Sellers</Link></div>
                        <div className='link'><Link>Sets</Link></div>
                        <div className='link'><Link>Multipacks</Link></div>
                        <div className='link'><Link>Pajamas</Link></div>
                        <div className='link'><Link>One Piecs</Link></div>
                        <div className='link'><Link>Tops</Link></div>
                        <div className='link'><Link>Bottoms</Link></div>
                        <div className='link'><Link>Accessories</Link></div>
                    </SimpleGrid>
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

export default BabyNeutral;