import './Courses.css'

const Courses = () =>{
    const sub1 = "Java"
    const sub2 = "JavaScript"
    const sub3 = "Typescript"
    const sub4 = "Reactjs"

    const aiml = {
        tech1 : 'Python',
        tech2 : 'Pandas',
        tech3 : 'NumPy'
    }
    return(
        <>
            <h2 style={{
                color : 'orangered',
                textAlign : 'center',
                fontFamily : 'monospace'
            }}>
                Welcome to AMIT IT
            </h2>
            <p>Most Popular Lang - {sub2}</p>
            <p>Most Used Lang - {sub1}</p>
            <p>Type saftey lang for front end - {sub3}</p>
            <p>Frontend Library - {sub4}</p>
            <p>AI/ML Technology - {aiml.tech1}, {aiml.tech2}, {aiml.tech3}</p>
        </>
    )
}
export default Courses