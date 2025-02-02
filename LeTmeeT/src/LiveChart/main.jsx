import React from 'react';
import "./videochart.css"
import "./backend.js"
import {MdAddToPhotos} from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdRemoveCircle } from 'react-icons/io';

const Videoplayercomponent = () => {
  return (
    <div className='videocontainer'>
        <div>
            <video src="" id="video1" className='videoplayer' autoPlay playsInline></video>
            {/* <label htmlFor='video1'>Video1</label> */}
            <video src="" id="video2" className='videoplayer' autoPlay playsInline></video>
            {/* <label htmlFor='video2'>Video1</label> */}

        </div>
         <div className="videobutton">
            <button className='buttonvideo'id='left' name='left'><FaArrowLeft/>Left</button>
            <button className='buttonvideo'id='Add' name='Add'><MdAddToPhotos/>Add</button>
            <button className='buttonvideo' id='Remove' name='Remove'><IoMdRemoveCircle/>Remove</button>
         </div>

    </div>
  );
}

export default Videoplayercomponent;
