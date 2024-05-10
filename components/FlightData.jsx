"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import flightData from "@/utils/flightData.json";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const FlightData = () => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowdata, setRowdata] = useState(flightData.flightOffer);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (rowdata) {
      setRows([rowdata]);
    } else {
      setRows(flightData.flightOffer);
    }
  }, [rowdata]);

  return (
    <>
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        // className="m-auto mt-10 p-5"
      >
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  FLIGHT
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  AIRCRAFT
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  CLASS
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  FARE
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  ROUTE
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  DEPARTURE
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  ARRIVAL
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  DURATION
                </TableCell>
                <TableCell
                  align="center"
                  className="font-bold bg-slate-200 text-gray-600"
                >
                  PRICE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowdata
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      className="border-b-2 border-red-500"
                    >
                      <TableCell align="center">
                        <div>
                          {row.itineraries[0].segments[0].carrierCode}{" "}
                          {row.itineraries[0].segments[0].flightNumber}
                        </div>
                        <div>
                          {row.itineraries[0].segments[1].carrierCode}{" "}
                          {row.itineraries[0].segments[1].flightNumber}
                        </div>
                        {row.itineraries[0].segments[2] && (
                          <div>
                            {row.itineraries[0].segments[2].carrierCode}{" "}
                            {row.itineraries[0].segments[2].flightNumber}
                          </div>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        <div>{row.itineraries[0].segments[0].aircraft}</div>
                        <div>{row.itineraries[0].segments[1].aircraft}</div>
                        {row.itineraries[0].segments[2] && (
                          <div>{row.itineraries[0].segments[1].aircraft}</div>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        <div>{row.class[0][0]}</div>
                        <div> {row.class[0][1]}</div>
                        {row.class[0][2] && <div>{row.class[0][2]}</div>}
                      </TableCell>

                      <TableCell align="center">
                        <div>{row.fareBasis[0][0]}</div>
                        <div>{row.fareBasis[0][1]}</div>
                        {row.fareBasis[0][2] && (
                          <div>{row.fareBasis[0][2]}</div>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        <div>
                          {row.itineraries[0].segments[0].departure.iataCode} -{" "}
                          {row.itineraries[0].segments[0].arrival.iataCode}
                        </div>
                        <div>
                          {row.itineraries[0].segments[1].departure.iataCode} -{" "}
                          {row.itineraries[0].segments[1].arrival.iataCode}
                        </div>
                        {row.itineraries[0].segments[2] && (
                          <div>
                            {row.itineraries[0].segments[2].departure.iataCode}{" "}
                            - {row.itineraries[0].segments[2].arrival.iataCode}
                          </div>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        <div>{row.itineraries[0].segments[0].departure.at}</div>
                        <div>{row.itineraries[0].segments[1].departure.at}</div>
                        {row.itineraries[0].segments[2] && (
                          <div>
                            {row.itineraries[0].segments[2].departure.at}
                          </div>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        <div>{row.itineraries[0].segments[0].arrival.at}</div>
                        <div>{row.itineraries[0].segments[1].arrival.at}</div>
                        {row.itineraries[0].segments[2] && (
                          <div>{row.itineraries[0].segments[2].arrival.at}</div>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        {row.itineraries[0].duration}
                        <div>---</div>
                        {row.itineraries[0].segments[2] && <div>---</div>}
                      </TableCell>

                      <TableCell align="center">
                        <div>{row.price}</div>
                        <button
                          type="button"
                          className="bg-blue-900 text-white text-xs py-1 px-2 rounded-sm"
                        >
                          SELECT
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 30]}
          component="div"
          count={rowdata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default FlightData;
