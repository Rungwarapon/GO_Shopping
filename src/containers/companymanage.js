// import { Card, Button } from "react-bootstrap";
import Nav from "../navbar/navbar"
import '../styles/App.css';

function Home() {
    return (
      <div className="App">
        <Nav/>
        <div className="layoutPage">
          <div>
            <p>แสดงตารางproductของเรา</p>
            <p>เพิ่มproduct ได้</p>
            <p>แก้ไขแต่ละproductได้/ลบ ประมาณhistoryในprofileก็ได้ หรือ ออกแบบใหม่เลย</p>
          </div>
      </div>
      </div>
    );
  }
  
  export default Home;
  