import './css/CreateAccount.css';

function CreateAccount() {
  return (
    <div class='CreateAccount'>
      {/* Background */}
      <div class='createAcc-container'>
        {/* Border */}
        <div class='createAcc-wrapper'>
          <div class='createAcc-form'>
            {/* Create Account Header */}
            <h1>Create an Account</h1>

            {/* Email Input */}
            <div class='input-box'>
              <input type='email'/>
              <label>Email</label>
            </div>

            {/* Password Input */}
            <div class='input-box'>
              <input type='password'/>
              <label>Password</label>
            </div>

            {/* Password Confirm */}
            <div class='input-box'>
              <input type='password'/>
              <label>Confirm Password</label>
            </div>

            <button class='login-button' type="submit">Create Account</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount