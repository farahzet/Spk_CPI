import { Button } from '../../components/UIReu/Buton/Button'
import Input from '../../components/UIReu/Form/Input'
import './Perhitungan.css'

export const Perhitungan = () => {
    return (

        <section className="container-fluid ">
            <div className="my-3 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-center gap-3  ">
                <div className="d-grid list-input pt-1">
                    <form className="d-grid gap-2">
                        <div className="col-12">
                            <label htmlFor="nama" className="fw-bold">
                            Nama Lengkap
                            </label>
                            <Input
                            className="form-control input-styles p-3 col-12 col-lg"
                            placeholder="Masukkan Nama"
                            type="text"
                            name="nama"
                            // value={form.fullname}
                            // onChange={(e) => handleInput(e)}
                            />
                        </div>
                
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="beratBadan" className="fw-bold">
                                Berat Badan
                                </label>
                                <Input
                                type="number"
                                className="form-control p-3 col-12 col-lg input-styles "
                                // onChange={(e) => handleInput(e)}
                                placeholder="Berat Badan"
                                name="beratBadan"
                                // value={form.beratBadan}
                                />
                            </div>

                            
                            <div className="col">
                                <label htmlFor="tinggiBadan" className="fw-bold">
                                Tinggi Badan
                                </label>
                                <Input
                                type="number"
                                className="form-control p-3 col-12 col-lg input-styles "
                                // onChange={(e) => handleInput(e)}
                                placeholder="Tinggi Badan"
                                name="tinggiBadan"
                                // value={form.price}
                                />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="inputCity" className="fw-bold">
                            Umur
                            </label>
                            <Input
                                type="number"
                                className="form-control p-3 col-12 col-lg input-styles "
                                // onChange={(e) => handleInput(e)}
                                placeholder="Umur"
                                name="umur"
                                // value={form.price}
                                />
                        </div>

        
                        <div className="my-3">
                            <label htmlFor="alamat" className="fw-bold">
                                Jenis Kelamin
                            </label>
                            <div className="d-flex gap-2 ">
                            <Input
                                type="radio"
                                name="gender"
                                value="male"
                                // checked={form.gender === "male"}
                                // onChange={(e) => handleInput(e)}
                            />
                            <label htmlFor="male">Pria</label>
                            </div>
                            <div className="d-flex gap-2 ">
                            <Input
                                type="radio"
                                name="gender"
                                value="female"
                                // checked={form.gender === "female"}
                                // onChange={(e) => handleInput(e)}
                            />
                            <label htmlFor="female">Wanita</label>
                            </div>
                        </div>

                        <div className = "my-3">
                            <label htmlFor="inputAddress" className="fw-bold">
                                Kegiatan Fisik Harian
                            </label>
                            <div className="d-flex gap-2 ">
                            <Input
                                type="radio"
                                name="pekerjaan"
                                value="Istirahat "
                                // checked={form.pekerjaan === "Istirahat "}
                                // onChange={(e) => handleInput(e)}
                            />
                            <label htmlFor="Istirahat ">Istirahat</label>
                            </div>

                            <div className="d-flex gap-2 ">
                            <Input
                                type="radio"
                                name="pekerjaan"
                                value="Pegawai Kantor, Guru, IRT"
                                // checked={form.pekerjaan === "Pegawai Kantor, Guru, IRT"}
                                // onChange={(e) => handleInput(e)}
                            />
                            <label htmlFor="Pegawai Kantor, Guru, IRT">Pegawai Kantor, Guru, IRT</label>
                            </div>

                                <div className="d-flex gap-2 ">
                                <Input
                                    type="radio"
                                    name="pekerjaan"
                                    value="Pegawai industri, Mahasiswa ,Militer"
                                    // checked={form.pekerjaan === "Pegawai industri, Mahasiswa ,Militer"}
                                    // onChange={(e) => handleInput(e)}
                                />
                                <label htmlFor="maPegawai industri, Mahasiswa ,Militer">Pegawai industri, Mahasiswa ,Militer</label>
                                </div>

                                <div className="d-flex gap-2 ">
                                <Input
                                    type="radio"
                                    name="pekerjaan"
                                    value="Petani Buruh"
                                    // checked={form.pekerjaan === "Petani Buruh"}
                                    // onChange={(e) => handleInput(e)}
                                />
                                <label htmlFor="female">Petani Buruh</label>
                                </div>
                        </div>
                    </form>
                    <div className= "d-flex justify-content-center align-items-center gap-5 my-3">
                        <Button
                            className="bg-primary border-3 text-white"
                            type="submit"
                        >
                            Lanjut
                        </Button>
                    </div>
                </div>
            </div>
        </section>

    )
}