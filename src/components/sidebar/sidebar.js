// import image from './group-photo-trail-ride.jpeg';
// import Ad from '../Components/Ads/Ad';

const Calender = () => {

  return (
    <div className="calender">
      {/*<Img src="..." alt="hi"/>*/}
      <h1>hello</h1>
    </div>
  )
}

const SideBar = (props) => {

// const image = require('/group-photo-trail-ride.jpeg');
  return (
    <div className="sideBar col-sm-2 sidenav" id={props.id}>
      <aside className="side-bar">
        <Calender/>
      </aside>
    </div>
  )
}

export default SideBar;
