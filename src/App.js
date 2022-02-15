// 리액트 라우터 6 에서 바뀐것들
// https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC

// 리액트 반복문에 키값을 넣어야하는 이유
// https://velog.io/@chyoon0512/React-map-%EC%82%AC%EC%9A%A9%EC%8B%9C-key-props%EB%A5%BC-%EB%B6%80%EC%97%AC%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
import React, { useState, useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Table
} from "react-bootstrap";
import "./App.css";
import Data from "./data";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Detail from "./component/Detail";
import Cart from "./component/Cart"
import axios from "axios"


export let stockContext = React.createContext();
//같은 값을 공유하는 범위 생성

function App() {
  let [shoes, setShoes] = useState(Data);
  let [loading, setLoading] = useState(false);
  let [stock, setStock] = useState([10, 20, 12]);

  function ShoeList(props) {
    let stocks = useContext(stockContext)
    return shoes.map((shoe, shoeIndex) => (
      <div className="list-wrap col-md-4" key={shoeIndex}>
        <img
          className="shoe-img"
          src={`https://codingapple1.github.io/shop/shoes${shoeIndex + 1}.jpg`}
        />
        <h4>{props.shoes[shoeIndex].title}</h4>
        <p>{props.shoes[shoeIndex].content}</p>
        <p>{props.shoes[shoeIndex].price} won</p>
        {`재고 : ${stocks[shoeIndex]}`}

      </div>
    ));
  }



  function Loding() {
    return (
      <div className="loading-wrap">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  function MainItemList() {
    return (
      <div className="container">
        <div className="row">
          <ShoeList shoes={shoes} />
        </div>
        <button className="btn btn-primary" onClick={() => {
          setLoading(true)
          axios.get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              setLoading(false)
              setShoes([...shoes, ...result.data]);
            })
            .catch(() => {
              setLoading(false)
            })
        }}>더보기</button>
      </div>
    );
  }

  function Jumbotron() {
    return (
      <div className="py-5 mb-4 bg-light rounded-3 jumbotron">
        <div className="container-fluid py-5 text-wrap">
          <h1 className="display-5 fw-bold">50% Season Off</h1>
          <p className=" fs-4 jumbotron-text p-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
        </div>
        <button className="btn btn-primary btn-lg mt-4" type="button">
          let's shop
        </button>
      </div>
    );
  }

  function MainPage() {
    return (
      <div>
        <Jumbotron />
        <MainItemList />
      </div>
    )
  }

  return (
    <div className="App">
      {loading && <Loding />}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">ShoesShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Link 를 안에 또 사용하면 a링크 중첩 에러 발생 */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0" >Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <stockContext.Provider value={stock}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/detail/:id" element={<Detail shoes={shoes} stock={stock} setStock={setStock} />}></Route>
          <Route path="/id"></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </stockContext.Provider>



    </div>
  );
}

export default App;


// 리액트쿼리
