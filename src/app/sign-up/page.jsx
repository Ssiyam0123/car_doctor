import FromSetup from '../../components/FromSetup'
import Image from 'next/image'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='md:flex lg:flex w-[80%] mx-auto mt-20'>
        <div className='mx-auto w-full'>
            <Image src={'/assets/images/login/login.svg'} height={502} width={406} alt='login' className='md:w-[50%] mx-auto'/>
        </div>
        <div className='w-full md:w-[70%] mx-auto'>
            <FromSetup typeOfFrom={'signup'}/>
        </div>
    </div>
  )
}

export default SignUpPage