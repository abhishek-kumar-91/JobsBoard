import React from 'react'
import simple from '../../Assets/simple.png'
import uber from '../../Assets/logo2.webp'
import google from '../../Assets/logo3.png'
function ValueDiv() {
  return (
    <div className='mb-[4rem] mt-[6rem] '>
      <h1 className='text-[#252b36] text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block '>
        The Value that holds us true and to account</h1>

        <div className='grid gap-[10rem] grid-cols-3 items-center '>
          <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] '>
              <div className='flex items-center gap-3'>
                  <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
                        <img src={simple} />
                  </div>


                <span className='font-semibold text-[#252b36] text-[18px]'>
                  Simplicity
                </span>
              </div>

              <p className='text-[13px] text-[#252b36] opacity-[.7] py-[1rem] '>
                Things being made beautiful simple are at the heart of everything we do.
              </p>
          </div>

          <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] '>
              <div className='flex items-center gap-3'>
                  <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
                        <img src={uber} />
                  </div>


                <span className='font-semibold text-[#252b36] text-[18px]'>
                  Simplicity
                </span>
              </div>

              <p className='text-[13px] text-[#252b36] opacity-[.7] py-[1rem] '>
                We believe in making things better for everyone, even if just by a bit!
              </p>
          </div>


          <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] '>
              <div className='flex items-center gap-3'>
                  <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
                        <img src={google} />
                  </div>


                <span className='font-semibold text-[#252b36] text-[18px]'>
                  Simplicity
                </span>
              </div>
 
              <p className='text-[13px] text-[#252b36] opacity-[.7] py-[1rem] '>
                Things being made beautiful simple are at the heart of everything we do.
              </p>
          </div>
        </div>

        <div className='card mt-[2rem] flex justify-between bg-[#2a68ff] rounded-[10px] '>
            <div>
              <h1 className='text-[#2a68ff] text-[30px] font-bold '>
                Ready to switch a career
              </h1>

              <h2 className='text-[#252b36] text-[25px] font-bold '>
                Let's get started!
              </h2>

              
              </div>

              <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px]
              font-semibold text-[#2a68ff] hover:bg-white border-[#2a68ff] '>
                Get Started
              </button>
        </div>

        
    </div>
  )
}

export default ValueDiv