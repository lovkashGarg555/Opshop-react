import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'


function App(props) {

  let styleactualmain = {
    backgroundColor: "#080135",
    margin:"45px 10px",
    padding:"20px"
    ,display:'flex',
    width: "100vw",

  }
  let stylemain = {
    display: "flex",
    flexDirection: "column",
    width: "80vw",
    height: "310vh",
    //  border:"4px solid #000000",
    backgroundColor: "white",
    border:"4px solid black",
    borderRadius:"45px",
    padding:"20px",
    margin:"0 15%"

  }
  let styleproductapp = {
    // height: "100%",
    width: "50%",
    // flex: 0.5,
    // margin: "10px",
    borderRadius:"30px",
    // boxShadow: "7px 7px rgb(149, 149, 215)"
  }
  let styleoneproduct = {
    marginTop: "10px",
    marginBottom:"60px",
    border: "2px solid #000000",
    height: "33vh",
    color: "black",
    // borderRadius:"30px",
    display: "flex",
    // justifyContent:"center",
    flexDirection: "row",
    // boxShadow: "-3px 3px grey"

  }
  let styleproductdetail = {
    border: "3px solid black",
    // margin: "10px",
    width: "100%",
    display: "column",
    padding:"15px",
  }
  let styleproductimg={
    width:"100%",
    height:"100%",
    borderRadius:"10px"
  }
 
  let platformname = {
    fontSize:"30px",
    margin: "0px",
    fontWeight:"bolder",
    fontStyle:"italic",
    border: "3px solid black",
    padding:"5px 10px",
    borderRadius:"30px"
  }
  let discount = {
    display:"inline",
    color: "red",
  }
  let styledescription={
    textDecoration:"none",
    color:"black",
    fontSize:"25px",
  }
  let styleproductprice={
margin:"0px 15px"
  }
  let styleproductrating={
    margin:" 0px 15px",
  }
  return (
    <>
      <body  className="mx-8"  style={{margin:"0px", boxSizing:'border-box',backgroundColor:"#080135",width:'100vw'}}>
        
      
      {/* console.log(res) */}
      <Navbar />
      <main style={styleactualmain}>
        <div className="container" style={stylemain}>
          <h2 className='text-6xl my-3'>Best Prices for You</h2>
          <div className="platformname" style={platformname}>Amazon</div>
          <div className="box" style={styleoneproduct}>
            <div className="box1" style={styleproductapp} ><img src="https://m.media-amazon.com/images/I/815UZPn8WUL._SX679_.jpg" alt=""  style={styleproductimg}/></div>
            <div className="box2" style={styleproductdetail}>
              <div className="description" style={{margin:"3px 10px"}}>
                <a href="https://www.amazon.in/ZEBRONICS-ZEB-V19HD-LED-Supporting-Mountable/dp/B09GG4FT99/ref=sr_1_1?crid=5LY5FM65Q2BC&keywords=%28ZEBRONICS+ZEB-V19HD+LED+Monitor+18.5inch+with+Supporting+HDMI%2C+VGA+Input%2C+HD+1366+x+768%2C+16.7M+Colors%2C+Glossy+Panel%2C+Slim+Design+%26+Wall+Mountable%2C+Black%29&qid=1695313711&sprefix=zebronics+zeb-v19hd+led+monitor+18.5inch+with+supporting+hdmi%2C+vga+input%2C+hd+1366+x+768%2C+16.7m+colors%2C+glossy+panel%2C+slim+design+%26+wall+mountable%2C+black+%2Caps%2C192&sr=8-1" style={styledescription}><h3>ZEBRONICS Zeb-V19Hd 18.5 Inch (46.99 Cm) Led Monitor with Supporting Hdmi, Vga Input, Hd 1366 X 768 Pixels, 16.7M Colors, Glossy Panel, Slim Design & Wall Mountable, Black </h3></a></div>
              <div className="price" style={styleproductprice}><span style={discount}>-62%</span><h3>₹4231</h3>MRP : <span style={{textDecoration: 'line-through'}}>₹7,999</span></div>
              <div className="rating_availability" style={styleproductrating}><h3>Rating :<span style={{fontSize:"26px"}}> 4.6</span></h3></div></div></div>
          <div className="platformname" style={platformname}>Flipkart</div>
          <div className="box" style={styleoneproduct}>
            <div className="box1" style={styleproductapp} ><img src="https://rukminim2.flixcart.com/image/416/416/ku2zjww0/monitor/g/y/k/zeb-v19hd-led-hd-zeb-v19hd-led-zebronics-original-imag79zbcpga2hzq.jpeg?q=70" alt=""  style={styleproductimg}/></div>
            <div className="box2" style={styleproductdetail}>
              <div className="description">
              <a href="https://www.flipkart.com/zebronics-18-5-inch-hd-led-backlit-tn-panel-hdmi-vga-input-1366-x-768-16-7m-colors-glossy-panel-slim-design-wall-mountable-monitor-zeb-v19hd-led/p/itmcd404240dd818?pid=MONG6Z8GQEHKGZKF&lid=LSTMONG6Z8GQEHKGZKFFPHMJ5&marketplace=FLIPKART&q=%28ZEBRONICS+ZEB-V19HD+LED+Monitor+18.5inch+with+Supporting+HDMI%2C+VGA+Input%2C+HD+1366+x+768%2C+16.7M+Colors%2C+Glossy+Panel%2C+Slim+Design+%26+Wall+Mountable%2C+Black%29&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=67304c87-196b-4379-9d07-18ac9c9b2f17.MONG6Z8GQEHKGZKF.SEARCH&ppt=sp&ppn=sp&ssid=sdpvhnb3sw0000001695313733671&qH=0d0a24a34e4f2972" style={styledescription}><h3>ZEBRONICS 18.5 inch HD LED Backlit TN Panel HDMI, VGA Input, HD 1366 x 768, 16.7M Colors, Glossy Panel, Slim Design, Wall Mountable Monitor (ZEB-V19HD LED)  (Response Time: 8 ms, 60 Hz Refresh Rate)</h3></a></div>
              <div className="price"><discount style={discount}>-62%</discount><h3>₹4231</h3> MRP: <span style={{textDecoration: 'line-through'}}>₹7,999 </span> </div>
              <div className="rating_availability"><h3>Rating : 4.5</h3></div></div></div>
          <div className="platformname" style={platformname}>Zebronics</div>
          <div className="box" style={styleoneproduct}>
            <div className="box1" style={styleproductapp} ><img src="https://zebronics.com/cdn/shop/products/ZEB-V19HD-LED-pic1.jpg?v=1609156064&width=800" alt=""  style={styleproductimg}/></div>
            <div className="box2" style={styleproductdetail}>
              <div className="description">
            <a href="https://zebronics.com/products/zeb-v19hd-led" style={styledescription}><h3>ZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor ZEB-V19HD LED,
Slim design, glossy panel,Video resolution of 1400 x 900,VGA input,,Built-in power supply </h3></a></div>
              <div className="price"><discount style={discount}>-42%</discount><h3>₹3,899</h3>MRP:  <span style={{textDecoration: 'line-through'}}>₹8,999</span></div>
              <div className="rating_availability"><h3>Rating : 4.0</h3></div></div></div>
          <div className="platformname" style={platformname}>paytm Mall</div>
          <div className="box" style={styleoneproduct}>
            <div className="box1" style={styleproductapp} ><img src="https://rukminim2.flixcart.com/image/416/416/ku2zjww0/monitor/g/y/k/zeb-v19hd-led-hd-zeb-v19hd-led-zebronics-original-imag79zbcpga2hzq.jpeg?q=70" alt=""  style={styleproductimg}/></div>
            <div className="box2" style={styleproductdetail}>
              <div className="description">
              <a href="" style={styledescription}><h3>ZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor ZEB-V19HD LED,
Slim design, glossy panel,Video resolution of 1400 x 900,VGA input,,Built-in power supply</h3></a>
    </div>
              <div className="price"><discount style={discount}>-52%</discount><h3>₹4,099</h3>MRP:  <span style={{textDecoration: 'line-through'}}>₹8,999</span> </div>
              <div className="rating_availability"><h3>Rating : 4.3</h3></div></div></div>
          <div className="platformname" style={platformname}>Chroma</div>
          <div className="box" style={styleoneproduct}>
            <div className="box1" style={styleproductapp} ><img src="https://m.media-amazon.com/images/I/815UZPn8WUL._SX679_.jpg" alt=""  style={styleproductimg}/></div>
            <div className="box2" style={styleproductdetail}>
              <div className="description">
              <a href="" style={styledescription}><h3>ZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor ZEB-V19HD LED,
Slim design, glossy panel,Video resolution of 1400 x 900,VGA input,,Built-in power supply</h3></a></div>
              <div className="price"><discount style={discount}>-37%</discount><h3>₹4299</h3>MRP:  <span style={{textDecoration: 'line-through'}}>₹8,999</span>  </div>
              <div className="rating_availability"><h3>Rating : 4.1</h3></div></div></div>
          <div className="platformname" style={platformname}>Reliance Digital</div>
          <div className="box" style={styleoneproduct}>
            <div className="box1" style={styleproductapp} ><img src="https://m.media-amazon.com/images/I/815UZPn8WUL._SX679_.jpg" alt=""  style={styleproductimg}/></div>
            <div className="box2" style={styleproductdetail}>
              <div className="description">
              <a href="" style={styledescription}><h3>ZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor - ZebronicsZEB-V19HD LED - LED Monitor ZEB-V19HD LED,
Slim design, glossy panel,Video resolution of 1400 x 900,VGA input,,Built-in power supply</h3></a>
</div>
              <div className="price"><discount style={discount}>-62%</discount><h3>₹4,699</h3>MRP:  <span style={{textDecoration: 'line-through'}}>₹8,999</span>  </div>
              <div className="rating_availability"><h3>Rating :4.3</h3></div></div></div>
              <div className="morebutton" style={{display:'flex',justifyContent:"center"}}>
              <button style={{display:'flex',justifyContent:"center" ,backgroundColor:'gold',color:'#080135',fontSize:'30px',width:'200px' ,boxShadow:"10px 10px #080135"}}>More ...</button>
              </div>
        </div>
        <div className="contactus my-[10%]" style={{writingMode:"vertical-lr",color:'white',fontSize:"35px",backgroundColor:"gold",position:'fixed',right:'2%' ,height:'30vh',paddingTop:'40px',cursor:'pointer'}}>Contact us</div>
    </main >
    </body>
    </>
  );
}

export default App;
