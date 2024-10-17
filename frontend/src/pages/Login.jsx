import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./CSS/Login.css"

function Login(props) {

    const users = props.users
    const setUsers = props.setUsers

    const navigate = useNavigate();
    // username password usestate


    // please signup before u login (usestate)
    const [loginError, setLoginError] = useState(true)


    // input box usestate
    const [euser, seteUser] = useState()
    const [epass, setePass] = useState()

    var notFound = false

    const changeUsername = (evt) => {
        seteUser(evt.target.value)
    }

    const changePassword = (evt) => {
        setePass(evt.target.value)
    }

    // login button click func
    const loginButton = () => {
        users.forEach((item) => {
            if (item.username === euser && item.password === epass) {
                console.log("successfull")
                notFound = true
                navigate("/shop")

            }
            // else{
            //     console.log("unsuccessfull")
            //     setLoginError(false)
            // }

        })

        if (notFound === false) {
            console.log("failed")
            setLoginError(false)
        }
    }

    console.log(users)

    return (
        <>
            <div className= " bg-[#ff4141] h-svh py-10 px-14 ">
                <div className=" bg-[#EFEFEF] flex flex-col p-5 mt-20   rounded-md ">
                    <h1 className=" text-3xl font-semibold">Hey Hi 👋 </h1>
                    {
                        loginError ? <p className="mt-4">I help you manage your activities after your login :)</p> : <p className="mt-4 text-red-500">Please Signup Before you Login</p>
                    }
                    <input type="text" placeholder="Username" value={euser} onChange={changeUsername} className="  my-4 border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" required />
                    <input type="text" placeholder="Password" value={epass} onChange={changePassword} className="  border border-gray-400 p-2 w-56 rounded-md bg-transparent focus:outline-none" required />
                    <button className=" bg-[#ff4141] p-1.5 w-24 mt-4 rounded-md hover:bg-[#a59adf]" onClick={loginButton}>Login</button>
                    <p className="mt-4">Do you have an account? <Link className=" underline text-sky-800" to={"/signup"}>Signup</Link></p>
                    <div className='loginsignup-agree'>
                        <input type="checkbox" name='' id='' />
                        <p>by continuing,i agree to the terms of use & privacy policy</p>
                    </div>
                </div>


            </div>

        </>
    )
}
export default Login