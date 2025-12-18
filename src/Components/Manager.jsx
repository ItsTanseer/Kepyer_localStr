import { useEffect, useState } from "react"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const [showPass, setshowPass] = useState(false)
    const passVisible = showPass ? "text" : "password"
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const eye = showPass ? "./eyeOpen.png" : "./eyeClosed.png"
    const [passwordArray, setPasswordArray] = useState([])
    const handleshowPass = () => {
        setshowPass(!showPass)
    }

    useEffect(() => {

        let passwords = localStorage.getItem("passwords")

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }


    }, [])

    const savePass = () => {
        if (!form.site || !form.username || !form.password) {
            toast("Fill all fields first")
        return
            }
        const newpass = {...form,id:uuidv4() }
        setPasswordArray([...passwordArray, newpass])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, newpass]))
        setForm({ site: "", username: "", password: "" })
        console.log([...passwordArray, form]);
        toast("Password saved!")
   
    }
    const deletePass = (id) => {
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        console.log(id);

        }
        

    }
    const editPass = (id) => {
        setForm(passwordArray.filter(i=>i.id===id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id!==id))
    }


    

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast("Copied to your clipboard!");
    }




    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
                
                />

            <div className="  bg-pink-400/40 w-full max-w-[700px] rounded-2xl  h-100 min-h-fit  backdrop-blur-xs mx-auto p-4 m-8 justify-center items-center flex flex-col">
            <img className="w-50 h-50 object-cover shadow-2xl shadow-pink-300/60 rounded-full" src="cyberlock.jpg"/>
                
                <h1 className="text-4xl text-pink-400 border-b-4 border-b-pink-600 science-gothic m-2  shadow-lg
                shadow-pink-300">
                <span className="text-black">K</span><span className="text-[pink-400]">e</span>yper</h1>
                <input className=" w-80 md:w-120 bg-pink-950/50 text-white border-2 py-1 px-3 focus:border-purple-400 science-gothic focus:border focus:outline-none text-center focus:ring-0 border-black rounded-xl" type="text" name="site" placeholder="Enter website url" onChange={handleChange} value={form.site} />

                <div className="p-2 flex md:flex-row flex-col md:justify-between md:w-[500px] mx-auto">
                    <input className="m-2 p-1 focus:border-purple-400  w-60 focus:border science-gothic focus:outline-none focus:ring-0 bg-pink-950/50 text-white border-2 border-black rounded-xl" type="text" name="username" onChange={handleChange} placeholder="Enter username" value={form.username} />

                    <div className="relative ">
                        {<input className="m-2 p-1 bg-pink-950/50 text-white science-gothic border-2 border-black rounded-xl w-60 md:w-56 focus:border-purple-400 focus:border focus:outline-none focus:ring-0" name="password" type={passVisible} value={form.password} onChange={handleChange} placeholder="Enter password" />}

                        <span className="align-middle content-center  right-3  top-2.5 absolute text-white"><img className="bg-white/20 rounded-full p-1 cursor-pointer" width={30} src={eye} onClick={handleshowPass} /></span>
                    </div>
                </div>
                <button onClick={savePass} className="flex items-center bg-linear-to-r from-pink-800/80 to-pink-500/30 m-3 px-3 py-1 hover:bg-pink-600 hover:shadow-xl hover:shadow-violet-300/20 rounded-2xl text-white font-bold science-gothic "><lord-icon
                    src="https://cdn.lordicon.com/vjgknpfx.json"
                    trigger="hover"
                    state="hover-swirl"
                >
                </lord-icon>Add passsword</button>


                <div className="passwords">
                    <h2 className="science-gothic font-bold text-center text-white md:w-150 w-97 rounded-md  px-2  ">Your passwords</h2>
                    {passwordArray.length === 0 && <div className="text-center bg-black/30 rounded-md my-2 py-1 text-white w-40 mx-auto">No passwords to show</div>}
                    {passwordArray.length != 0 &&



                        <div className="w-full max-w-full overflow-x-auto">
                        <table class="text-xs min-w-max md:text-lg table-auto w-full mx-auto ">
                            <thead className="bg-pink-600/40 text-white border-2 border-pink-600 science-gothic font-bold">
                                <tr>
                                    <th className="p-1 px-2">Website</th>
                                    <th className="p-1 px-2">Username</th>
                                    <th className="p-1 px-2">Password</th>
                                    <th className="p-1 px-0">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index} className="bg-black/50   border-2 border-pink-600 text-white text-center">

                                            <td className="flex px-2 py-1"><a href={item.site}
                                                target="_blank"> {item.site}</a><img src="copyBtn.png" className="bg-white p-1 mx-0.5 hover:bg-slate-300 rounded-md cursor-pointer h-7 w-7" onClick={() => copyText(item.site)} /></td>
                                            <td className=" px-2 py-1">
                                                <div className="flex flex-row  justify-center">
                                                    {item.username}
                                                    <img src="copyBtn.png" className="bg-white p-1 mx-0.5 hover:bg-slate-300 rounded-md cursor-pointers h-7 w-7" onClick={() => copyText(item.username)} />
                                                </div>
                                            </td>
                                            <td className="px-2 py-1">
                                                <div className="flex justify-center">
                                                    {'*'.repeat(item.password.length)}

                                                    <img src="copyBtn.png" className="bg-white p-1 mx-1 hover:bg-slate-300 rounded-md cursor-pointers h-7 w-7" onClick={() => copyText(item.password)} />
                                                </div>
                                            </td>
                                            <td className="py-1">
                                                <div className="flex ">
                                                <img src="edit.png" className="w-6 bg-white m-1 hover:bg-slate-300 rounded-md p-0.5" onClick={()=>editPass(item.id)}/>
                                                <img src="delete.png" className="w-6 hover:border-2 hover:border-white bg-white m-1 rounded-full" onClick={()=>deletePass(item.id)}/>
                                                </div>
                                          
                                                
                                            </td>

                                        </tr>
                                    )
                                }
                                )
                                }

                            </tbody>
                        </table>
                        </div>}

                </div>

            </div>




        </div>

    )

}

export default Manager