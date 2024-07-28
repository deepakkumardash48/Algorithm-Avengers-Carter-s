// import React, { cloneElement } from "react";
// export  default CreateAccount;
// import './create.css';
// function CreateAccount()
// {
//           return(
//             <>
// <div style={{backgroundColor:"rgb(246, 262, 300)", display: "flex", flexDirection: 'column', alignItems: 'flex-start', color:'black'}}>
//             <div>
//                 <div><b>Join the family</b></div>
//                 <div>So happy you 're here ;</div>
//             </div>
// <br/>
//             <div className="boxes">
//                 <input type="text" placeholder="First Name" className="inputs"/>
//                 <div aria aria-live="polite">Required Field</div>
//             </div>
// <br />
//             <div className="boxes">
//             <input type="text" placeholder="Last Name" className="inputs" />
//             <div aria aria-live="polite">Required Field</div>
//             </div>
// <br />
//             <div className="boxes"> 
//                 <input type="text" placeholder="Email" className="inputs"/>
//                 <div aria-live="polite">Required Field</div>
//             </div>
// <br />
//  <div className="boxes" > 
//      <input type="password" placeholder="Password"className="inputs" />
     
//     <div aria-live="polite">Required Field</div>
//  </div>
// <br />
//   <div className="boxes" >
//     <input type="password" placeholder="Password Confirmation" className="inputs"/>
    
//     <div aria-live="polite">Password don't match</div>
//   </div>
// <br />
//   <div style={{ marginBottom: 10 }}>
//    <div style={{ display: 'flex', alignItems: 'center' ,marginBottom: -10}}>
//     <input type="checkbox" />
//     <p style={{color:'black'}}>I agree to the Carter's Rewards™</p>
//     <a href="https://www.carters.com/loyaltyTerms-Conditions.html" style={{ display: 'inline-block' }}><u>Terms & Conditions</u></a>
//    </div>
//    <div style={{ display: 'flex', alignItems: 'center',marginBottom: -10}}>
//     <input type="checkbox" />
//     <p style={{color:'black'}}>I want to receive emails</p>
//    </div>
//    <div style={{ display: 'flex', alignItems: 'center' ,marginBottom: 5 }}>
//     <input type="checkbox" />
//     <p style={{color:'black'}} >I want to receive texts and agree to</p>
//     <a target="_blank" rel="noopener" href="https://www.carters.com/cs-messaging-carters.html"><u>Terms & Conditions</u></a>
//    </div>
//    </div>
//     <div>
//    <button type="submit" class="chakra-button css-qhzyx7" data-testid="create-account-form-button-submit" aria-label="submit button" disabled>Create Account</button>
//     </div>
//  </div>
//  </>
// )
// }
import React, { useState } from "react";
import './create.css';

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [wantEmails, setWantEmails] = useState(false);
  const [wantTexts, setWantTexts] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateButton, setShowCreateButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!agreeToTerms || !wantEmails || !wantTexts) {
      setError('Please agree to the terms and conditions');
      return;
    }

    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      password,
    });

    

    // Simulate a successful API response
    setTimeout(() => {
      alert('User created successfully!');
      console.log('User created successfully!');
    }, 2000);
  };

  const handleInputChange = () => {
    if (firstName && lastName && email && password && confirmPassword && agreeToTerms && wantEmails && wantTexts) {
      setShowCreateButton(true);
    } else {
      setShowCreateButton(false);
    }
  };

  return (
    <div className='cont'>
      <div>

      <div>
        <div><b>Join the family</b></div>
        <div style={{display:'flex',textAlign:'left'}}>So happy you're here ;</div>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="boxes">
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First Name" className="inputs" onBlur={handleInputChange} />
          {firstName ? '' : <div style={{ color: 'red' }}>Required Field</div>}
        </div>
        <br />
        <div className="boxes">
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last Name" className="inputs" onBlur={handleInputChange} />
          {lastName ? '' : <div style={{ color: 'red' }}>Required Field</div>}
        </div>
        <br />
        <div className="boxes">
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="inputs" onBlur={handleInputChange} />
          {email ? '' : <div style={{ color: 'red' }}>Required Field</div>}
        </div>
        <br />
        <div className="boxes" style={{ position: 'relative' }}>
          <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="inputs" onBlur={handleInputChange} />
          <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10, top: 10, cursor: 'pointer' }}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
          {password ? '' : <div style={{ color: 'red' }}>Required Field</div>}
        </div>
        <br />
        <div className="boxes" style={{ position: 'relative' }}>
          <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" className="inputs" onBlur={handleInputChange} />
          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: 10, top: 10, cursor: 'pointer' }}>
            {showConfirmPassword ? 'Hide' : 'Show'}
          </span>
          {confirmPassword ? '' : <div style={{ color: 'red' }}>Required Field</div>}
        </div>
        <br />
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: -10 }}>
            <input type="checkbox" checked={agreeToTerms} onChange={(event) => setAgreeToTerms(event.target.checked)} onBlur={handleInputChange} style={{backgroundColor:'solid white'}} />
            <p style={{ color: 'black' }}>I agree to the Carter's Rewards™</p>
            <a href="https://www.carters.com/loyaltyTerms-Conditions.html" style={{ display: 'inline-block' }}><u>Terms & Conditions</u></a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: -10 }}>
            <input type="checkbox" checked={wantEmails} onChange={(event) => setWantEmails(event.target.checked)} onBlur={handleInputChange} />
            <p style={{ color: 'black' }}>I want to receive emails</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
            <input type="checkbox" checked={wantTexts} onChange={(event) => setWantTexts(event.target.checked)} onBlur={handleInputChange} />
            <p style={{ color: 'black' }}>I want to receive texts and agree to</p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.carters.com/cs-messaging-terms-conditions.html"><u>Terms & Conditions</u></a>
          </div>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {showCreateButton && <button type="submit" style={{width:'120%',color:' solid white',backgroundColor:'lightblue'}}>Create Account</button>}
      </form>
      </div>
    </div>
  );
}

export default CreateAccount;
