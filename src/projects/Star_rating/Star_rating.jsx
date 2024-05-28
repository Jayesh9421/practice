import React, { useState } from 'react'

const Star_rating = () => {

    const [rating, setrating] = useState(0);

    const handleClick=(star)=>{
        setrating(star)
    }

  return (
    <div>
        {
            [1,2,3,4,5].map((star)=>{
                return(
                    <span className={`text-3xl cursor-pointer ${star <= rating ? "text-yellow-300" : "text-gray-500"}`} onClick={()=>handleClick(star)}>
                          *  
                    </span>
                )
            })
        }
    </div>
  )
}

export default Star_rating
