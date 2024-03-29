import {React , useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    const [show,setshow]=useState(false)

    useEffect(()=>{
     window.addEventListener('scroll',()=>{
        if(window.scrollY>500){
            setshow(true)
        }
        else{
            setshow(false)
        }
     })
    },[])

    console.log(show);

  return (
    <div className={`nav ${show && 'navBlack'}` }>
        <img
        style={{width:'170px'}}
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        />
   </div>
  )
}

export default Navbar