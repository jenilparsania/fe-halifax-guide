import neighbourhoods from "../data/neighbourhoods"
import { Link, useParams } from "react-router-dom"
function Neighbourhooddetail(){
    const {slug} = useParams()
    const n = neighbourhoods.find(
        (n) => n.name.toLowerCase().replace(/s+/g,'-') === slug
    )

    if (!n) return <p> Neighbourhood not found </p>

    return(
        <div style={{padding:'2rem' , maxWidth: 600, margin: '0 auto'}}>
            <Link to="/"> Back to Map </Link>
            <div style={{ height : 8, bavkground: n.color, borderRadius: 4, margin: '1rem 0'}}/>
            <h1>{n.name}</h1>
            <p style={{color:'#555', marginTop: '0.5rem'}}>{n.vibe}</p>
        </div>
    )
}
 
export default Neighbourhooddetail