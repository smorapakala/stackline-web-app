import React from "react";
import Card from '@mui/material/Card';
import Product from "../product/Product.tsx";

import './ProductSection.css';

const ProductSection: React.FC = () => {
    return (
        <div className="sidebar-container">
            <Card>
                <Product />
            </Card>
        </div>
    );
};

export default ProductSection;
