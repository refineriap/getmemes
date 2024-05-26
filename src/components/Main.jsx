import memesData from "../memesData"
import { useState } from "react"


export default function Main() {
    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1g8my4.jpg")

    function getMeme() {
        const getImage = memesData.data.memes
        const randNum = Math.floor(Math.random() * getImage.length)
        setMemeImage(getImage[randNum].url)
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
                <img src={memeImage} alt="" className="image--practice" />
            </div>
        </main>
    )
}