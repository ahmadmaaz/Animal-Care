import React from 'react'

type Props = {}

function MainScreen({}: Props) {
  return (
    <div className='grid grid-cols-2 '>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-mono font-bold text-4xl px-24 '>Find your purrrfect match </h1>
            <h1 className='font-mono font-bold text-4xl px-24 '> adopt a cat today</h1>
        </div>
        <img src='https://images.squarespace-cdn.com/content/v1/59bd3cc646c3c4ee197be5fd/1535175540441-J2J7Q3OQ25T8E8CI87S1/Screen+Shot+2018-08-24+at+10.31.56+PM.png'/>
    </div>
  )
}

export default MainScreen