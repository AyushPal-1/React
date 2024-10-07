
export const EventHanding = () => {
    function handleButtonClick(){
        alert("alert")
    }
    return (
        <>
        <button onClick={handleButtonClick}>Click</button>
        </>
    )
}