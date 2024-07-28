import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import BabyList from './BabyList'
import '../CSS/Tab.css'

function BabyBoy() {
    return(
        <div className="baby">
            <div className="container">
                <BabyList></BabyList>
                <div className='links'>
                    <SimpleGrid columns={2} spacing={3}>
                        <div className='link'><Link>Shop All Baby Boy</Link></div>
                        <div className='link'><Link>Best Sellers</Link></div>
                        <div className='link'><Link>New Arrivals</Link></div>
                        <div className='link'><Link>Mix & Match</Link></div>
                        <div className='link'><Link>Sets</Link></div>
                        <div className='link'><Link>Multipacks</Link></div>
                        <div className='link'><Link>Pajamas</Link></div>
                        <div className='link'><Link>One Piecs</Link></div>
                        <div className='link'><Link>Tops</Link></div>
                        <div className='link'><Link>BodyShuits</Link></div>
                        <div className='link'><Link>Shorts</Link></div>
                        <div className='link'><Link>Jeans</Link></div>
                        <div className='link'><Link>Overalls</Link></div>
                        <div className='link'><Link>Swimwear</Link></div>
                        <div className='link'><Link>Accessories</Link></div>
                        <div className='link'><Link>Clearance</Link></div>
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

export default BabyBoy;