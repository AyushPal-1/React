// name export components using export keyword
export const Netflixcard = () => {
    // Dynamic Values creating
    const name = "Queen of Tears"
    const age = 16
    return (    
      <div>     
        <div>
          <img src="tear.webp" alt="" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating:8.2</h3>
        <p>Sumamry: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nisi voluptatum magni nemo vero sapiente.</p>
        {/* Ternary Condition Using */}
        <button> {age >= 18 ? "Watch Now" : "Not Available"}</button>
      </div>
      );
   
  }

  // exporting default components
// export default Netflixcard
