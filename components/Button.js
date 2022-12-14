import React from 'react'
import Link from 'next/link'

export default function Button(props) {
  const { hasToggle, name, nextPage, size, type, onClick } = props;

  const buttonColor = name == 'back' ? 'danger' : 'primary'
  const buttonType = type == 'submit' ? 'submit' : 'button'
  
  return (
    <Link href={`${nextPage}`}>
        <button
          class={`button is-${size} is-${buttonColor} is-fullwidth is-uppercase is-responsive`}
          title={name}
          type={buttonType}
          disabled={hasToggle}
          onClick={onClick}
        >
          {name}
        </button>
    </Link>
  );
}
