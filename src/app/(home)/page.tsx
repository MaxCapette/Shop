import Product from '@/components/layout/productUnique/product'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40">
      <Image className='homeLogo' src='/images/burger.png' alt='' width={1024} height={1024}></Image>
    </main>
  )
}
