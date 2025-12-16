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
