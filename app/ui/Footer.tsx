'use client'

import { useState } from 'react'
import FooterButton from './FooterButton'
import { FaGithub, FaLinkedinIn, FaFilePdf } from 'react-icons/fa'

export default function Footer (): JSX.Element {
  const [cvButtons, setCvButtons] = useState(false)
  return (
    <footer className="flex items-center justify-center w-full h-40 bg-black text-white mt-11">
      <FooterButton
        className='ml-7'
        Icon={FaGithub}
        href='https://github.com/KaiGZLZ'
        text="Github"
      />
      <FooterButton
        Icon={FaLinkedinIn}
        href='https://www.linkedin.com/in/jesus-alfonso-gonzalez/'
        text="LinkedIn"
      />
      <div className='relative'>
        <FooterButton
          Icon={FaFilePdf}
          text="CV"
          onClick={() => { setCvButtons(!cvButtons) }}
        />
        <a
          className={`absolute transition-opacity duration-200 ${cvButtons ? 'opacity-100' : 'opacity-0'} top-[-110%] left-[-50%]  rounded-full py-3 px-4 font-extrabold bg-slate-700 text-gray-300 mx-2 border border-white hover:bg-white hover:text-black transition-colors duration-300`}
          href='https://drive.google.com/file/d/1XLXoj1OFBIkmouHsOrdH6QNo5yCujcP7/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          ES
        </a>
        <a
          className={`absolute ${cvButtons ? 'animate-fade' : 'opacity-0'} top-[-110%] left-[50%] rounded-full py-3 px-4 font-extrabold bg-slate-700 text-gray-300 mx-2 border border-white hover:bg-white hover:text-black transition-colors duration-300`}
          href='https://drive.google.com/file/d/1n7u_XdkqIs_wSqE39v-j_OaeBz57xgFr/view'
          target='_blank'
          rel='noreferrer'
        >
          EN
        </a>

      </div>

    </footer>
  )
}
