# NewsHome-Api-App-Project

This is a simple API integrated news application where the news will be updated by time to time and gives you updated news on the go.

![image](https://user-images.githubusercontent.com/76425862/184696009-8df9a3b5-7c9f-48df-bfc2-4dfd11a1dba9.png)

### Features
- Search bar post request, gives you data from your query
- Beautiful UI design
- country specific data
- Updated in every 10 minutes

I used fetch function to simply make this work even simpler.

API link: [https://newsapi.org]

> API used: https://newsapi.org/v2/everything?q=bitcoin&apiKey=a4f38075bc0441fd85dc21dbbb2da58b

Unfortunately this'll not work on browser but only work on localhost, so it's a drawback. Because the API provider is limiting this thing and providing on higher plan. 

You can use any other API on the internet. I used it, because it gives lots of information in a single json format.

Anyway, the response will be like this, 

```
{
"status": "ok",
"totalResults": 7318,
"articles": [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "The Rise and Fall of a Bitcoin Mining Sensation",
            "description": "Compass Mining grew quickly during crypto’s halcyon days. Now, its customers and their thousands of mining machines are stuck.",
            "url": "https://www.wired.com/story/compass-mining-bitcoin-russia/",
            "urlToImage": "https://media.wired.com/photos/62e9c5e1d7368105da057de3/191:100/w_1280,c_limit/BitRiver-Mining-Center-Rise-And-Fall-Of-Bitcoin-Mining-Business-1184520941.jpg",
            "publishedAt": "2022-08-03T11:00:00Z",
            "content": "It was 8:45 in the morning of June 13 when Bill Stewart, the CEO of Maine-based bitcoin mining business Dynamics Mining, received a call from one of his employees. He's like, Every machine inside of … [+3472 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lily Hay Newman, Andy Greenberg",
            "title": "Bitcoin Fog Case Could Put Cryptocurrency Tracing on Trial",
            "description": "Roman Sterlingov, accused of laundering $336 million, is proclaiming his innocence—and challenging a key investigative tool.",
            "url": "https://www.wired.com/story/bitcoin-fog-roman-sterlingov-blockchain-analysis/",
            "urlToImage": "https://media.wired.com/photos/62e95bada1dc74857a858363/191:100/w_1280,c_limit/Bitcoin-Fog-Security-GettyImages-1241143235.jpg",
            "publishedAt": "2022-08-02T22:02:13Z",
            "content": "Tools to trace cryptocurrencies have, over just the last several years, allowed law enforcement agencies to convict dark web black market administrators, recover millions in ransomware payments, seiz… [+3510 chars]"
        }
    ]
}
```

So this is all about this project, not used any rocket science but very simple and crisp algorithms are used.

Thank You, Have fun!
