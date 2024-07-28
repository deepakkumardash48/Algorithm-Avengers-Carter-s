// export default SignIn
import './signin.css'
// function SignIn()
// {
//     return (
// <>
//     <div style={{backgroundColor:"rgb(246, 262, 300)", display: "flex", flexDirection: 'column', alignItems: 'flex-start', color:'black',height:'700px',width:'150%' }}>
//         <div style={{color:'black'}}><b>Sign in</b></div>
//            <div>
//             <p style={{color:'black'}}>Hello again!</p>
//             <div className="box">
//                 <input type="text"  placeholder="Email" className= "input" />
//             </div>
//             <div className="box">
//                 <input  className= "input" type="password" placeholder="Password"/>
//             </div>
//             <div className='box3'>
//              <div style ={{ marginRight:'10px'}}><input type="checkbox" /><span class="chakra-checkbox__label css-1po2mr0" data-checked>Remember Me</span></div>
//             <button type="button"  style={{backgroundColor:'white',color:'black', border:'white',}}><u>Forgot Password?</u></button>
//             </div>
//             <button type="submit" class="chakra-button css-1pm9jj3" data-testid="login-form-signin" style={{color:'white',backgroundColor:'lightblue',width:'150%', marginTop:'20px'}}><b>Sign In</b></button>
//         </div>

//     </div>
// </>
//     )
// }
import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState({}); // store users in local storage

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users[email]) {
      if (users[email] === password) {
        alert('Sign in successful!');
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      setUsers({ ...users, [email]: password });
      alert('Sign in successful!');
    }
  };

  const handleExit = () => {
    window.close(); // or window.history.back() to go back to previous page
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{display:'flex', justifyContent:'flex-end'}}>
      <div className='container' style={{ display: "flex", flexDirection: 'column',justifyContent:'flex-start', alignItems: 'flex-start', color: 'black', height: '700px', width: '35vw' }}>
        {/* <div style={{ color: 'black' }}><b>Sign in</b>
          <span style={{ float: 'right', cursor: 'pointer' }} onClick={handleExit}>×</span>
        </div> */}
        <div>
          <p style={{ color: 'black' }}>Hello again!</p>
          <div className="box">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input" />
          </div>
          <div className="box">
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input" />
            <span style={{ cursor: 'pointer' }} onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</span>
          </div>
          <div className='box3'>
            <div style={{ marginRight: '10px' }}><input type="checkbox" /><span class="chakra-checkbox__label css-1po2mr0" data-checked>Remember Me</span></div>
            <a type="button" style={{ backgroundColor: 'white', color: 'black', border: 'white' }}><u>Forgot Password?</u></a>
          </div>
          <button type="submit" class="chakra-button css-1pm9jj3" data-testid="login-form-signin" style={{ 
            color: 'white', 
            backgroundColor: "rgba(25,183,222,1)", 
            height:'7.5vh', 
            width: '100%', 
            borderRadius:'1rem',
            marginTop: '20px' 
          }} onClick={handleSubmit}><b>Sign In</b></button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;