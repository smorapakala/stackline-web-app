import React, { useMemo } from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts";
import Card from '@mui/material/Card';

import './Chart.css';
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store.tsx";

const Chart: React.FC = () => {

    const sales = useSelector((state: AppState) => state.product.productData?.sales);
    const id = useSelector((state: AppState) => state.product.productData?.id);

    const groupedData = useMemo(() => {
        const groupedByMonth = sales?.reduce((acc, sale) => {
            const date = new Date(sale.weekEnding);
            const monthNumber = date.getMonth();

            if (!acc[monthNumber]) {
                acc[monthNumber] = { retailSales: 0, wholesaleSales: 0 };
            }
            acc[monthNumber].retailSales += sale.retailSales;
            acc[monthNumber].wholesaleSales += sale.wholesaleSales;
            return acc;
        }, {});

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return groupedByMonth
            ? Object.entries(groupedByMonth)?.map(([month, data]) => ({
                month: monthNames[month].toUpperCase(),
                retailSales: data.retailSales,
                wholesaleSales: data.wholesaleSales,
            }))
            : [];
    }, [sales, id]);

    return (
        <div className="chart-container">
            <Card>
                <LineChart
                    xAxis={[{
                        scaleType: 'point', id: "Monthly sales", data: groupedData.map(group => group.month), stroke: "#ced2d9"
                    }]}
                    series={[
                        {
                            curve: "linear",
                            data: groupedData.map(group => group.retailSales),
                            label: "Retail Sales ($)",
                            showMark: false,
                            color: "#999790"
                        },
                        {
                            curve: "linear",
                            data: groupedData.map(group => group.wholesaleSales),
                            label: "Wholesale Sales ($)",
                            showMark: false
                        },

                    ]}
                    height={400}
                    margin={{ left: 20, right: 20, top: 20, bottom: 50 }}
                    slotProps={{ legend: { hidden: true } }}
                    sx={{
                        [`& .${lineElementClasses.root}`]: {
                            strokeWidth: 3,
                        }
                    }}
                    yAxis={[{
                        disableTicks: true,
                        disableLine: true, // Hide Y-axis
                        valueFormatter: () => ""
                    }]}
                />
            </Card>

        </div>
    );
};

export default Chart;
