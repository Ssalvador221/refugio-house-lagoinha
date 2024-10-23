import About from '@/components/About'
import Comments from '@/components/Comments'
import Contacts from '@/components/Contacts'
import HousesCard from '@/components/Cards/HousesCard'
import Localization from '@/components/localization'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsappButton'

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <HousesCard />
        <About />
        <Services />
        <Comments />
        <Localization />
        <Contacts />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
