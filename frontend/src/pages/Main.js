import './Main.css';
import logo from '../img/logo.png';

function App() {
  return (
    <div className="Main">
      <body className="body-container">
        {/*Contains Title Logo, Site description, Cool img*/}
        <div className='info-container'>
          {/* Logo Img */}
          <img className='site-logo' src={logo}/>
            {/*Gives Site description*/}
          <p class="site-description"> 
            An intuitive character creation tool to suit your Dungeons and Dragons needs. Made for the player, by the player.
          </p>
          {/* Cool img for main site background */}
          <img className='cool-img' src={logo}/>
        </div>
        {/* Login box */}
        <div className='login-container'>
          <div className='login-box'>
            <h1>Login</h1>
            <form action='#'>
              <div className='input-box'>
                <span className='icon'></span>
                <input type='email'/>
                <label>Email</label>
              </div>
              <div className='input-box'>
                <span className='icon'></span>
                <input type='password'/>
                <label>Password</label>
              </div>
            </form>
          </div>

        </div>
      </body>
      <section classname="footer-container">

      </section>
    </div>
  );
}

export default App;
