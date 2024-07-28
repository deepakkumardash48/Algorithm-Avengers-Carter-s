import './tract.css'
function TractProduct()
{
    return (
        <>
        <h2 id='track'>Track Your Order</h2>
        <div className="mainBox">
          <div className="inputBox">
            <input type="text" id="ordernumber" placeholder="Order Number" />
            <input type="text" id="email" placeholder="Email"  required/>
          </div>
          
            <button id='trkorder' type="submit">Track Order</button>
            <p  style={{color:' rgb(63, 59, 59)',fontSize:'13px'}}><b>Sign in to see all of your orders</b></p>
            <button id='signin'>Sign In</button>
          
        </div>
        </>
    )
}
export default TractProduct;