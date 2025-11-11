import React from 'react'
import Header from '../components/Header'
import { Link, useOutletContext, useSearchParams } from 'react-router'

export const data = [
  {
    id: 1,
    title: "asjdkasjd",
    price: 12312
  },
  {
    id: 2,
    title: "asjdkasasdasd2312321jd",
    price: 231423523
  },
  {
    id: 3,
    title: "334455",
    price: 4535
  },
]
export default function Home() {
  const context = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams({
    name: 'Hello',
    age: 123
  })
  console.log(context);

  return (
    <div>
      {
        data.slice(+(searchParams.get('page') ?? 0) - 1, +(searchParams.get('page') ?? 0) + 1).map(el => (
          <Link key={el.id} to={`product/${el.id}`}> <div>
            {el.id} / {el.title} / {el.price}
          </div>
          </Link>

        ))
      }

      <button onClick={() => {
        setSearchParams(prev => {
          prev.set('page', (prev.get('page') - 1)  || 1)
          return prev
        })
      }}>PREV</button>
      {
        searchParams.get('page')
      }
      <button onClick={() => {
        setSearchParams(prev => {
          prev.set('page', +(prev.get('page') || 1) + 1)
          return prev
        })
      }}>NEXT</button>



    </div>
  )
}
