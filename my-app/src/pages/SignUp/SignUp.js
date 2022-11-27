import './SignUp.css';

function SignUp () {
    return (

    <div className="SignUpBackground">
        <form className="SignUpPoppup">
<h1 className="SignUpPoppupHeader">Sign up</h1>
<div className="SignUpPoppupContainerSubtitle">
    <div className="SignUpPoppupSubtitle">* Email</div>
    <div className="SignUpPoppupSubtitleErorr  SignUpEmailSubtitle SignUpBlockOff">Email entered incorrectly</div>
</div>
<input type="email" name="email" placeholder="Enter email" className="SignUpPoppupStyleInput SignUpPoppupLogin"/>
<div className="SignUpPoppupContainerSubtitle">
    <div className="SignUpPoppupSubtitle">* Password</div>
    <div className="SignUpSoppupSubtitleErorr SignUpPasswordFirstSubtitle SignUpBlockOff">Required field</div>
</div>
<input type="password" placeholder="Enter Password" className="SignUpPoppupStyleInput SignUpPoppupPassword"/>
<div className="SignUpPoppupContainerSubtitle">
    <div className="SignUpPoppupSubtitle">* Password confirmation</div>
    <div className="SignUpPoppupSubtitleErorr SignUpPasswordSecondSubtitle SignUpBlockOff">Passwords do not match</div>
</div>
<input type="password" placeholder="Confirm the password" className="SignUpPoppupStyleInput SignUpPoppupPassword"/>
<div className="SignUpPoppupContainerSubtitle">Sexual orientation</div>
<label className="SignUpPoppupButtonRadioLabel"><input type="radio" name="sex" value="man" className="SignUpConteinerButtonRadioButtonRadio"/> Man</label>
<label className="SignUpPoppupButtonRadioLabel"><input type="radio" name="sex" value="woman" className="SignUpConteinerButtonRadioButtonRadio"/>Woman</label>
<div className="SignUpPoppupContainerSubtitle">About myself</div>
<textarea name="comment" id="comment" contenteditable="false" placeholder="Tell us about yourself..." className="SignUpPoppupTextarea"></textarea>
<div className="SignUpSubscription">
    <input type="checkbox" id="checkbox" name="checkbox" value="true" className="SignUpPoppupStyleInputCheckbox"/>
    <p className="SignUpPoppupSubtitle SignUpPoppupSubtitleDimensions">I agree to receive updates by email</p>
</div>
<button className="SignUpPoppupButtonEnter">Registration</button>
        </form>
    </div>

    )
    }
    export default SignUp;