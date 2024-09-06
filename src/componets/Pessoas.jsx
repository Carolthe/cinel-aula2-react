export default function Pessoas (props){
    const {pessoas} = props

    return(
        <div className="pessoas">
          <img src={pessoas.picture} />
          <div>
          <p><b>First Name:</b> {pessoas.firstName}</p>
          <p><b>Last Name:</b> {pessoas.lastName}</p>
          <p><b>Gender:</b> {pessoas.gender}</p>
          <p><b>Height:</b> {pessoas.height} m</p>
          <p><b>Birth: </b>{pessoas.birth}</p>
        
       </div> 
       </div>
    )
}