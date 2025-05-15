import React from 'react'
import { Merienda, Nunito, Ubuntu,  } from 'next/font/google';


const font = Nunito({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})
export default function layout({ children }) {
    return (
        <div className={`${font.className}`}>
            {children}
        </div>
    )
}
