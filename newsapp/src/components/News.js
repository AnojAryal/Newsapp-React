import React from 'react'
import NewsItem from './NewsItem'

export default function News() {
  return (
    <div className='container my-3'>
      <h2>NewsMonkey - Top Headlines</h2>
       <div className="row">
        <div className="col-md-4">
            <NewsItem title = "pic1" description ="this is pic 1"/>
        </div>
        <div className="col-md-4">
            <NewsItem title = "pic1" description ="this is pic 1"/>
        </div>
        <div className="col-md-4">
            <NewsItem title = "pic1" description ="this is pic 1"/>
        </div>
      </div>
    </div>
  )
}
