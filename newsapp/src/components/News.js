import NewsItem from './NewsItem'
import React, { Component } from 'react'

export default class News extends Component {
  articles =[
    {
      "source": { "id": "google-news-au", "name": "Google News (Australia)" },
      "author": "9News",
      "title": "Ex-Test cricketer Stuart MacGill cleared of intimidating woman - 9News",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiggFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvc3R1YXJ0LW1hY2dpbGwtZXgtdGVzdC1jcmlja2V0ZXItY2xlYXJlZC1pbnRpbWlkYXRpbmctd29tYW4vODk1ZjI4MmItZGY5My00MDMwLWE4M2ItYjhmMzVmOTk0N2Q50gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvODk1ZjI4MmItZGY5My00MDMwLWE4M2ItYjhmMzVmOTk0N2Q5?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-06-02T09:14:49+00:00",
      "content": null
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component")
    this.state= {
      articles : this.articles ,
      loading : false 
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            const title = element.title ? element.title.slice(0, 45) : '';
            const description = element.description ? element.description.slice(0, 88) : '';
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={title} description={description} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
   }
  }    


