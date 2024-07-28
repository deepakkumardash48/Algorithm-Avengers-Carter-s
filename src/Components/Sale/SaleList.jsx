import { Link } from "react-router-dom"
import { ChevronRightIcon } from '@chakra-ui/icons'
import '../CSS/List.css'

export default function SaleList() {
    return (
        <div className="baby-list">
            <div className="baby-list_item">
                <Link to={'/'}>Everyday Value</Link>
            </div>
            <div className="baby-list_item">
                <Link to={'/sale1'}>Sale</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/under10'}>$10 & Under Deals</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/clearance'}>Clearance</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
        </div>
    )
}