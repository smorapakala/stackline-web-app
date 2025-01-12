import React, { useEffect } from "react";
import Chart from "../chart/Chart.tsx";
import { SalesTable } from "../table/Table.tsx";
import { mockApiResponse } from "../../resources/mock-data.tsx";
import { useAppDispatch } from "../../redux/hooks/hooks.ts";
import { setProduct } from "../../redux/actions/productActions.tsx";

import './ProductPage.css';
import ProductSection from "../productSection/ProductSection.tsx";

const ProductPage: React.FC = () => {

    const dispatch = useAppDispatch();

    window.fetch = async (url) => {
        if (url === 'https://api.example.com/products') {
            const mockResponse = new Response(
                JSON.stringify(mockApiResponse),
                {
                    status: 200,
                    statusText: 'OK',
                }
            );
            return mockResponse;
        }
        throw new Error('API not found');
    };

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch('https://api.example.com/products');
            const productData = await response.json();
            dispatch(setProduct(productData[0]));
        };
        fetchProductDetails();
    }, []); //The dependency array is empty as we are stubbing. Ideally it should be the product ID.

    return (
        <div className="body-container">
            <ProductSection />
            <div className="right-pane">
                <Chart />
                <SalesTable />
            </div>
        </div>

    );
};

export default ProductPage;
