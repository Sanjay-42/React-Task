import React, { useRef, useState} from 'react'

export default function UserefHookImplementation() {
    let[addImage,setAddImage]=useState(true)
    let[imgUrl,setImgUrl]=useState("")
    let[like,setLike]=useState(0)
    const proImg=useRef(0);

    let handleImage=(e)=>{
        let img=e.target.files[0]
        if(img)
        {
            let preview=URL.createObjectURL(img);
            setImgUrl(preview)
            setAddImage(false)
        }
    }
    
  return (
    <div className='main-container'>
        <div>
            <h2><u>UseRef Hook Implementation (Profile Picture)</u></h2>
        </div>
        <div>
            <input type="file" name="profile" id="" ref={proImg} hidden accept='image/*' onChange={handleImage}/>
            {addImage?<div className="img-container" onClick={()=>proImg.current.click()}>
                Upload Your Profile Img!!!
            </div>:
            <img className='pro-container' src={imgUrl} onClick={()=>proImg.current.click()}/>
            }
            <div>
                {!addImage?(
                    <div className="like-btn">
                        <b>Likes :{like}</b><button onClick={()=>setLike(like+1)}>Like</button>
                    </div>
                ):""}
            </div>
        </div>
    </div>
  )
}
