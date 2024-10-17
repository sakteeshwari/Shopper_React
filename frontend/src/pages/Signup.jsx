import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./CSS/Signup.css"

function Signup(props) {
    const users = props.users
    const setUsers = props.setUsers

    // useNavigate 
    const navigate = useNavigate()

    // const[suser,setsUser]=useState()
    // const[spass,setsPass]=useState()

    // input box usestate
    const [suser, setsUser] = useState()
    const [spass, setsPass] = useState()

    // confirm pass usestate
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    const changeUsername = (evt) => {
        setsUser(evt.target.value)
    }
    const changePassword = (evt) => {
        setsPass(evt.target.value)
    }
    const confirmPassword = (evt) => {
        setConfirmPass(evt.target.value)
    }

    const handleSignup = () => {

        if (spass !== confirmPass) {
            setError("Password doesnot Match")
        }
        else {
            setUsers([...users, { username: suser, password: spass }])
            setError('');
            alert("added successfull")
            navigate("/login")
        }



        // console.log([...users,{username:euser,password:epass}])

    }
    return (
        <>
            <div className=" bg-[#ff4141] h-svh py-10 px-14 ">
                <div className=" bg-[#EFEFEF] flex flex-col mt-20 p-5 rounded-md  ">
                    <h1 className=" text-3xl font-semibold">Hey Hi 👋 </h1>
                    <p className="mt-4">You can Sign up here :)</p>
                    <input type="text" placeholder="Username" value={suser} onChange={changeUsername} className="  my-4 border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" />
                    <input type="text" placeholder="Password" value={spass} onChange={changePassword} className="  border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" />
                    <input type="text" placeholder="Confirm Password" value={confirmPass} onChange={confirmPassword} className="  border border-gray-400 p-2 mt-4 w-56 rounded-md bg-transparent focus:outline-none" />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <button
                        className=" bg-[#ff4141] p-1.5 w-24 mt-4 rounded-md"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                    {/* <button className=" bg-orange-500 p-1.5 w-24 mt-4 rounded-md " onClick={handleSignup}>Sign Up</button> */}
                    <p className="mt-4">Already have an account? <Link className="underline text-sky-800" to={"/login"}>Login</Link></p>
                    <div className='loginsignup-agree'>
                        <input type="checkbox" name='' id='' />
                        <p>by continuing,i agree to the terms of use & privacy policy</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Signup