// import '../Blog/Blog.css';

export const Header = (props) => {
  const {headline, img, imgAlt} = props.data;

  return (
    <header className="blog-headline">
      <div className="row">
        <figure className="blog-image image-fluid col-12">
          <img
            className="blog-image img-responsive img-thumbnail"
            src={img.image}
            alt={imgAlt.imgAlt}
          />
        </figure>
        {/*<div className="blog-opening col-md-6 border-bottom pb-2">*/}
        {/*</div>*/}
      </div>
      <h1 className="headline text-centerS font-style-6">{headline}</h1>
    </header>
  )
}

export const Details = (props) => {

  const {author, date} = props.data;
  const dataTag = props.data.tags;

  return (
    <>
      <div className="row">
        <h5 className="blog-author text-center col-6 ">
          <strong>{author}</strong>
        </h5>
        <h5 className="blog-date text-center col-6">
          <i className="fa fa-calendar-alt" />{date}
        </h5>
      </div>
      <div className="blog-tags-wrapper row pb-2">
        <a href="#" className="blog-tag button-1" id={1}>{dataTag[0]}</a>
        <a href="#" className="blog-tag button-1" id={2}>{dataTag[1]}</a>
        <a href="#" className="blog-tag button-1" id={3}>{dataTag[2]}</a>
        <a href="#" className="blog-tag button-1" id={4}>{dataTag[3]}</a>
      </div>
    </>
  )
}

export const ArticleBody = (props) => {

  const {subHead, content, conclusion, cta, closing} = props.data;

  return (
    <div className="article-body">
      <article>
        <div className="blog-sub-head-1 entry-content text-center">
          <p><strong>{subHead}</strong></p>
        </div>
        <div className="content entry-content">
          <p>{content}</p>
        </div>
        <div className="conclusion entry-content">
          <p className="text-center"><strong>{conclusion}</strong></p>
        </div>
        <div className="blog-content-2 entry-content">
          <p>{closing}</p>
        </div>
        <div className="cta text-center">
          <h3>A call to Action!</h3>
          <h5>We should take this away from this post.</h5>
          <button className="btn cta-btn">{cta}</button>
        </div>
      </article>
    </div>
  )
}

export const SocialBlock = () => {

  return (
    <section className="share-block d-block mx-auto border-top border-bottom py-2 mb-2">
      <button type="button" className="btn btn-primary me-1">
        <i className="fab fa-facebook-f"/>
      </button>
      <button type="button" className="btn btn-primary me-1">
        <i className="fab fa-twitter"/>
      </button>
      <button type="button" className="btn btn-primary me-1">
        <i className="fas fa-link"/>
      </button>
    </section>
  )
}