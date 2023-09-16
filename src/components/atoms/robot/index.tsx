import React, { memo, type FC, type InputHTMLAttributes } from 'react'
import captchaImg from '../../../assets/images/RecaptchaLogo.svg.png'
import './robot.scss'
interface RobotProps extends InputHTMLAttributes<HTMLInputElement> {

}
export const Robot: FC<RobotProps> = ({ ...rest }: RobotProps) => {
  return <div className='robot-container'>
        <div className='check'>
            <input type='checkbox' {...rest} />
            <p>{"I'm not a robot"}</p>
        </div>
        <img className="img" src={captchaImg}/>

    </div>
}

export const MemoizedRobot = memo(Robot)
