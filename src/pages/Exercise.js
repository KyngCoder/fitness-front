import React, { useEffect } from "react";


const Exercise = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": REACT_APP_URL,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getData = async () => {
    const res = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/target/abs",
      options
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    // getData();
  }, []);

  return(
    <div>
      <div className="m-8">
        <h2 className="text-2xl  text-yellow-700 mb-4">Popular Exercises</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-6 ">
          <div className=" rounded-md shadow-md border-yellow-900 border-4 relative ">
            <img src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="treadmill" />
            <p className="absolute z-10 bottom-4 left-4 ">name</p>
          </div>
          <div className=" rounded-md shadow-md relative border-4 border-yellow-900 ">
            <img src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="treadmill" />
            <p className="absolute z-10 bottom-4 left-4 ">name</p>
          </div>
          <div className="border-4 relative border-yellow-900 rounded-md shadow-md ">
            <img className="w-full h-full" src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="treadmill" />
            <p className="absolute z-10 bottom-4 left-4">name</p>
          </div>
          <div className=" rounded-md shadow-md relative border-4 border-yellow-900 ">
            <img src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="treadmill" />
            <p className="absolute z-10 bottom-4 left-4 ">name</p>
          </div>
          <div className=" rounded-md shadow-md relative border-4 border-yellow-900  ">
            <img className="h-full w-full" src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="treadmill" />
            <p className="absolute z-10 bottom-4 left-4">name</p>
          </div>
          <div className=" rounded-md shadow-md relative border-4 border-yellow-900 ">
            <img src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="treadmill" />
            <p className="absolute z-10 bottom-4 left-4">name</p>
          </div>
        </div>
      </div>
      <>
      <h2 className="ml-8 text-2xl heading text-yellow-900">What would you like to train Today?</h2>
      <div className="grid grid-cols-3 gap-4 m-8">
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">back</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/attractive-male-body-builder-blue-wall_155003-3921.jpg?t=st=1656969296~exp=1656969896~hmac=6107d14174038c5a2035b05b741ac200c95a971d7c697ee674153fecce030623&w=900" alt="" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Chest</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/portrait-super-fit-muscular-young-man-working-out-gym_155003-1692.jpg?t=st=1656969144~exp=1656969744~hmac=174dcc5fb4d04ebd5485cede7faa871d1b7259edbbec314517709135f88e7e83&w=900" alt="bicep" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Bicep</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/woman-doing-squats-smith-machine_651396-752.jpg?t=st=1656969498~exp=1656970098~hmac=78706958c60c959a465e370b8d627b041a22f7750a23615ac823df2e13b6f2e2&w=900" alt="" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Legs</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://images.pexels.com/photos/7375827/pexels-photo-7375827.jpeg?auto=compress&cs=tinysrgb&w=600" alt="forearm" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Forearm</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/strong-man-training-gym_1303-23663.jpg?t=st=1656969634~exp=1656970234~hmac=37f9b709631ef879d81a42ea10847758203e6d37d849a2cdac2026e2c4d909a5&w=900" alt="" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Triceps</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/indoor-shot-attractive-young-active-blonde-woman-with-ponytail-hairstyle-holding-bottle-water-keeping-skipping-rope-her-neck-isolated-light-grey-background-sporty-clothes_295783-6430.jpg?t=st=1656970114~exp=1656970714~hmac=44fd06c8a5a875b72799b611f762b7b76223a94c753d15545b3c9c4c0f2a92d9&w=900" alt="cardio" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Cardio</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5004.jpg?t=st=1656970702~exp=1656971302~hmac=503156a39ef5e9a3f1abdee6c4e05e765b01d7b73195c4cbd49f3a888f070bcf&w=900" alt="" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">shoulder</p>
       </div>
       <div className="relative rounded-md shadow-lg hover cursor-pointer">
        <img className="rounded-lg " src="https://img.freepik.com/free-photo/young-bodybuilder-with-perfect-body_1163-3556.jpg?t=st=1656970702~exp=1656971302~hmac=1d448ba36cb0e3949504570a048289af892c3f5c737726f213693244627611c4&w=900" alt="" />
        <p className="absolute top-1/2 left-1/2 text-white text-lg">Abs</p>
       </div>
 
      </div>
      </>
    </div>

  )
};

export default Exercise;
