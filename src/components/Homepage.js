import React from 'react'
import Video from './Video'
import lady from '../assets/imgbin-fitness-zFvAkAZdFK1jiDW17wKc3GQCA-PhotoRoom (1).png'

const Homepage = () => {
  return (
    <div className="flex  flex-col h-full justify-between text-white background">
        <div className="block md:flex h-full px-8 justify-between">
            <div className="w-100 md:w-1/2">
                <h2 className="text-4xl heading mb-8">
                Make yourself <span className="text-yellow-400">Stronger</span>
                <br /> Than your excuses
                </h2>
                <p className="mb-8">Start exercising now where ever you are. Staying Healthy is indispensable.Don't have any time to exercise? No worries because you do have time, you just haven't realized it as yet. Simply replace one of your non-essential daily activity whether 
                it be binging anime or playing game all day </p>
            </div>
            <div className="">
                <img className=" bg-cover h-full mb-8 " src={lady} />
            </div>
            <div className="flex flex-col justify-center">
                <div className="mb-8">
                <h2 className="my-2">10 Healthy Summer Food</h2>
                <p className="my-2">Add these summer food to your diet to keep you healthy</p>
                <p className="my-2"><b className='cursor-pointer'>READ ARTICLE</b></p>
                </div>
                <div className='flex mb-8'>
                    <div>
                        <img className="bg-cover w-32 mr-4" src="https://cdn.pixabay.com/photo/2016/09/21/21/37/sport-1685737_960_720.jpg" alt="trainer" />
                    </div>
                    <div >
                        <img className="bg-cover w-32" src="https://cdn.pixabay.com/photo/2016/09/21/21/37/sport-1685737_960_720.jpg" alt="trainer" />
                    </div>
                </div>
            </div>
        </div>
        <Video />
    </div>
  )
}

export default Homepage