import React from "react";

export const AboutCard = (props) => {

  let {id, title, subTitle, img, section1, section2} = props;

  return (
    <div className="about-us row container-fluid p-0 m-0" id={id}>
      <title className="about-title row container-fluid w-100 d-flex col-sm p-0 m-0">
        <h1 className="title font-style-7 m-0 p-0 text-center">{title}</h1>
      </title>
      <div className="about-us-sub-heading row container-fluid w-100 d-flex col-sm text-center p-0 m-0">
        <h3 className="about-title d-flex justify-content-center m-0 p-0">{subTitle}</h3>
      </div>
      <section className="about-content about-img col-xs m-0 p-0">
        <figure className="figure container col-sm m-0 p-0">
          <img src={img} alt="a horse" className="about-image figure-img responsive mx-auto d-block m-0 p-0"/>
        </figure>
        <div className="start-paragraph col-sm container-fluid text-center m-0 p-0">
          <p className="about-paragraph-50-1 col-md-4 col-sm col-md-*">{section1}</p>
          <p className="about-paragraph-50-1 col-md-4 col-sm col-md-*">{section2}</p>
        </div>
      </section>
    </div>
  )
}

export const ValuesCard = (props) => {

  let {
    id,
    icon,
    title,
    notationFocus1,
    notationAnswer1,
    notationFocus2,
    notationAnswer2,
    body
  } = props;

  return (

    <div className="values container-fluid row d-flex p-0 m-0" id={id}>
      <div className="row m-0 p-0">
        <div className="col-sm spacer"/>
        <div className="col-sm">
          <i className={icon}/>
        </div>
        <div className="values container-fluid">
          <title className="title row">
            <h2>{title}</h2>
          </title>
          <section className="notable container-fluid row">
            <div className="notation-1">
              <h4><strong>{notationFocus1}</strong>{notationAnswer1}</h4>
            </div>
            <div className="notation-2">
              <p><strong>{notationFocus2}</strong>{notationAnswer2}</p>
            </div>
          </section>
          <section className="description container-fluid text-center">
            <p>{body}</p>
          </section>
        </div>
      </div>
    </div>
  )
}


export const CardFrame = (props) => {

  let cardData = props.CardFrame;

  const {id, cardImg, cardTitle, cardText, item1, item2, item3, cardLinkTitle, link1, link2} = cardData;
  console.log(props)
  return (
    <div className="services-card" id={id}>
      <img src={cardImg} className="card-img-top" alt={'...'}/>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item item-1">{item1}</li>
        <li className="list-group-item item-2">{item2}</li>
        <li className="list-group-item item-3">{item3}</li>
      </ul>
      <div className="card-body">
        <p className="card-link-title">{cardLinkTitle}</p>
        <a href="#" className="card-link card-link1">{link1}</a>
        <a href="#" className="card-link card-link-2">{link2}</a>
      </div>
    </div>

  )
}
