import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ImgCard1 = () => {
  const [count,setCount]=useState(0)
  const add=()=>{
    setCount(count+1)
  }
  const sub=()=>{
    setCount(count-1)
    if(count<=0){
      alert("count is not in negative")
    }
  }
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Count down start</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
      <Card.Text>
      {count}
      </Card.Text>
      <Button onClick={add} variant="primary mx-2">+</Button>
      <Button onClick={sub} variant="danger mx-2">-</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ImgCard1
