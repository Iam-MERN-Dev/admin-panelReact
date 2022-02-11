import { Link } from "react-router-dom";
import "./product.css"
import Chart from "../../chart/Chart";
import { productData } from "../../../dummyData" 
import { Publish } from "@material-ui/icons";

function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-3rd-gen_hero_10182021_inline.jpg.slideshow-xlarge.jpg" alt="" className="productInfoimg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoiKey">id:</span>
                        <span className="productInfoiValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoiKey">Sales:</span>
                        <span className="productInfoiValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoiKey">active:</span>
                        <span className="productInfoiValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoiKey">in stock:</span>
                        <span className="productInfoiValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">yes</option>
                        <option value="yes">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="yes">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-3rd-gen_hero_10182021_inline.jpg.slideshow-xlarge.jpg" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Product;
