import './Feedback.css';
import {useForm} from 'react-hook-form';
function Feedback () {

const {
    register,
formState: {errors, isValid},
handleSubmit, 
reset,
} = useForm({
    mode:'onChange',
});
const onSubmit = (data) => {
    console.log(JSON.stringify(data));
reset();
}
    return (

    <div className="FeedbackBackground">
        <form className="FeedbackPoppup" onSubmit={handleSubmit(onSubmit)} >

<h1 className="FeedbackPoppupHeader">Feedback</h1>

<div className="FeedbackPoppupContainerSubtitle">
    <div className="FeedbackPoppupSubtitle">* Email</div>
    <div  className="FeedbackPoppupSubtitleErorr  FeedbackEmailSubtitle ">{errors?.Login && `${errors?.Login?.message || 'Email entered incorrectly'}`}</div>
</div>

<input {...register("Login", {
        required: "field is required",
        minLength: {
            value: 4,
            message: 'Minimum 4 characters'
            },
        pattern:{ 
            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
            message: 'Enter valid email'
            },
            })} 
        type="email"
        placeholder="Enter email" 
        className="FeedbackPoppupStyleInput FeedbackPoppupLogin"
/>

<div className="FeedbackPoppupContainerSubtitle">
    <div className="FeedbackPoppupSubtitle">* Name</div>
    <div className="FeedbackPoppupSubtitleErorr FeedbackPasswordFirstSubtitle ">{errors?.Name && `${errors?.Name?.message || 'Required field'}`}</div>
</div>

<input  {...register("Name", {
        required: 'field is required',
        minLength: {
            value: 2,
            message: 'Minimum 2 characters'
        },
        pattern:{ 
            value: /^[A-Za-z]+$/,
            message: 'Enter valid Name'
            },
        })} 
        type="text" 
        placeholder="Enter Name" 
        className="FeedbackPoppupStyleInput FeedbackPoppupPassword"
/>

<div className="FeedbackPoppupContainerSubtitle"></div>
<div className="FeedbackPoppupContainerSubtitle">
    <div className="FeedbackPoppupSubtitle">* You question</div>
    <div className="FeedbackPoppupSubtitleErorr FeedbackPasswordFirstSubtitle ">{errors?.Question && `${errors?.Question?.message || 'Required field'}`}</div>
</div>
<input 
{...register("Question", {
    required: "field is required",
    minLength: {
        value: 5,
        message: 'minimum 5 characters'
        },
    maxLength: {
        value: 30,
        message: 'maxmum 30 characters'
    }
        })} 
type="text" 
contenteditable="false" 
placeholder="Short question" 
className="FeedbackPoppupStyleInput FeedbackPoppupLogin"
/>


<input type='submit' value="Submit" disabled={!isValid} className="FeedbackPoppupButtonEnter"/> 
        </form>
    </div>

    )
    }
    export default Feedback;