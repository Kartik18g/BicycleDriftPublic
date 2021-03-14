import React, { useState } from "react";
import { connect } from "react-redux";
import ProductDesktop from "../../productPage/ProductDesktop";
import ProductHeading from "../../productPage/ProductHeading";
import ProductMobile from "../../productPage/ProductMobile";

const UpdateAccessory = (product) => {
  const { images } = product.product.product;

  const [productImage1, setproductImage1] = useState(images[0]);
  const [productImage2, setproductImage2] = useState(images[1]);
  const [productImage3, setproductImage3] = useState(images[2]);
  const [productImage4, setproductImage4] = useState(images[3]);
  const [Rating, setRating] = useState("5");
  console.log(productImage1);

  return (
    <div className="fluid-container p-4 m-2">
      <h2 className="text-center">Update Product</h2>
      <form
        onSubmit={() => {
          console.log("This sucks so hard");
        }}
      >
        <div className="row product-container">
          <div className=" product-image col-lg-7">
            <ProductHeading Rating={Rating} />
            <ProductDesktop
              productImage1={productImage1}
              productImage2={productImage2}
              productImage3={productImage3}
              productImage4={productImage4}
              img1={setproductImage1}
              img4={setproductImage4}
              img3={setproductImage3}
              img2={setproductImage2}
            />
            <ProductMobile
              img1={setproductImage1}
              img4={setproductImage4}
              img3={setproductImage3}
              img2={setproductImage2}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(UpdateAccessory);
