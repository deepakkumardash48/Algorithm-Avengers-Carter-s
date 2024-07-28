import { Link } from "react-router-dom"
import { ChevronRightIcon } from '@chakra-ui/icons'
import AllRoutes from "./AllRoutesBaby"
import '../CSS/List.css'

export default function BabyList() {
    return (
        <div className="baby-list">
            <div className="baby-list_item">
                <Link to={'/babygirl'}>Baby Girl</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/babyboy'}>Baby Boy</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/babyneutral'}>Baby Neutral</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>Baby Clothes</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            <div className="baby-list_item">
                <Link to={'/'}>Baby Nursery & Gear</Link>
                <ChevronRightIcon boxSize={6}/>
            </div>
            
        </div>
    )
}