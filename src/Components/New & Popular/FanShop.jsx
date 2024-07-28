import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import NPList from './NPList'
import '../CSS/Tab.css'

export default function FanShop() {
    return(
        <div className="baby">
            <div className="container">
                <NPList/>
                <div className='links'>
                    <SimpleGrid row={14} spacing={5}>
                        <div className='link'><Link>Collegiate Sports</Link></div>
                        <div className='link'><Link>NFL Sports</Link></div>
                        <div className='link'><Link>MLB Sports</Link></div>
                        <div className='link'><Link>NBA Sports</Link></div>
                        <div className='link'><Link>HBCUs</Link></div>
                    </SimpleGrid>
                </div>
                <div className="size">
                    
                </div>
            </div>
        </div>
    )
}
