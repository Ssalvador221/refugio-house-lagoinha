import About from '@/components/About'
import HousesCard from '@/components/HousesCard'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <HousesCard />
      <About />
    </main>
  )
}
