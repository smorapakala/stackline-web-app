import React from "react";
import './Product.css';
import Tags from "../tag/Tags.tsx";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store.tsx";

const Product: React.FC = () => {

  const image = useSelector((state: AppState) => state.product.productData?.image);
  const title = useSelector((state: AppState) => state.product.productData?.title);
  const subtitle = useSelector((state: AppState) => state.product.productData?.subtitle);
  const tagLabels = useSelector((state: AppState) => state.product.productData?.tags);

  return (
    <div className="item-container">
      <img src={image} alt={title} className="image" />
      <p className="title">{title} </p>
      <p className="subtitle">{subtitle}</p>
      <Tags labels={tagLabels} />
    </div>
  );
};

export default Product;
