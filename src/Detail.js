import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function DetailItem (props) {
    
    let { id } = useParams();
    let navigate = useNavigate();
    //In react-router-dom v6 useHistory() is replaced by useNavigate().


    return(
       <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
          <h4>{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[IDBDatabase].price} won</p>
          <button className="btn btn-danger m-2">주문하기</button>
          <button className="btn btn-danger" onClick={()=>{ 
              navigate("/")
           }}>뒤로가기</button>
          </div>
        </div>
      </div>      
    )
  }

  export default DetailItem