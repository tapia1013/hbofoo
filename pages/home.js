import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'


export default function Home() {
  return (
    <MainLayout>
      <FeaturedMedia />
    </MainLayout>
  )
}
