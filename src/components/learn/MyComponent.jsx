//component = html + css + js
import './style.css'

const MyComponent = () => {
    // const hoidanit = "eric"; //string
    // const hoidanit = 25; //number
    // const hoidanit = true; //boolean
    // const hoidanit = undefined; //undefined
    // const hoidanit = null; //null   
    // const hoidanit = [1, 2, 3];
    const hoidanit = {
        name: "hoidanit",
        age: 25
    }

  return (
    <>
    <div> {JSON.stringify(hoidanit)} sang </div>
    <div className='child'
        style={{ borderRadius: "10px"}}>child</div>
    </>
  );
}

export default MyComponent