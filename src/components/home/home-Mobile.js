

const HomeMobile = () => {

  return (

<div className="mobile-home container-fluid text-center d-md-none">
  <div className="mobile-header container-fluid">
  </div>
  <div className="mobile-landing-body">
    <div className="m-body-text container-fluid">
      <h1>hi world</h1>
    </div>
    <div className="m-landing-list-wrapper">
      <ul className="m-landing-list list-group list-group-flush">
        <li className="mobile-landing-li list-group-item btn">Camping</li>
        <li className="mobile-landing-li list-group-item btn">Breeding</li>
        <li className="mobile-landing-li list-group-item btn">Cart Rides</li>
        <li className="mobile-landing-li list-group-item btn">And much more!</li>
      </ul>
    </div>
    <button type="button" className="btn btn-block btn-style">SCHEDULE NOW!</button>
  </div>
</div>

  )
}

export default  HomeMobile;