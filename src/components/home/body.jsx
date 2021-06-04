import {ThreeThreeCard} from '../layouts/three-three.jsx';
import {Dropdown} from '../buttons/dropdown.jsx';
import {Showcase} from '../cards/showcase.jsx';

export const Body = () => {

    return (
        <div className="item home center-it">
            <h1 className="big-item">Hello World</h1>
            <ThreeThreeCard />
            <Dropdown />
            <Showcase />
            
        </div>
    )
}