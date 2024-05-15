import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Data from './data/images'
import Filter from './components/Filter'
import ImageList from './components/ImageList'
import Loading from './components/Loading'

export default function Works() {
  const [item, setItem] = useState(Data)
  const menuItems = [...new Set(Data.map(Val => Val.category))]
  const filterItem = curcat => {
    const newItem = Data.filter(newVal => {
      return newVal.category === curcat
    })
    setItem(newItem)
  }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <section className='section works wrapper'>
          <Filter
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <ImageList item={item} />
          <Navigation />
        </section>
      )}
    </>
  )
}
