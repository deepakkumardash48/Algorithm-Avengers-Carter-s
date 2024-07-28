import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import KidList from './KidList'
import '../CSS/Tab.css'

export default function KidBoy() {
    return(
        <div className="baby">
            <div className="container">
                <KidList />
                <div className='links'>
                    <SimpleGrid columns={2} spacing={3}>
                        <div className='link'><Link>Shop All Kid Boy Clothes</Link></div>
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
                        <div className="link"><Link>Sokes & Underwear</Link></div>
                        <div className='link'><Link>Shoes(Sizes 13-14Y)</Link></div>
                        <div className='link'><Link>Overalls</Link></div>
                        <div className='link'><Link>Swimwear</Link></div>
                        <div className='link'><Link>Accessories</Link></div>
                        <div className='link'><Link>Clearance</Link></div>
                    </SimpleGrid>
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
