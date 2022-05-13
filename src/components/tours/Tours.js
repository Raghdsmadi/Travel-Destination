import "./Tours.css"

function  Tours (props)
{

    return (
    <> 
    
  <div className="card"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}>{props.name}</div>
      <div>
        <img src={props.image} className="tt" style = {{alignItems: "center"} }  alt = "seen"/>  
        </div>
        </>
    
    )
}

export default Tours ;

{/* <div><img  src={props.img} alt={props.alt} />

    <p> {props.name}</p>
    
    </div>  */}