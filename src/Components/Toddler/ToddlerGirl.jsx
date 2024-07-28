import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import ToddlerList from './ToddlerList'
import '../CSS/Tab.css'

export default function ToddlerGirl() {
    return(
        <div className="baby">
            <div className="container">
                <ToddlerList />
                <div className='links'>
                    <SimpleGrid columns={2} spacing={3}>
                        <div className='link'><Link>Shop All Toddler Girl Clothes</Link></div>
                        <div className='link'><Link>Best Sellers</Link></div>
                        <div className='link'><Link>New Arrivals</Link></div>
                        <div className='link'><Link>Mix & Match</Link></div>
                        <div className='link'><Link>Sets</Link></div>
                        <div className='link'><Link>Multipacks</Link></div>
                        <div className='link'><Link>Pajamas</Link></div>
                        <div className='link'><Link>One Piecs</Link></div>
                        <div className='link'><Link>Tops</Link></div>
                        <div className='link'><Link>Dresses & Rompers</Link></div>
                        <div className='link'><Link>Shorts & Skirts</Link></div>
                        <div className='link'><Link>Leggings & Pants</Link></div>
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
