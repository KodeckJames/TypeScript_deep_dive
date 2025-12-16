// Component Typing

type GreetingType = {
  name: string
  age?: number
}

export default function GreetingComponent({ name, age }: GreetingType) {
  return (
    <div>
      <p>Hello {name}!</p>
      {age !== undefined && <p>You are {age} years old </p>}
    </div>
  )
}

// Common Patterns
// Type-Safe Events
// Type event handlers for input and buttons

// Input change
const NameInput = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);        
    }
    return <input onChange={handleChange}/>
}
console.log(NameInput);

// Button click
const SaveButton = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return <button onClick={handleClick}>Save</button>
}
console.log(SaveButton);
