// import '../Components/app/App.css';
// import { Card1, jsonCard, CreateCard } from '../Components/Cards';

// let jsonCard = {
//   title: "Horseback Riding",
//   body: [
//     <h1><strong>SINGLE</strong>: $50</h1>,
//     <div className="row spacer" />,
//     <h1><strong>$100</strong> Weekly</h1>,
//     <div className="row spacer" />,
//     <h1><strong>$500</strong>: Month</h1>,
//   ],
//   footer: [
//     <h3>$50</h3>,
//     <h4>per day</h4>,
//     <button className="btn btn-lg">Schedule Now!   <span className="fa fa-calendar" /></button>
//   ]
// }

const Pricing = () => {

  return (
    <div className="container-fluid" id="pricing">
      <div className="text-center">
        <h2>Pricing</h2>
        <h4>Some example cards</h4>
      </div>
      <div className="col-sm-4 card">
        <div className="panel panel-default text-center">
          <div className="panel-heading">
            <h1><strong>Horseback Riding</strong></h1>
          </div>
          <div className="panel-body">
            <h1><strong>SINGLE</strong>: $50</h1>
            <div className="row spacer"/>
            <h1><strong>$100</strong> Weekly</h1>
            <div className="row spacer"/>
            <h1><strong>$500</strong>: Month</h1>
          </div>
          <div className="panel-footer">
            <h3>$50</h3>
            <h4>per day</h4>
            <button className="btn btn-lg">Schedule Now! <span className="fa fa-calendar"/></button>
          </div>
        </div>
      </div>
      <div className="col-sm-4 card">
        <div className="panel panel-default text-center">
          <div className="panel-heading camping-heading img-responsive">
            <h1><strong>Camping</strong></h1>
          </div>
          <div className="panel-body camping-panel-body img-responsive">
            <div className="backboard">
              <h2 className="text-left"><strong>Traveler </strong>$40</h2>
              <h2 className="text-left"><strong>Tent </strong>$50</h2>
              <h2 className="text-left"><strong>Cabin </strong>$75</h2>
              <h2 className="text-left"><strong>Horse </strong>$100</h2>
            </div>
          </div>
          <div className="panel-footer">
            <h3>Sites must be reserved</h3>
            <h4>Partial refund on cancellation</h4>
            <button className="btn btn-lg"><span className="fa fa-calendar"/> Reserve Now!</button>
          </div>
        </div>
      </div>
      <div className="col-sm-4 card">
        <div className="panel panel-default text-center panel-img">
          <div className="panel-heading">
            <h1><strong>Breeding</strong></h1>
            <img
              className="breed-pricing-img-puppy img-fluid container"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F8%2FHusky-PNG-Transparent-Images.png&f=1&nofb=1"
            />
            <img
              className="breed-pricing-img-rabbit img-fluid container"
              src="https://freepngimg.com/download/rabbit/21-rabbits-png-image.png"
            />
          </div>
          <div className="panel-body">
            <h2><strong>Dogs</strong></h2>
            <h4><strong>Huskies</strong>: Available</h4>
            <h4><strong>Golden Retriever</strong>: Available</h4>
            <h4><strong>Goberians</strong>: Not Available</h4>
            <h3><strong>Horses</strong></h3>
            <h4><strong>$450</strong>Horse1</h4>
            <h4><strong>$650</strong>Horse2</h4>
            <h3>Others</h3>
            <h4><strong>Rabbits</strong>: 3 Available</h4>
          </div>
          <div className="panel-footer">
            <h3>$200</h3>
            <h4>Prices Vary</h4>
            <button className="btn btn-lg">Check Availability</button>
          </div>
        </div>
      </div>
      {/*<Card1 title={jsonCard.title} body={jsonCard.body} footer={jsonCard.footer}/>*/}
      <CreateCard/>
    </div>
  )
}

export default Pricing;