/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout title='Page not found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/logo.png'
          width={70}
          height={70}
          className='bg-gray-800 rounded-2xl'
          alt='logo.png'
        />
         {/* <img
          src='/images/logo.png'
          width={70}
          height={70}
          className='bg-gray-800 rounded-2xl'
          alt='logo.png'
        /> */}
        <h1 className='text-6xl my-5'>Upsala!</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>This page does not exist</h2>
      </div>
    </Layout>
  );}