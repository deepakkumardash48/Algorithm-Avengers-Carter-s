import { Link } from "react-router-dom"
import { ChevronRightIcon } from '@chakra-ui/icons'
import '../CSS/List.css'

export default function ToddlerList() {
    return (
        <div className="baby-list">
            <div className="baby-list_item">
                <Link to={'/toddlergirl'}>Toddler Girl</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/toddlerboy'}>Toddler Boy</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
        </div>
    )
}