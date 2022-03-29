import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../components/UI/MediaRow/MediaRow'

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title='More Like This' type='large-v' />
      <CastInfo />
    </MainLayout>
  )
}
