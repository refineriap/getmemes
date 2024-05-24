import memesData from "../memesData"



export default function Main() {
    function getMeme() {
        const getImage = memesData.data.memes
        const randNum = Math.floor(Math.random() * getImage.length)
        const url = getImage[randNum].url
        console.log(url)
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
                <img src="sk-uVPV_nV17Tw-unsplash.jpg" alt="" className="image--practice" />
            </div>
        </main>
    )
}