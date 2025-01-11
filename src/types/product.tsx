export type Review = {
    customer: string;
    review: string;
    score: number;
  };

  export type SalesData = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  };
export type Product = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[]; // Array of reviews for the product
    retailer: string;
    details: String[]; // List of product details
    tags: string[]; // List of tags
    sales: SalesData[]; // Array of sales data for the product
  };

