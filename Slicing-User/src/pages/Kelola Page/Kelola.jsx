import { Button } from "../../components/UIReu/Buton/Button"


export const Kelola = () => {
    return (
        // <section className="container-fluid ">
        //     <div className="my-3 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-center gap-3  ">
        //         <div className="d-grid list-input pt-1">
        //         <h3 className="fw-bold fs-2 mb-0 ">Detail Dokter</h3>
        //         </div>
        //         <div className=" custom-margin-table" >
        //             <table className="table ">
        //             <tbody>
        //                 <tr>
        //                 <th className="header-cell">Nama</th>
        //                 <td>Farah</td>
        //                 </tr>
        //                 <tr>
        //                 <th>Jenis Kelamin</th>
        //                 <td>Perempuan</td>
        //                 </tr>
        //                 <tr>
        //                 <th>Email</th>
        //                 <td>farah@gmail.com</td>
        //                 </tr>
                    
        //                 {/* <tr>
        //                 <th>Alumnus</th>
        //                 <td>{data.alumnus}</td>
        //                 </tr>
        //                 <tr>
        //                 <th>No STR</th>
        //                 <td>{data.no_str}</td>
        //                 </tr> */}

                        
        //             </tbody>
        //             </table>
        //         </div>
        //         </div>
        //     <div className="d-flex justify-content-center align-items-center gap-5 my-3 ">
        //         <Button className= "btn-primary border-2 border-primary text-white fw-semibold px-4">Edit</Button>
        //     </div>
        // </section>

        <section className="container-fluid">
            <div className="my-3 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-center gap-3 ">
                <div className="d-flex flex-row align-items-center gap-3 ">
                    <h3 className="fw-bold fs-2 mb-0 ">Setting</h3>
                </div>
                    <div className="d-flex flex-row flex-wrap gap-3 align-items-start custom-margin-left">
                        <div className=" custom-margin-table" >
                            <table className="table ">
                            <tbody>
                                <tr>
                                <th className="header-cell">Nama</th>
                                <td>farahzet</td>
                                </tr>
                                <tr>
                                <th>Jenis Kelamin</th>
                                <td>perempuan</td>
                                </tr>
                                <tr>
                                <th>Email</th>
                                <td>farah@gmail.com</td>
                                </tr>
                                {/* <th>Biaya</th>
                                <td>{data.price}</td>
                                </tr> */}
                                

                                
                            </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-5 my-3 ">
                <Button className= "btn-primary border-2 border-primary text-white fw-semibold px-4">Edit</Button>
            </div>
        </section>
    )
}