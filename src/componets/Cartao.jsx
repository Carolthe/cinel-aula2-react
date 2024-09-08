export default function Cartao (props){
    const {teste} = props
    return(
        <div className="bank">
            <img src={teste.img}/>
            <div className="dados">
            <p className="number">{teste.number}</p>
            <div className="expiration">
            <p className="month">{teste.expiraMonth}</p>
            <p className="banco">{teste.bank}</p>
          </div> 
           <p className="nome">{teste.namePeple}</p>
        </div>
        </div>
    )
}