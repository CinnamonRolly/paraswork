import React, { useState } from 'react'
import { FaPlay, FaEllipsisH } from "react-icons/fa";
import './Modal.css'

const Card = (props) => {
  const title = props.title
  const artist = props.artist
  const imageurl = props.imageurl

  const [isHover, setIsHover] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

  const hanldeDelete = () => {
    setIsModal(!isModal)
    console.log(isModal)
  }

  return (
    <>
      <div className='text-white z-20 hover:bg-[#363535] w-[200px] p-3 bg-black m-3 rounded-xl'>
        <div onMouseOut={handleMouseOut} onMouseEnter={handleMouseEnter} className='relative'>
          <img onMouseOut={handleMouseOut} onMouseEnter={handleMouseEnter} src={imageurl} className='min-w-[150px] rounded-lg h-[70%] object-cover' />
          <FaPlay onMouseEnter={handleMouseEnter} onMouseOut={handleMouseEnter} size={45} className={isHover ? 'right-0 p-4 rounded-2xl bg-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'hidden'}/>
          <FaEllipsisH onClick={hanldeDelete} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseEnter} size={20} className={isHover ? 'top-1/2 absolute right-0 mr-4 -translate-y-1/2' : 'hidden'}/> 
        </div>
        <h1 className='font-semibold pt-1'>{title}</h1>
        <p className='text-gray-400 text-[14px] pb-3'>{artist}</p>
      </div>

      {isModal && (
      <div className="modal z-30">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2 className='py-2 text-xl font-bold'>Delete this song</h2>
          <p className='p-1 font-semibold'>Are you sure to delete this song?</p>
          <button className='close-modal' onClick={hanldeDelete}>Delete</button>

        </div>
      </div>
      )}

    </>
  )
}

export default Card
