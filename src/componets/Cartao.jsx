export default function Cartao (props){
    const {teste} = props
    return(
        <div className="bank">
            <img src={teste.img}/>
            <p className="texto">{teste.number}</p>
            <p>{teste.expiraMonth}</p>
            <p>{teste.ecpiraYear}</p>
            <p>{teste.bank}</p>
            <p>{teste.namePeple}</p>
        </div>
    )
}