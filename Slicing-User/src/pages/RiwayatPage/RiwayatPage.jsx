import { theadRiwayat } from "../../Utils/dataObj";
import { Button } from "../../components/UIReu/Buton/Button";
import React from 'react';
import { Rowtable } from "../../components/UIReu/Table/Rowtable";
import './Riwayat.css'

export const RiwayatPage = () => {
  return (
    <section className="container-fluid ">
      <div className="m-3">
        <RiwayatTable />
      </div>
    </section>
  );
};


const exampleData = [
  {
    id: 1,
    tanggal: '2024-05-30',
    makanan: 'Nasi Goreng',
    totalKal: '500',
  },
  {
    id: 2,
    tanggal: '2024-05-29',
    makanan: 'Mie Ayam',
    totalKal: '600',
  },
  {
    id: 3,
    tanggal: '2024-05-28',
    makanan: 'Sate Ayam',
    totalKal: '700',
  },
];

export const RiwayatTable = ({ forPage }) => {

  return (
    <div className="card rounded-4 border">
    <div className="card-body bg-light rounded-4 p-4 border-0">
      <div className="d-flex flex-row justify-content-between">
      <h3 className="card-title fs-2 fw-semibold mb-2">Riwayat Pemilihan Makanan</h3>
      {forPage === 'homepage'
      && (<Button className="fw-semibold text-decoration-none">Lihat Semua</Button>
      )}
      </div>
      <TableRiwayatPage
        thead={theadRiwayat}>
        <Rowtable
          ifEmpty={"Tidak ada data Riwayat Pemilihan!"}          
          data={exampleData}
          totalRow={4}
          totalCol={10}
          renderItem={(data, index) => {
            return (
              <tr
                // onClick={() => onNavigate(data)}
                // className="text-nowrap cursor-pointer"
                // key={index}
              >
                <td>{data?.id}</td>
                <td>{data?.tanggal}</td>
                <td>{data?.makanan}</td>
                <td>{data?.totalKal}</td>
              </tr>
            );
          }}
        />
      </TableRiwayatPage>
    </div>
    </div>

  );
};



const TableRiwayatPage = ({ maxHeight, thead, bgThead, children }) => {
  return(
    <div
    className="table-responsive table-wrapper"
    style={{
      height: "fit-content",
      minHeight: '13rem',
      maxHeight: `calc(100vh - ${maxHeight})`,
    }}
  >
    <table className="table table-borderless table-striped align-middle">
      <thead className="sticky-top z-0 ">
        <tr>
          {thead?.map((item, index) => (
            <th
              key={index}
              className={`fw-semibold text-nowrap ${bgThead} ${item === "Status" && "text-center"
                }`}
              scope="col"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
  )
}