
export default function Main() {
    function handleClick(event) {
        event.preventDefault();
        console.log("I was clicked!!!")
    }

    function handleOnMouseOver( ) {
        
        console.log("I entered the image!!")
    }

    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">Click for top text</label>            
                    <input id="top-text" type="text" className="form--input" placeholder="top text" />
                </div> 
                <div>
                    <label htmlFor="bottom--text">Click for bottom text</label>   
                    <input id="bottom--text" type="text" className="form--input" placeholder="bottom text" />
                </div>           
                <button onClick={handleClick} className="form--button" >Get a new meme image</button>
                <img onMouseOver={handleOnMouseOver} src="sk-uVPV_nV17Tw-unsplash.jpg" alt="" className="image--practice" />
            </form>
        </main>
    )
}