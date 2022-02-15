import React, { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import "../Detail.scss"
import { stockContext } from "../App"
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group-v1'

let Box = styled.div`
  padding : 20px;
`;

let BoxTitle = styled.h4`
  font-size : 25px;
  color : ${props => props.titleColor};
`;



function Detail(props) {
  let [alert, setAlert] = useState(true);
  let stock = useContext(stockContext)
  let [activeTab, setActiveTab] = useState(0)
  let [changeSwitch, setChangeSwitch] = useState(false)

  function Stock(props) {
    return (
      <p>STOCK : {props.stock[0]} </p>
    )
  }

  function Alertbar() {
    return (
      <div>
        <div className="my-alert my-alert2 ">
          <p>재고가 얼마 남지 않았습닌다.</p>
        </div>
      </div>
    )
  }

  useEffect(() => {
    let alertTimer = setTimeout(() => {
      setAlert(false)
    }, 4000)
    return () => { clearTimeout(alertTimer) }
  }, [])
  // setTimeout 사용시 해제하는 기능도 추가하여 버그발생을 막는다.

  // return function none (){} 컨포넌트가 사라질때 사용하는 문법 ,화살표함수도 사용할수 있음

  let { id } = useParams();
  let navigate = useNavigate();
  //In react-router-dom v6 useHistory() is replaced by useNavigate().
  let detailItem = props.shoes.find((item) => {
    return item.id == id
  })
  let shoseNum = detailItem.id + 1


  return (
    <div className="container">
      <Box>
        <BoxTitle className="red"> Details</BoxTitle>
      </Box>
      {alert && <Alertbar />}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${shoseNum}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4>{detailItem.title}</h4>
          <p>{detailItem.content}</p>
          <p>{detailItem.price} won</p>
          <Stock stock={props.stock} />
          <button className="btn btn-danger m-2" onClick={() => { }} > 주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            navigate("/")
          }}>뒤로가기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { setChangeSwitch(false); setActiveTab(0) }}>상품 설명</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setChangeSwitch(false); setActiveTab(1) }}>주의사항</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransitionGroup in={changeSwitch} classNames="wow" timeout={500}>
        <TabContent activeTab={activeTab} setChangeSwitch={setChangeSwitch} />
      </CSSTransitionGroup>

    </div>
  )
}


function TabContent(props) {
  useEffect(()=>{
    props.setChangeSwitch(true)
  });
  if (props.activeTab === 0) {
    return <div>0번째 내용</div>
  } else if (props.activeTab === 1) {
    return <div>1번째 내용</div>
  } else if (props.activeTab === 2) {
    return <div>2번째 내용</div>
  }
}


export default Detail