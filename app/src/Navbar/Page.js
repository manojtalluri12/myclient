import React, { useState } from 'react'

const Page = ({data}) => {
  //console.log(data);
  const[search,setsearch]=useState('')
  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=600' alt='knksn' className='g'/>
      </div>
      <div className='flex'>
        <select value={search} onChange={(e)=>setsearch(e.target.value)}>
          <option>male</option>
          <option>female</option>
        </select>
      </div>
     <div className='grid'>{
      data.length >0 && 
      data.filter((each)=>each.gender === search).
       map((each)=>{
        const{id,name,gender,image}=each
        return <div key={id} className='items'>
          <div>
            <img src={image} className='imgs'/>
          </div>
          <div>
            <p>{name}</p>
            <button>ADD CART</button>
          </div>
        </div>
       
      })
      }
      </div>
      </div>
  )
}

export default Page