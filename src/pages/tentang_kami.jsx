import Layout from '@/Layout/Layout'
import Link from 'next/link'
import React from 'react'

const tentang_kami = () => {
  return (
    <Layout>
      <div>
        <ul>
          <li>
            <Link href={"/"}>Index</Link>
          </li>
          <li>
            <Link href={"/armada"}>Armada</Link>
          </li>
          <li>
            <Link href={"/tentang_kami"}>Tentang</Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default tentang_kami