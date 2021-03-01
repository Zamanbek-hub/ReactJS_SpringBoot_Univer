import React, {createContext, useEffect, useState } from "react";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";  



const localData = {
    status: "ok",
    totalResults: 38,
    articles: [ 
        {
            source: {
                id: "the-washington-post",
                name: "The Washington Post"
            },
            author: "Andrew Freedman, Jason Samenow, Paulina Firozi, Matthew Cappucci",
            title: "Live updates: Deaths mount, millions still without power amid new snow, ice storm - The Washington Post",
            description: "Yet another winter storm is hitting areas already reeling from record cold, snow and ice.",
            url: "https://www.washingtonpost.com/weather/2021/02/17/winter-storm-weather-texas-live/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2HUIRGTQX4I6XBSRNUYJD2WGH4.jpg&w=1440",
            publishedAt: "2021-02-17T16:25:00Z",
            content: "The National Oceanic and Atmospheric Administration (NOAA) highlighted the risk of unusually cold weather and winter storms as early as Feb. 5, the agency said in response to an inquiry from The Wash… [+1648 chars]",
            category:"Sport",
        },
        {
            source: {
                id: null,
                name: "Atlanta Journal Constitution"
            },
            author: "ArLuther Lee",
            title: "Biden rejects proposal to cancel $50,000 in student loan debt - Atlanta Journal Constitution",
            description: "President Joe Biden said Tuesday that he does not have the authority to forgive $50,000 in student loan debt for millions of Americans as congressional Democrats continue to pressure the White House for additional relief for struggling families amid the coron…",
            url: "https://www.ajc.com/news/biden-rejects-proposal-to-cancel-50000-in-student-loan-debt/2JPANXMRVJFUZGKLS5ZSPMKJSE/",
            urlToImage: "https://www.ajc.com/resizer/4tF6VRasblmxSjF_TMAgCNP8DZM=/1200x630/d1fegwn2wjh0cs.cloudfront.net/06-15-2020/t_0700ad356f134ea0be610d8286f0cd0b_name_88246163001_2520618609001_video_still_for_video_2520718074001.jpg",
            publishedAt: "2021-02-17T16:19:47Z",
            content: "The resolution calling for $50,000 in debt relief was introduced earlier this month by Senate Majority Leader Chuck Schumer of New York and Sen. Elizabeth Warren of Massachusetts.\r\nSuch a move would … [+1727 chars]"
        },
        {
            source: {
                id: "fox-news",
                name: "Fox News"
            },
            author: "Tyler McCarthy",
            title: "Paris Hilton engaged to Carter Reum: 'Yes to forever' - Fox News",
            description: "Paris Hilton confirmed that she is engaged to her entrepreneur boyfriend, Carter Reum.",
            url: "https://www.foxnews.com/entertainment/paris-hilton-engagement-carter-reum",
            urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2021/02/ParisHilton1.jpg",
            publishedAt: "2021-02-17T15:15:54Z",
            content: "Paris Hilton confirmed that she is engaged to her entrepreneur boyfriend, Carter Reum.\r\nThe star took to Twitter on her 40th birthday to announce that he popped the question days prior and that she r… [+2522 chars]",
            category:"Sport",
        },
        {
            source: {
                id: null,
                name: "New York Times"
            },
            author: "Emily Schmall, Shalini Venugopal Bhagat",
            title: "Indian Court Rejects M.J. Akbar's Defamation Claim in #MeToo Case - The New York Times",
            description: "Priya Ramani had faced up to two years in prison after making sexual harassment accusations against M.J. Akbar, once a prominent member of the Modi government.",
            url: "https://www.nytimes.com/2021/02/17/world/asia/india-mj-akbar-metoo.html",
            urlToImage: "https://static01.nyt.com/images/2021/02/16/world/00india-metoo-1/00india-metoo-1-facebookJumbo.jpg",
            publishedAt: "2021-02-17T15:04:00Z",
            content: "In October 2017, she wrote an article for Vogue India in which she described an uncomfortable hotel room encounter with a senior editor during a job interview more than 20 years earlier. She describe… [+1431 chars]",
            category:"Politics",
        }, 
        {
            source: {
                id: "the-verge",
                name: "The Verge"
            },
            author: "Julia Alexander",
            title: "First trailer for Disney’s Cruella movie feels more Joker than 101 Dalmatians - The Verge",
            description: "In the first trailer for Disney’s live-action film Cruella, Emma Stone takes on more of a Joker role than what fans may remember of Cruella de Vil in 101 Dalmatians. The movie is currently set to be released in theaters on May 28th.",
            url: "https://www.theverge.com/2021/2/17/22287149/cruella-trailer-disney-emma-stone-live-action-101-dalmations",
            urlToImage: "https://cdn.vox-cdn.com/thumbor/sQxsHGuDvGXbTDOcqOxwbKR-Y4A=/0x0:1413x740/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22309592/Screen_Shot_2021_02_17_at_8.59.58_AM.png",
            publishedAt: "2021-02-17T14:39:48Z",
            content: "Emma Stone offers a mad take on Cruella de Vil \r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.",
            category:"Politics",
        },
        {
            source: {
                id: "google-news",
                name: "Google News"
            },
            author: null,
            title: "Trump's former Atlantic City casino imploded after years of disrepair - Washington Post",
            description: null,
            url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bGpoV3NNc1lrMnfSAQA?oc=5",
            urlToImage: null,
            publishedAt: "2021-02-17T14:38:33Z",
            content: null,
            category:"Technology",
            },
        {
            source: {
                id: null,
                name: "Deadspin"
            },
            author: "Sam Fels",
            title: "What if Jayson Tatum never gets better after battling COVID-19? - Deadspin",
            description: "It’s not what the NBA wants you to think about. And Jayson Tatum probably doesn’t want to think about it much either. It’s not how athletes at his level process things. But Tatum was honest Tuesday when he talked about being short of breath during games more …",
            url: "https://deadspin.com/what-if-jayson-tatum-never-gets-better-after-battling-c-1846286507",
            urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/wa1omhg938kixmsz5c9d.jpg",
            publishedAt: "2021-02-17T14:35:00Z",
            content: "Its not what the NBA wants you to think about. And Jayson Tatum probably doesnt want to think about it much either. Its not how athletes at his level process things. But Tatum was honest Tuesday when… [+3976 chars]",
            category:"Technology",
        },
        {
            source: {
                id: "nbc-news",
                name: "NBC News"
            },
            author: "Yuliya Talmazan",
            title: "Prince Philip, husband of U.K.'s Queen Elizabeth II, admitted to hospital - NBC News",
            description: "Prince Philip, the husband of the U.K.'s Queen Elizabeth II, has been admitted to a London hospital, Buckingham Palace confirmed on Wednesday.",
            url: "https://www.nbcnews.com/news/world/prince-philip-husband-u-k-s-queen-elizabeth-ii-admitted-n1258094",
            urlToImage: "https://media2.s-nbcnews.com/j/newscms/2021_07/3450639/210217-prince-philip-mc-1443_3145d10cc6a844c46a7f3287301c41ef.nbcnews-fp-1200-630.JPG",
            publishedAt: "2021-02-17T14:34:00Z",
            content: "Prince Philip, the husband of Britain's Queen Elizabeth II, has been admitted to a London hospital, Buckingham Palace said in a statement Wednesday.\r\nThe Duke of Edinburgh was taken to the King Edwar… [+1502 chars]",
            category:"Business",
        },
        {
            source: {
                id: null,
                name: "NPR"
            },
            author: "",
            title: "Shoppers Splurged In January As New Stimulus Checks Arrived - NPR",
            description: "Retail sales soared 5.3% last month compared to December, much more than anticipated, as U.S. families began receiving new federal coronavirus relief checks.",
            url: "https://www.npr.org/2021/02/17/968616345/shoppers-splurged-in-january-as-new-stimulus-checks-arrived",
            urlToImage: "https://media.npr.org/assets/img/2021/02/17/gettyimages-1230486933_wide-f607ed5269fc3e38e4a9f124d0fceababa3bfe8f.jpg?s=1400",
            publishedAt: "2021-02-17T14:33:52Z",
            content: "People walk in front of stores in New York's Herald Square. Retail sales soared 5.3% last month compared to December as U.S. families began receiving new federal coronavirus relief checks.\r\nAngela We… [+1821 chars]",
            category:"Business",
            },
    ] 
}

export const NewsContext = createContext()




export const Home = (props) => {
    let { category } = useParams();

    console.log("category =", category)
    let articlesArr = []
    for (var i = localData.articles.length - 1; i >= 0; i--) {
        if (localData.articles[i].category == category){
            console.log("category = " + localData.articles[i])
            articlesArr.push(localData.articles[i]);
        }
    }

    
    let newData = {articles:articlesArr}
    console.log(newData.articles)
    return (
        <NewsContext.Provider value={{newData}}>
        {props.children}
        </NewsContext.Provider>
    )
}


export const NewsContextProvider = (props) => {
    // const [data, setData] = useState();
    // const apiKey = "013fbda9cc3648629be9bb122148ef19";

    // useEffect(() => {
    //     axios.get(`http://newsapi.org/v2/everything?q=tesla&from=2021-01-17&sortBy=publishedAt&apiKey=${apiKey}`)
    //     .then(response => setData(response.data))
    //     .catch((error) => console.log(error));
    // }, [data])


    return (
        
            

            <Router>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/:category">
                    <Home props={props}/>
                </Route>
                </Switch>
            </Router>
        
    );                          
};  