'use client'

import FooterButton from './FooterButton'
import { FaGithub, FaLinkedinIn, FaFilePdf } from 'react-icons/fa'

export default function Footer (): JSX.Element {
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
      <FooterButton
        Icon={FaFilePdf}
        href='https://drive.google.com/file/d/1n7u_XdkqIs_wSqE39v-j_OaeBz57xgFr/view'
        text="CV"
      />
    </footer>
  )
}
