import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import line from '../../Assets/line.svg'
import logo2 from '../../Assets/logo2.webp'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.png'


const Data = [
  {
    id:1,
    image: line,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'Software Developer',
    time: 'Now',
    location: 'Austrailia',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'uber'
  },
  {
    id:3,
    image: logo3,
    title: 'Security Engineer',
    time: 'Now',
    location: 'Warsaw',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'Google'
  },
  {
    id:4,
    image: logo4,
    title: 'UI Designer',
    time: 'Now',
    location: 'UAE',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'Meta'
  },
  {
    id:5,
    image: logo5,
    title: 'Data Scientist',
    time: 'Now',
    location: 'Japan',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'Netflix'
  },
  {
    id:6,
    image: logo6,
    title: 'ServiceNow Developer',
    time: 'Now',
    location: 'USA',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'Amazon'
  },
  {
    id:7,
    image: logo7,
    title: 'Software Tester',
    time: 'Now',
    location: 'Berlin',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'ServiceNow'
  },
  {
    id:8,
    image: logo8,
    title: 'Penetration Tester',
    time: 'Now',
    location: 'America',
    desc: 'lorem ipsum, dolor sit amet qonsectetur adipisicing elit, corruti, laboriosam!',
    company: 'MasterCard'
  }
]
function JobDiv() {
  return (
    <div className=''>
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
          {
            Data.map(({id, image, title,time, location, desc, company})=>{
             return <div key = {id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
          hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8] hover:shadow-lg'>
              
              
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-[#252b36] 
                group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'><BiTimeFive />{time}</span>
              </span>

              <h6 className='text[#ccc]'>{location}</h6>
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white' >
               {desc}
              </p>

              <div className='company flex items-center gap-2'>
                      <img src={image} alt='company logo' className='w-[10%]' />
                      <span className='text-[14px]  py-[1rem] block group-hover:text-white'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] block p-[10px]  w-full text-[14px]
              font-semibold text-[#252b36] hover:bg-white group-hover/item:text-[#252b36] group-hover:text-white '>
                Apply Now
              </button>
          </div>
            })
              
            
          }
        </div>
    </div>
  )
}

export default JobDiv