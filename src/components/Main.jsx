
export default function Main() {
    function handleClick() {
        console.log("I was clicked!!!")
    }

    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">Click for top search</label>            
                    <input id="top-text" type="text" className="form--input" placeholder="top text" />
                </div> 
                <div>
                    <label htmlFor="bottom--text">Click for bottom search</label>   
                    <input id="bottom--text" type="text" className="form--input" placeholder="bottom text" />
                </div>           
                <button className="form--button" onClick={handleClick}>Get a new meme image</button>
            </form>
        </main>
    )
}