import memesData from "../memesData"
import { useState } from "react"


export default function Main() {

    const [meme, setMeme] = useState({
        firstName: "",
        lastName: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg",
    })


    const [allMemeImages, setAllMemeImages] = useState(memesData)
    

    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randNum].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url,
        }))
    }


    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text">Click for top text</label>            
                    <input id="top-text" type="text" className="form--input" placeholder="top text" />
                </div> 
                <div>
                    <label htmlFor="bottom--text">Click for bottom text</label>   
                    <input id="bottom--text" type="text" className="form--input" placeholder="bottom text" />
                </div>           
                <button onClick={getMeme} className="form--button" >Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt="" className="image--practice" />
        </main>
    )
}