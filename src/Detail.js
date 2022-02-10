import React, { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import "./Detail.scss"
import { stockContext } from "./App"

let Box = styled.div`
  padding : 20px;
`;

let BoxTitle = styled.h4`
  font-size : 25px;
  color : ${props => props.titleColor};
`;

function Detail(props) {
  let stocks = useContext(stockContext)
  let [alert, setAlert] = useState(true);

  function Stock (){
    return (
      <p>STOCK : {stocks} </p>
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
    let alertTimer = setTimeout(()=>{
      setAlert(false)
    },4000)
    return ()=>{ clearTimeout(alertTimer) }
  },[])
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
      {alert && <Alertbar/>}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${shoseNum}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4>{detailItem.title}</h4>
          <p>{detailItem.content}</p>
          <p>{detailItem.price} won</p>
          <Stock />
          <button className="btn btn-danger m-2" onClick={()=>{props.setStock()}} > 주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            navigate("/")
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}



export default Detail