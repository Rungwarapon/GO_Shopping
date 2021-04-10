import Nav from "../navbar/navbar"
import {Button} from 'react-bootstrap';
import '../styles/App.css';
function detailproduct() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <h1 className="text-center font-italic">CPU CORE I7-9700F (Original)</h1>
            <div className="containerProfile">
              <div className="itemProfile1">
                <img style={{ width:'300px' }} src="/images/test.jpeg"></img>
                <div>
                  <h2>บริษัท123456 จำกัด</h2>
                </div>
                <div className="contactdetail">
                  <div style={{ padding:'10%' }}>
                    <p>Phone : 0800808080</p>
                    <p>Mail : 610700000@kmitl.ac.th</p>
                    <p>Line : intal thailand</p>
                    <p>Address: 1/10 ซอย หลวงแพ่ง999 เขต ลาดกระบัง 10520 กรุงเทพ </p>
                  </div>
                </div>
              </div>
              <div className="itemProfile2">
                  <div className="right">
                    <div style={{ height:"20em" }}>
                      <p>Intel Core i7-9700F 3.00 GHz 8C/8T CPU LGA 1151 ซีพียูรุ่นที่ 9 จาก Intel มี 8 คอร์ 8 เทรด ความเร็วพื้นฐาน 3.0 GHz สูงสุด 4.70 GHz เล่นเกม และทำงานต่างๆ ได้อย่างดี ทั้งงานทั่วไป งานกราฟิก งาน 3D ได้อย่างไหลลื่น CPU Intel Core i7-9700F มีเทคโนโลยี Intel Turbo Boost Technology 2.0 ช่วยเพิ่มความเร็วในช่วงระยะหนึ่งขณะทำงาน ไม่มี GPU ในตัว ต้องติดตั้งการ์ดจอแยก</p>
                    </div>
                    <div>
                      <p>จำนวน : 10000 ชิ้น</p>
                      <p>ราคา : 12000 บาท</p>
                    </div>
                    <Button variant="primary">
                      preorder
                    </Button>
                  </div>
              </div>
            </div>
        </div>
        

      </div>
    );
  }
  
  export default detailproduct;
  