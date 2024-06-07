import { theadAllFood } from "../../Utils/dataObj";
import { Button } from "../../components/UIReu/Buton/Button";
import { Transparent } from "../../components/UIReu/Buton/Transparent";
import { CustomModal } from "../../components/UIReu/Modal/Modal";
import { Rowtable } from "../../components/UIReu/Table/Rowtable";
import { FoodTableContainer } from "./FoodTableContainer";
import { useState } from 'react'
import plus from "../../assets/images/plus.png"


const exampleData = [
    {
        id: 1,
        code: 'F001',
        name: 'Nasi Goreng',
        carbo: 45,
        protein: 15,
        lemak: 10,
        desc: "-",
    },
    {
        id: 2,
        code: 'F002',
        name: 'Ayam Bakar',
        carbo: 0,
        protein: 35,
        lemak: 20,
        desc: "-",
    },
    {
        id: 3,
        code: 'F003',
        name: 'Gado-Gado',
        carbo: 30,
        protein: 10,
        lemak: 15,
        desc: "-",
    },
    {
        id: 4,
        code: 'F004',
        name: 'Sate Kambing',
        carbo: 5,
        protein: 25,
        lemak: 30,
        desc: "-",
    },
    {
        id: 5,
        code: 'F005',
        name: 'Soto Ayam',
        carbo: 20,
        protein: 18,
        lemak: 12,
        desc: "-",
    }
];


export const FoodPage = () => {

    const [editedData, setEditedData] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [offset, setOffset] = useState(null);
    const [form, setForm] = useState({
        code: '',
        name: '',
        carbo: '',
        protein: '',
        lemak: '',
        desc: '',
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
        <FoodTableContainer
        //   handleInput={handleInput}
        //   inputValue={form.searchMedicine}
          thead={theadAllFood}
          setAddModal={setAddModal}>
          <Rowtable
            data={exampleData}
            ifEmpty={"Tidak ada data makanan!"}
            totalRow={7}
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
                    <td>{data?.carbo}</td>
                    <td>{data?.protein}</td>
                    <td>{data?.lemak}</td>
                    <td>{data?.desc}</td>
                </tr>
              );
            }}
          />
        </FoodTableContainer>
        {editModal &&
          <FoodModal
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
          <FoodModal
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

const FoodModal = ({
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
            title={'Hapus Produk?'}
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
                    Kode
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
                    Nama Makanan
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
                    <label htmlFor="carbo" className="col-sm-3 col-form-label ">
                    Karbohidrat
                    </label>
                    <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="carbo"
                        name="carbo"
                        // value={form.}
                        // onChange={handleInput}
                    />
                    {/* <ErrorMsg msg={errors.merk} /> */}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label
                    htmlFor="Protein"
                    className="col-sm-3 col-form-label"
                    >
                    Protein
                    </label>
                    <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="protein"
                        name="protein"
                        // value={form.category}
                        // onChange={handleInput}
                    />
                    {/* <ErrorMsg msg={errors.category} /> */}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="lemak" className="col-sm-3 col-form-label ">
                    Lemak
                    </label>
                    <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="lemak"
                        name="lemak"
                        // value={form.type}
                        // onChange={handleInput}
                    />
                    {/* <ErrorMsg msg={errors.type} /> */}
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
                    Hapus Produk
                </Button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}
