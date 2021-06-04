import {ThreeThreeCard} from './card'
import {Dropdown} from './dropdown'
import {Showcase} from './showcase'

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