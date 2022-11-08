
import Link from "next/link"
import Image from "next/image"
import link from "../public/links.json"
import { useState } from "react"

export default function Home() {


const [x, setx] = useState (0)
const [name, setname] = useState ("ilustrations/i_")

 let invi = true

 let images = [1,2,3,4,5,6,7,8,9]
  
 let links = link

 function next() {
  if (x == 1 && name == "sketchs/s_"){setx(x+7)} 
  else if (x == 1 && name == "ilustrations/i_"){setx(x+8)} 
  else if (x == 1 && name == "process/p_"){setx(x+3)}
  else setx(x -1)
}
function back() {
  if (x == 8 && name == "sketchs/s_"){setx(x-x+1)} 
  else if (x == 9 && name == "ilustrations/i_"){setx(x-x+1)} 
  else if (x == 4 && name == "process/p_"){setx(x-x+1)}
  else setx(x +1)
}

let ima = require(`../public/${name}${x}.png`)

 return(
  <div>
      <div className="background"></div>
     <div className={x > 0 ? "active" : "inactive"}>
          <div className="img-s">
        <button onClick={()=>{next()}} className="boton">🡰</button>
        <Image src={ima} width={600} height={600} alt="drawing" />
        <h3 onClick={()=>{setx(0)}} className="img-x">X</h3>
        <button onClick={()=>{back()}} className="boton">🡲</button>
        </div>
        </div>
        
    <div className="invi container">
      <div className="row">
    <h2 id="index" className="text-center mt-4 ilus">FREELANCE ILLUSTRATOR</h2>
    <h1 className="display-1 text-center mt-4 title">TOM CRUDE</h1>
    <h3 className="display-5 text-center mt-4 mb-3 mb-xl-0 status">COMMISSIONS STATUS: <p className="mt-2 green">OPEN</p></h3>
    {
      links.map((link)=>{
        return <Link key={link.id} href={link.url}><a className={link.id == 4 ? "invi col-12 text-center mt-3 link-1 mb-2" : "invi col-12 text-center mt-3 mb-2"}>{link.name}</a></Link>
      })
    }

    </div>
    </div>
    <div className="invi container mt-5">
      <div className="row">
      <h2 id="sketch" className="h3 mt-2 mb-2 text-center">PLACE YOUR WONDERFUL IDEAS RIGHT ON PAPER!</h2>
      {
        images.map((stat)=>{
         
          if (stat != 9){
          let image = require(`../public/sketchs/s_${stat}.png`)
          return (<div key={stat} onClick={()=>{setx(stat); setname("sketchs/s_")}} className="text-center mt-4 image imagess col-xl-3 col-md-4"><Image src={image} width={420} height={420} alt="drawing" priority={true} /></div>)}
            
          else return(<></>)
        })}

    </div>
    </div>
    <div className="container">
      <div className="text-center mt-5">
      <h2 id="ilus" className="iluss mb-4">ILLUSTRATIONS</h2>
      <div className="row">
      {
        images.map((stat)=>{
          let image = require(`../public/ilustrations/i_${stat}.png`)
          return (<div key={stat} onClick={()=>{setx(stat); setname("ilustrations/i_")}} className="mt-4 col-xl-3 image imagess col-md-4"><Image src={image} width={420} height={420} alt="drawing" /></div>)})}
          <div className="mt-3 mb-5 col-xl-5">
          <Link href="/order"><a className="order-1 ">ORDER</a></Link>
          </div>
          </div>
    </div>
    </div>
    <div className="container-fluid text-center process">
      <h2 id="proces" className="mb-4 p-3 iluss">COMMISSION PROCESS</h2>
      <div className="row">
      {
        images.map((stat)=>{
          
          if (stat > 4){return <></>}
          else {let image = require(`../public/process/p_${stat}.png`); return (<div key={stat} onClick={()=>{setx(stat); setname("process/p_")}} className="mt-3 col-xl-6 mb-2 image col-md-4"><Image src={image} width={420} height={420} alt="drawing" /> </div>)}}
          )}
   </div>
    </div>

  <div className="container mt-5 text-center">
    <div className="row">
      <div className="col-xl-6 col-12"> 
      <ul className="mb-5 text-success h3"> Do
      <li>Humans/humanoids/Fantasy humanoid characters</li>
      <li>NSFW</li>
      <li>Couples and ships of any gender</li>
      <li>Fanart</li>
     </ul>
     </div >
     <div className="col-xl-6 col-12">
     <ul className="text-danger h3"> DO NOT
      <li>Realism</li>
     </ul>
     </div>
  </div>
  </div>

  <footer className="container text-center mt-5">
    <h2 className="h2 mb-3">TomCrude</h2>
    <p className="mb-4 mb-xl-5">Hi! I am an anime/manga illustrator and programmer, who loves to draw and bring characters to life! I would love to help you bring your ideas into reality. The software I use is mostly Clip Studio Paint. I can do OC’s, fanarts, covers, manga/anime illustrations, designs; I can easily fit in what you are looking for!</p>
    <div className="row">
    <a className="text-center mb-xl-4" href="#index">BACK TO TOP</a>  
    </div>
    <p className="mt-4 text-muted">© Arselmetti. All rights reserved.</p>
  </footer>

          
  </div>
 )
}



