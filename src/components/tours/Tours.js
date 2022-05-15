import "./Tours.css"
import Tour from "./tour/Tour";
import React from "react";

function  Tours (props)
{

    return (
    <> 
     {
            props.tours.map(city => {
                return(
                    <Tour key={city.id} city={city}/>

                )
            })
        }
  
        </>
    
    )
}

export default Tours ;

{/* <div><img  src={props.img} alt={props.alt} />

    <p> {props.name}</p>
    
    </div>  */}



    {/* <div className="card"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}>{props.name}</div>
      <div>
        <img src={props.image} className="tt" style = {{alignItems: "center"} }  alt = "seen"/>  
        </div> */}