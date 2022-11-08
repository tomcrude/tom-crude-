import Image from "next/image"
import Back from "../components/button-back"

export default function order() { 
    let images = [1,2,3]
    return(
     <div className="container-fluid text-center">
        <p className="mt-4">Please note that this commission page is for reference only! If you have any inquiries in regard to a custom illustration, please contact me directly.</p>
        <div className="process p-1">
        {
        images.map((stat)=>{
          let image = require(`../public/prices/t${stat}.png`)
            if (stat == 3){return (<div key={stat} className="mt-3"><Image src={image} width={620} height={590} alt="drawing" /></div>)}
          return (<div key={stat} className="mt-3"><Image src={image} width={500} height={395} alt="drawing"/></div>)
        })}
        </div>
        <p>Detailed background have an extra pricing</p>
        <p>Extra Character - +100%</p>
        <p className="text-danger">PRICE MAY VARY DEPENDING ON COMPLEXITY</p>
        <div className="row mt-4 mb-4">
        <Back />
        </div>
     </div>
    )
   }