import NewsItem from './NewsItem'
import React, { Component } from 'react'

export default class News extends Component {

  constructor(){
    super();
    this.state= {
      articles : [] ,
      loading : false ,
      page :1 
    }
  }
  //using fetch api 
  //fetching data from the News API and store the 
  //articles in the component's state using the componentDidMount lifecycle method
  async componentDidMount(){
      let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=0e05d4b28f9d474b9492f6f9534ddf0d"
      let data = await fetch(url)
      let parsedData = await data.json()
      // console.log(parsedData);
      this.setState({articles : parsedData.articles,totalResults :parsedData.totalResults})
  }

  handlePreviousClick = async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=0e05d4b28f9d474b9492f6f9534ddf0d&page=${this.state.page -1}&pageSize-20`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({  
      page :this.state.page - 1 ,
      articles : parsedData.articles
    })
  }

  handleNextClick = async()=>{
    if (this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=0e05d4b28f9d474b9492f6f9534ddf0d&page=${this.state.page + 1}&pageSize-20`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({  
        page :this.state.page + 1 ,
        articles : parsedData.articles
    })
  }
  }



  render() {
    const { articles } = this.state;
  
    if (!articles || articles.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='container my-3'>
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {articles.map((element) => {
            const title = element.title ? element.title.slice(0, 45) : '';
            const description = element.description ? element.description.slice(0, 88) : '';
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={title} description={description} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
  
}
