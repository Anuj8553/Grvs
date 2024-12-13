import Card from "./card"
import Data from "../data.json"
import { database } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from "react"
import Tweet from "./Tweet";
function List() {
    const [data, setData] = useState({})
    const db = collection(database, "complaints")
    useEffect(() => {
        getDocs(db).then((res) => setData(res.docs.map((item) => {
            return { ...item.data(), id: item.id }
        })));
    }, [data]);
    const [tweets, setTweets] = useState({})

    async function fetchTweets() {
        const url = 'https://twitter154.p.rapidapi.com/hashtag/hashtag?hashtag=%23grievance&limit=20&section=top';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '834f9f0f0dmsh7855af479e4d60bp1d97f4jsne51872208059',
                'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setTweets(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTweets();
        console.log(tweets.results);
    }, [])

    return (
        <div className="flex flex-col  items-center w-2/3 max-md:w-full">
            <div className="w-full flex flex-col gap-9">
                {
                    Array.from(data).length > 0 && data?.map((item) => <Card key={item.key} data={item} />)
                }
                {
                    tweets.results && tweets.results?.map((item) => <Tweet key={item.tweet_id} data={item} />)
                }
            </div>
        </div>
    )
}

export default List