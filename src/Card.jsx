import React from "react";

function Card(props){
    return(
      <>
      <div className="cards">
      <div className="card">
      {/* <div className="col-sm-12 cols-md-6 col-lg-6 col-12"/> */}
       <img src={props.imgsrc} alt="myPic" className='card__img'/>
       <div className="card__info">
        <span className="card__category" >{props.title}</span>
     <h3 className="card__title">{props.sname}</h3>
     <a href={props.link} target="_blank">
      <button>Watch Now</button>
     </a>
       </div>
      </div>
      </div>
      </>
    )
  }
  export default Card;