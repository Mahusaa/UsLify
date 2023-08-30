import React, { FC } from 'react'
import { Button } from './ui/button'
import { Loader2 } from "lucide-react"

interface ButtonTestProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading: boolean
}

const ButtonTest: FC<ButtonTestProps> = ({ isLoading, children, ...props }) => {
    console.log(isLoading)
    return (
        isLoading ? <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button> : <Button {...props}>{children}</Button>
            
    )
}
export default ButtonTest