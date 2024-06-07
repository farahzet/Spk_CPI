import { Button } from "../../components/UIReu/Buton/Button";
import { Transparent } from "../../components/UIReu/Buton/Transparent";
import { CustomModal } from "../../components/UIReu/Modal/Modal";
import { Rowtable } from "../../components/UIReu/Table/Rowtable";
import { useState } from 'react'
import plus from "../../assets/images/plus.png"
import { theadAllKriteria } from "../../Utils/dataObj";
import { KriteriaContainer } from "./KriteriaContainer";
import Input from "../../components/UIReu/Form/Input";



const exampleData = [
    {
        id: 1,
        code: 'F001',
        name: 'Karbohidrat',
        bobot: 45,
        tren: 15,
    },
    {
        id: 2,
        code: 'F002',
        name: 'Protein',
        bobot: 45,
        tren: 15,
    },
    {
        id: 3,
        code: 'F003',
        name: 'Lemak',
        bobot: 45,
        tren: 15,
    },
];


export const KriteriaPage = () => {

    const [editedData, setEditedData] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [offset, setOffset] = useState(null);
    const [form, setForm] = useState({
        code: '',
        name: '',
        bobot: '',
        tren: '',
        });

        const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        };

        const handlePostMedicine = (data) => {
        // Implement the logic for posting new data
        console.log('Posted Data: ', data);
        };

        const handleModal = (data, offset) => {
        setEditedData(data);
        setOffset(offset);
        setEditModal(true);
        };

    return (
        <>
        <KriteriaContainer
        //   handleInput={handleInput}
        //   inputValue={form.searchMedicine}
            className={'border'}
            thead={theadAllKriteria}
            setAddModal={setAddModal}>
            <Rowtable
            data={exampleData}
            ifEmpty={"Tidak ada data kriteria!"}
            totalRow={5}
            totalCol={10}
            renderItem={(data, index, offset) => {
                return (
                <tr
                    onClick={() => handleModal(data, offset)}
                    data-bs-toggle="modal" data-bs-target="#medicineModal"
                    className="text-nowrap cursor-pointer"
                    key={index}
                >
                    <td>{data?.id}</td>
                    <td>{data?.code}</td>
                    <td>{data?.name}</td>
                    <td>{data?.bobot}</td>
                    <td>{data?.tren}</td>
                </tr>
                );
            }}
            />
        </KriteriaContainer>
        {editModal &&
            <KriteriaModal
            title={'Informasi Produk'}
            data={editedData}
            offset={offset}
            handleInput={handleInput}
            form={form}
            setForm={setForm}
            // handleDelete={handleDelete}
            // handleAction={handleEditMedicine}
            setEditModal={setEditModal} />
        }
        {addModal &&
            <KriteriaModal
            offset={offset}
            title={'Tambah Produk'}
            handleInput={handleInput}
            form={form}
            setForm={setForm}
            data={exampleData}
            forModal={'post'}
            handleAction={handlePostMedicine}
            setEditModal={setAddModal} />
        }
        </>
    );
};

const KriteriaModal = ({
    title,
    data,
    setEditModal,
    forModal,
    handleAction,
    handleDelete,
    offset
}) => {

    const [loading, setLoading] = useState(true);
    return (
    <>
        <Transparent
            disabled={true}
            style={{ zIndex: 55 }}
        >
            <CustomModal
            title={'Hapus Kriteria?'}
            content={'Apabila anda menghapus Produk, data keseluruhan produk akan hilang'}
            // confirmAction={handleDeleteAction}
            // cancelAction={() => setDeleteConfirm(false)}
            />
        </Transparent>

        <div
        className="modal-backdrop"
        style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            zIndex: '50'
        }}>
        </div>
        <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: "block", zIndex: '51' }}
        >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0">
            <div className="modal-header">
                <h1 className="modal-title fs-2">
                {title}
                </h1>
                <button
                type="button"
                className="btn-close"
                onClick={() => setEditModal(false)}
                />
            </div>
            <div className="modal-body px-5">
                {/* {forModal === 'post'
                ? <PostImage 
                    handleImageChange={handleImageChange}
                    imageUploadRef={imageUploadRef}
                    handlePlaceholderClick={handlePlaceholderClick}
                    imagePreview={imagePreview}
                    errors={errors} />
                : <EditImage
                    setClickImg={setClickImg}
                    clickImg={clickImg}
                    imagePreview={imagePreview}
                    setForm={setForm}
                    data={data}
                    handleImageChange={handleImageChange}
                    setImagePreview={setImagePreview}
                    errors={errors}
                    />
                
                } */}
                <form>
                <div className="mb-3 row">
                    <label htmlFor="code" className="col-sm-3 col-form-label ">
                    Kode Kriteria
                    </label>
                    <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="code"
                        name="code"
                        // value={form.code}
                        // onChange={handleInput}
                    />
                    {/* <ErrorMsg msg={errors.code} /> */}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">
                    Nama Kriteria
                    </label>
                    <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        // value={form.name}
                        // onChange={handleInput}
                    />
                    {/* <ErrorMsg msg={errors.name} /> */}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="bobot" className="col-sm-3 col-form-label ">
                    Bobot Kriteria
                    </label>
                    <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="bobot"
                        name="bobot"
                        // value={form.}
                        // onChange={handleInput}
                    />
                    {/* <ErrorMsg msg={errors.merk} /> */}
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <label htmlFor="tren" className="fw-bold">
                        Tren
                    </label>
                    <div className="d-flex gap-2 ">
                    <Input
                        type="radio"
                        name="tren"
                        value="positif"
                        // checked={form.gender === "male"}
                        // onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="male">Positif</label>
                    </div>
                    <div className="d-flex gap-2 ">
                    <Input
                        type="radio"
                        name="tren"
                        value="negatif"
                        // checked={form.gender === "female"}
                        // onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="female">Negatif</label>
                    </div>
                </div>

                </form>
            </div>

            <div className="modal-footer">
                <div className="d-flex flex-row gap-3 justify-content-start w-100 align-items-center">
                <Button
                    // disabled={!isFormChanged || loading}
                    // onClick={handleSubmit}
                    style={{ width: '7.125rem' }}
                    className={'btn-primary text-white fw-semibold'}
                >
                {loading
                    ? 'Simpan'
                    : 'Simpan'
                }
                </Button>
                <Button
                    // disabled={forModal === 'post' || loading}
                    type="button"
                    onClick={() => setDeleteConfirm(true)}
                    className="btn-outline-primary fw-semibold border-2 text-nowrap"
                >
                    Hapus
                </Button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}


