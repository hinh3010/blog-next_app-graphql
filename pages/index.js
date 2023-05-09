import Head from 'next/head'
import PostCard from '@/components/PostCard'
import PostWidget from '@/components/PostWidget'
import Categories from '@/components/Categories'
import { getPosts } from '@/services'

export default function Home({ posts }) {
  return (
    <div
      className="container mx-auto px-10 mb-8"
    >
      <Head>
        <title>adu</title>
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post, i) => <PostCard key={i} post={post.node} />)
          }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

const initPosts = [
  { title: 'React Native', excerpt: 'React Native' },
  { title: 'React Native', excerpt: 'React Native' },
  { title: 'React Native', excerpt: 'React Native' },
]

export async function getStaticProps() {
  const posts = await getPosts() || initPosts

  return {
    props: { posts }
  }
}