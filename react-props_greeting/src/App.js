import "./styles.css";

export default function App() {
  //const coaches = ["Siva", "Swetha"];
  return <Greeting name="Swetha" />;
}

function Greeting({ name }) {
  if (name === "coach") {
    return <h1>Hello,Coach</h1>;
  } else {
    return <h1>Hello, {name}!</h1>;
  }
}

//retrun <h1>Hello{coaches.includes(name)? "coach!!" : name}</h1>
