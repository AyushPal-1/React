import "../hooks/useEffect/index.css"
export const Parentcomponent = () => {
    return (
        <section>
            <h1>Component</h1>
            <ChildComponent data="React JS" />
        </section>
        
    )
}

const ChildComponent = (props) => {
    return (
        <section>
            <h1>Hello, I am Component B</h1>
            <GrandChildComponent data={props.data} />
        </section>
        
    )
}
const GrandChildComponent = (props) => {
    return (
        <section>
            <h1>Hello, I am Component C</h1>
            <GrandGrandChildComponent data={props.data} />
        </section>
        
    )
}
const GrandGrandChildComponent = (props) => {
    return (
        <section>
            <h1>Hello, I Love {props.data}</h1>
        </section>
        
    )
}