import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap"
import { connect } from "react-redux";

function Cart(props) {


  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>상품번호</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {props.state.map((data, index) => {
              return (<tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quan}</td>
                <td>{data.color}</td>
                <td>
                  <button onClick={() => { props.dispatch({ type: "increase" }) }}>+</button>
                  <button onClick={() => { props.dispatch({ type: "decrease" }) }}>-</button>
                </td>
              </tr>)
            })}
          </tbody>
        </Table>
      </div>

      {
        props.alert === true
          ? (
              <div className="my-alert2">
                <p>지금 구매하시면 신규 할인 50%</p>
                <button onClick={() => { props.dispatch({ type: "close" }) }}>닫기</button>
              </div>
              )
            : null
      }

    </div>
  )
}

function cartStore(state) {
  console.log(state)
  return {
    state: state.reducer,
    alert: state.reducer2
  }
}

export default connect(cartStore)(Cart)


// export default Cart;