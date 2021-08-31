import styled, {keyframes} from 'styled-components'

const shiftRight = keyframes`
  0% {
    transform: translateX(-400px);
    opacity: 0;
  }
  20% {
    transform: translateX(-350px);
    opacity: 1;
  }
  80% {
    transform: translateX(50px);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
`

const Title = styled.div`
  width: 100%;
  font-size: 1.8rem;
  background: linear-gradient(180deg, #aaa, #fff);
  text-align: center;
  padding: 10vh;
  margin-bottom: 1rem;
  position: relative;

  span {
    position: absolute;
    left: 68%;
    top: 50%;
    height: 2px;
    width: 1rem;
    background: #666;
    animation: ${shiftRight} 1.6s linear infinite;
  }

  &:hover span {
    background: #66a;
    animation: ${shiftRight} 1.2s linear infinite;
  }

  span:nth-child(2) {
    left: 74%;
    top: 40%;
    animation-delay: .25s;
  }
  span:nth-child(3) {
    left: 70%;
    top: 40%;
    animation-delay: .75s;
  }
  span:nth-child(4) {
    left: 78%;
    top: 42%;
    animation-delay: .15s;
  }
  span:nth-child(5) {
    left: 76%;
    top: 43%;
    animation-delay: .45s;
  }
  span:nth-child(6) {
    left: 72%;
    top: 37%;
    animation-delay: .65s;
  }
`

const Nav = () => {
  return (
    <Title>
    Todo List
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </Title>
  )
}

export default Nav