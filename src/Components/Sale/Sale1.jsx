import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import SaleList from './SaleList'
import '../CSS/Tab.css'

export default function Sale1() {
    return(
        <div className="baby">
            <div className="container">
                <SaleList/>
                <div className='links'>
                    <SimpleGrid row={7} spacing={5}>
                        <div className='link'><Link>Shop All Sale</Link></div>
                        <div className='link'><Link>Baby Girl</Link></div>
                        <div className='link'><Link>Baby Boy</Link></div>
                        <div className='link'><Link>Toddler Girl</Link></div>
                        <div className='link'><Link>Toddler Boy</Link></div>
                        <div className='link'><Link>Kid Girl</Link></div>
                        <div className='link'><Link>Kid Boy</Link></div>
                    </SimpleGrid>
                </div>
                <div className="size">
                    
                </div>
            </div>
        </div>
    )
}
