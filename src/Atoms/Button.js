import React from 'react';
import Link from 'next/link';
import clsx from 'clsx'; // Optional, but cleaner for combining classes

function Button({ text, href, className }) {
  const baseStyles = 'cursor-pointer active:scale-95 flex items-center justify-center gap-2 border border-white rounded-full py-2 px-3 w-fit lg:mx-0 text-sm bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9] text-white font-semibold transition-all duration-500';
  const combinedStyles = clsx(baseStyles, className);

  const buttonElement = (
    <button className={combinedStyles}>
      {text}
    </button>
  );

  return href ? (
    <Link href={href}>
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
}

export default Button;
