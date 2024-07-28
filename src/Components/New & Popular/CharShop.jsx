import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import NPList from './NPList'
import '../CSS/Tab.css'

export default function CharShop() {
    return(
        <div className="baby">
            <div className="container">
                <NPList/>
                <div className='links'>
                    <SimpleGrid row={14} spacing={5}>
                        <div className='link'><Link>Shop All</Link></div>
                        <div className='link'><Link>Toddler Girl</Link></div>
                        <div className='link'><Link>Toddler Boy</Link></div>
                        <div className='link'><Link>Kid Girl</Link></div>
                        <div className='link'><Link>Kid Boy</Link></div>
                        <div className='link'><Link>Bluey</Link></div>
                        <div className='link'><Link>Disney Princess</Link></div>
                        <div className='link'><Link>MARVEL</Link></div>
                        <div className='link'><Link>Mickey Mouse</Link></div>
                        <div className='link'><Link>Minnie Mouse</Link></div>
                        <div className='link'><Link>PAW Patrol</Link></div>
                        <div className='link'><Link>Spider Man</Link></div>
                        <div className='link'><Link>Star Wars</Link></div>
                        <div className='link'><Link>Super Mario</Link></div>
                    </SimpleGrid>
                </div>
                <div className="size">
                    
                </div>
            </div>
        </div>
    )
}
