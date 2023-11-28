import logo from "./logo.svg";
import "./App.css";

const SquareAndCube = () => {
  const array = [1, 2, 3, 4, 5];
  const squareArray = array.map((num) => num * num);
  const cubeArray = array.map((num) => num * num * num);

  return (
    <div>
      <p>Squares of Array Elements: {squareArray.join(', ')}</p>
      <p>Cubes of Array Elements: {cubeArray.join(', ')}</p>
    </div>
  );
}

function App() {

  const CircleArea = (radius) => Math.PI * radius * radius;

  const RectangleArea = (length, width) => length * width;

  const TriangleArea = (base, height) => 0.5 * base * height;

  const circleRadius = 5;
  const rectangleLength = 8;
  const rectangleWidth = 4;
  const triangleBase = 6;
  const triangleHeight = 3;

  return (
    <div className="App">
      {/* Question - 1 (Find area of circle,rectangle & triangle using arrow function.) */}

      <p><b><ul>Question - 1</ul></b></p>
      <p>Area of Circle: {CircleArea(circleRadius)}</p>
      <p>Area of Rectangle: {RectangleArea(rectangleLength, rectangleWidth)}</p>
      <p>Area of Triangle: {TriangleArea(triangleBase, triangleHeight)}</p>

      {/* Question - 2 (let a = [1,2,3,4,5] find square & cube of array elements.) */}

      <p><b><ul>Question - 2</ul></b></p>
      
      <h1>Square and Cube Calculator</h1>
      <SquareAndCube />

      {/* Question - 3 (let b = [11,22,33,44,55] how to display records?) */}

      <p><b><ul>Question - 3</ul></b></p>


      


    </div>
  );
}

export default App;
