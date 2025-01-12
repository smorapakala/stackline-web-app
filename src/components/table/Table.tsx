import React,{ useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Card, TablePagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store/store.tsx';

import './Table.css';

export const SalesTable: React.FC = () => {

  const rows = useSelector((state: AppState) => state.product.productData?.sales);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedRows = rows?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className='table-container'>
      <TableContainer component={Card}>
        <Table sx={{ minWidth: 650,  tableLayout: 'fixed'  }} aria-label="sales-table" className="sales-table">
          <TableHead>
            <TableRow>
              <TableCell>WEEK ENDING</TableCell>
              <TableCell>RETAIL SALES</TableCell>
              <TableCell>WHOLESALE SALES</TableCell>
              <TableCell>UNITS SOLD</TableCell>
              <TableCell>RETAILER MARGIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows?.map((row) => (
              <TableRow
                key={row.weekEnding}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  {row.weekEnding}
                </TableCell>
                <TableCell>{row.retailSales}</TableCell>
                <TableCell>{row.wholesaleSales}</TableCell>
                <TableCell>{row.unitsSold}</TableCell>
                <TableCell>{row.retailerMargin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          

        </Table>
        <TablePagination
                component="div"
                count={rows?.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10]}
              />
      </TableContainer>
    </div>
  );
}