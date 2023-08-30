'use client'
import ButtonTest from '@/components/buttontest';
import { useState } from 'react'

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
        <ButtonTest isLoading={isLoading} onClick={clickHandler}>Click</ButtonTest>
      </div>
    </main>
  )
}
