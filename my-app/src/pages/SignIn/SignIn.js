import './SignIn.css'
function SignIn () {
    return (
     <>
    <div className="SignInBackground">
        <form className="SignInPoppup">
<h1 className="SignInPoppupHeder">Sign in</h1>
<div className="SignInPoppupSubtitle">Email</div>
<input type="email" name="email" placeholder="Enter email" className="SignInPoppupStyleInput SignInPoppupLogin"/>
<div className="SignInPoppupSubtitle SignInVisibility">password</div>
<input type="password" placeholder="Enter password" className="SignInPoppupStyleInput SignInPoppupPassword"/>
<button className="SignInPoppupButtonEnter">Sign in</button>
        </form>
    </div>
    </>
    )
    }
    export default SignIn;
