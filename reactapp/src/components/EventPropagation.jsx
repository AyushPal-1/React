import "./EP.css";
export const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("GrandParent Clicked");
        
    }
    const handleParentClick = () => {
        console.log("Parent Clicked");
        
    }
    const handleChildClick = (event) => {
        // stop Propagation using event.stopPropagation()
        // event.stopPropagation()
        console.log("Child Clicked");
        
    }
    return (
        <section className="main-div">
            {/* using Capture */}
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}