import { FC, useState } from 'react'
import { Timer } from '../../../types/TimerType'

// instance Time {
//     hour: number,
//     minute: number,
//     second: number
// }

// type Time = {
//     hour: number,
//     minute: number,
//     second: number
// }

const Counter: FC = () => {
    
    // I used to use TS
    // maby some of below codes are false but the main idea is use TS (Type or Instance)
    
    const [ timer, setTimer ] = useState<Timer>({
        hour: 20,
        minute: 15,
        second: 36
    })

    // const StartTimer = () => {
    //     if (timer.second <= 0) {
    //         setTimer({ minute: 14 })
    //     }
    // }

    // const [ hour, setHour ] = useState<number>(20)
    // const [ minute, setMinute ] = useState<number>(15)
    // const [ second , setSecond ] = useState<number>(36)

    return (
        <section className='text-gray-700'>
            <span className='bg-white p-2 rounded-xl'> {timer.hour} </span>
            <span className='text-black'> : </span>
            <span className='bg-white p-2 rounded-xl'> {timer.minute} </span>
            <span className='text-black'> : </span>
            <span className='bg-white p-2 rounded-xl'> {timer.second} </span>
        </section>
    )
}

export default Counter