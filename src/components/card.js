export default function card(props){
    let styleactualmain = {
        backgroundColor: "#080135",
        margin: "45px 10px",
        padding: "20px",
         display: 'flex',
        width: "100vw",
    
      }
      let stylemain = {
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        height: "310vh",
        //  border:"4px solid #000000",
        backgroundColor: "white",
        border: "4px solid black",
        borderRadius: "45px",
        padding: "20px",
        margin: "0 15%"
    
      }
      let styleproductapp = {
        // height: "100%",
        width: "50%",
        // flex: 0.5,
        // margin: "10px",
        borderRadius: "30px",
        // boxShadow: "7px 7px rgb(149, 149, 215)"
      }
      let styleoneproduct = {
        marginTop: "10px",
        marginBottom: "60px",
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
        padding: "15px",
      }
      let styleproductimg = {
        width: "100%",
        height: "100%",
        borderRadius: "10px"
      }
    
      let platformname = {
        fontSize: "30px",
        margin: "0px",
        fontWeight: "bolder",
        fontStyle: "italic",
        border: "3px solid black",
        padding: "5px 10px",
        borderRadius: "30px"
      }
      let discount = {
        display: "inline",
        color: "red",
      }
      let styledescription = {
        textDecoration: "none",
        color: "black",
        fontSize: "25px",
      }
      let styleproductprice = {
        margin: "0px 15px"
      }
      let styleproductrating = {
        margin: " 0px 15px",
      }
    return(
        <>
         <div className="platformname" style={platformname}>Amazon</div>
            <div className="box" style={styleoneproduct}>
              <div className="box1" style={styleproductapp} ><img src="https://m.media-amazon.com/images/I/815UZPn8WUL._SX679_.jpg" alt="" style={styleproductimg} /></div>
              <div className="box2" style={styleproductdetail}>
                <div className="description" style={{ margin: "3px 10px" }}>
                  <a href="https://www.amazon.in/ZEBRONICS-ZEB-V19HD-LED-Supporting-Mountable/dp/B09GG4FT99/ref=sr_1_1?crid=5LY5FM65Q2BC&keywords=%28ZEBRONICS+ZEB-V19HD+LED+Monitor+18.5inch+with+Supporting+HDMI%2C+VGA+Input%2C+HD+1366+x+768%2C+16.7M+Colors%2C+Glossy+Panel%2C+Slim+Design+%26+Wall+Mountable%2C+Black%29&qid=1695313711&sprefix=zebronics+zeb-v19hd+led+monitor+18.5inch+with+supporting+hdmi%2C+vga+input%2C+hd+1366+x+768%2C+16.7m+colors%2C+glossy+panel%2C+slim+design+%26+wall+mountable%2C+black+%2Caps%2C192&sr=8-1" style={styledescription}>
                    <h3>{props.description} </h3></a></div>
                <div className="price" style={styleproductprice}><span style={discount}>-62%</span><h3>₹{props.price}</h3>MRP : <span style={{ textDecoration: 'line-through' }}>₹7,999</span></div>
                <div className="rating_availability" style={styleproductrating}><h3>Rating :<span style={{ fontSize: "26px" }}> 4.6</span></h3></div></div></div>  
                </>
    );
}