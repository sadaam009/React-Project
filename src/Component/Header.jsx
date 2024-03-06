import React,{useState} from 'react'

export default function Header() {
  const [isOpen, setIsOpen]= useState(false)
  const handleOpen=()=>{
    setIsOpen(true)
  }

  const handleClose=()=>{
    setIsOpen(false)
  }
  return (
 <div className="">
  <div className=" p-5  flex justify-between">
      <h1 className="text-5xl font-bold">Logo Name</h1>
      <i style={{display: isOpen==true? "none" : ""}} onClick={handleOpen} class="cursor-pointer text-5xl sm:hidden fa-solid fa-bars"></i>
      <i style={{display: isOpen==true?"block":"none"}} onClick={handleClose} class="cursor-pointer text-5xl fa-solid fa-xmark"></i>
      <ul className="sm:flex hidden gap-8 text-3xl">
        <li>Home</li>
        <li>Service</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blogs</li>
      </ul>
      <div>
        <button>Hello</button>
        <button>Hello</button>
      </div>
     
    </div>
    <ul style={{ display:  isOpen==true ? "flex": "none"}} className="flex-col space-y-3 p-2  hidden  text-3xl bg-[#60dcff]">
    
    <li>Home</li>
    <li>Service</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blogs</li>
  </ul>
  </div>



  )
}
