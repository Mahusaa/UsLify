'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isLoading, setIsLoading ] = useState<boolean>(false);
  const clickHandler = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false)
    alert("got Clicked")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button isLoading={isLoading} onClick={clickHandler}>Click</Button>
      </div>
    </main>
  )
}
