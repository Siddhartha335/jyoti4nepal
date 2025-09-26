import React from 'react'

interface HeroWrapperProps {
    children: React.ReactNode,
    className?: string   
    style?: React.CSSProperties 
}

const HeroWrapper = ({children,className,style}: HeroWrapperProps) => {
  return (
    <div className={`w-full max-w-[1200px] mx-auto py-5 px-6 sm:px-10 ${className}`} style={style}>
        {children}
    </div>
  )
}

export default HeroWrapper