import Back from "../components/button-back"

export default function tos() {
    
   return(
    <div className="container text-center mt-5">
      <div>
        <h2 className="h2 mb-4 text-decoration-underline">TERMS OF SERVICE</h2>
        <ul>
      <li>✒ An extra fee is applied for Commercial Use.</li>
      <li>✒ I reserve the right to use non-commercial commissions for personal promotion (social networks, portfolio, artbook)</li>
      <li>✒ No one is allowed to edit, trace, copy, or modify any finished art I made without permission.</li>
      <li>✒ Commissions can only be refunded when no work has been done yet.</li>
     </ul>
     </div> 
     
     <div className="mt-4">
     <h2 className="h2 mb-4 text-decoration-underline">PROCESS AND PAYMENT </h2>
     <ul>
      <li>✒ Payment via PayPal only.</li>
      <li>✒ Commissions phases are as: <ol>
        <li>pose sketch.</li>
        <li>detailed sketch</li>
        <li>lineart</li>
        <li>flat colors</li>
        <li>rendering</li>
        </ol> </li>
      <li>✒ Payments are done first; possiblity of 50% before and 50% after sketch.</li>
      <li>✒ 5 revisions max in the sketch phase.</li>
      <li>✒ Revisions after the sketch phase will be charged depending on complexity.</li>
      <li>✒ Commissions are usually completed within one to two weeks.</li> 
     </ul>
      </div>
      <div className="mb-5 mt-5 row">
      <Back/>
      </div>
      </div>    
   
   )
  }
  
  