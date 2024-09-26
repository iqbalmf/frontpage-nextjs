import React, {useState} from 'react';
import Image from "next/image";
import logoSrc from '../../public/images/logo.svg';
import Link from "next/link";
import {useRouter} from "next/router";
import propTypes from 'prop-types'

interface HeaderProps {
  onLight: boolean;
}

function Header({onLight}: HeaderProps) {

  const linkColor = onLight ? "text-gray-100" : "text-white";
  const router = useRouter();
  const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.PUBLIC_BASE_URL}/register` : `${process.env.PUBLIC_BASE_URL}/login`
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk"
  return (
      <header className={'flex flex-row justify-between items-center'}>
        <div style={{height: 54, zIndex: 50}}>
          <Image src={logoSrc} alt={"logo"} width={50} height={54}/>
        </div>

        <ul className={"flex"}>
          <li className={"my-4 md:my-0"}>
            <Link href={"/"} className={`${linkColor} px-6 py-3 hover:text-teal-500`}>Home</Link>
          </li>
          <li className={"my-4 md:my-0"}>
            <Link href={"/"} className={`${linkColor} px-6 py-3 hover:text-teal-500`}>Pricing</Link>
          </li>
          <li className={"my-4 md:my-0"}>
            <Link href={"/"} className={`${linkColor} px-6 py-3 hover:text-teal-500`}>Features</Link>
          </li>
          <li className={"my-4 md:my-0"}>
            <Link href={"/"} className={`${linkColor} px-6 py-3 hover:text-teal-500`}>Story</Link>
          </li>
          <li className={"my-4 md:my-0"}>
            <Link target={"_blank"} href={linkCTA}
                  className="bg-indigo-700 hover:bg-indigo-500 transition-all duration-200 text-white hover:text-teal-100 text-lg px-6 py-3 ml-6">
              {textCTA}
            </Link>
          </li>
        </ul>
      </header>
  );
};

Header.propTypes = {
  onLight: propTypes.bool
}

export default Header;