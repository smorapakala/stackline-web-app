import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SalesTable } from '../../components/table/Table';

const mockStore = configureStore([]);
const mockData = {
  product: {
    productData: {
      sales: [
        { weekEnding: '2025-01-01', retailSales: 1000, wholesaleSales: 800, unitsSold: 50, retailerMargin: 200 },
        { weekEnding: '2025-01-08', retailSales: 1500, wholesaleSales: 1000, unitsSold: 75, retailerMargin: 500 },
        { weekEnding: '2025-01-15', retailSales: 1200, wholesaleSales: 900, unitsSold: 60, retailerMargin: 300 },
        { weekEnding: '2025-01-22', retailSales: 1400, wholesaleSales: 1100, unitsSold: 65, retailerMargin: 300 },
        { weekEnding: '2025-01-29', retailSales: 2000, wholesaleSales: 1600, unitsSold: 100, retailerMargin: 400 },
        { weekEnding: '2025-02-05', retailSales: 1800, wholesaleSales: 1400, unitsSold: 90, retailerMargin: 400 },
      ],
    },
  },
};

describe('SalesTable Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(mockData);
  });

  it('renders the table with correct headers', () => {
    render(
      <Provider store={store}>
        <SalesTable />
      </Provider>
    );

    expect(screen.getByText(/WEEK ENDING/i)).toBeInTheDocument();
    expect(screen.getByText(/RETAIL SALES/i)).toBeInTheDocument();
    expect(screen.getByText(/WHOLESALE SALES/i)).toBeInTheDocument();
    expect(screen.getByText(/UNITS SOLD/i)).toBeInTheDocument();
    expect(screen.getByText(/RETAILER MARGIN/i)).toBeInTheDocument();
  });

  it('renders the correct number of rows based on pagination', () => {
    render(
      <Provider store={store}>
        <SalesTable />
      </Provider>
    );

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(6);
  });

  it('handles pagination correctly', () => {
    render(
      <Provider store={store}>
        <SalesTable />
      </Provider>
    );

    expect(screen.getByText('2025-01-01')).toBeInTheDocument();
    expect(screen.getByText('2025-01-29')).toBeInTheDocument();

    const nextPageButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextPageButton);

    expect(screen.getByText('2025-02-05')).toBeInTheDocument();
    expect(screen.queryByText('2025-01-01')).not.toBeInTheDocument();
  });
});