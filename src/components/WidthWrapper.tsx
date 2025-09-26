import React from 'react'

interface WidthWrapperProps {
    children: React.ReactNode,
    className?: string   
    style?: React.CSSProperties 
}

const WidthWrapper = ({children,className,style}: WidthWrapperProps) => {
  return (
    <div className={`w-full max-w-[1200px] mx-auto py-5 px-2.5 sm:px-5 md:px-6 xl:px-0 ${className}`} style={style}>
        {children}
    </div>
  )
}

export default WidthWrapper