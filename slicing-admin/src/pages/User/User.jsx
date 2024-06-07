import { thead } from "../../Utils/dataObj";
import { Rowtable } from "../../components/UIReu/Table/Rowtable";
import { UserTable } from "./UserTable";

// import './user.css'


const exampleData = [
    {
        id: 1,
        nama: 'Farah Nisa',
        email: 'Farahzet@gmail.com',
    },
    {
        id: 2,
        nama: 'Farah Nisa',
        email: 'Farahzet@gmail.com',
    },
    {
        id: 3,
        nama: 'Farah Nisa',
        email: 'Farahzet@gmail.com',
    },
];
  
export const User= () => {
    return (
        <UserTable
        thead={thead}
        pageFor={'user'}
        className={'border'}
        maxHeight={'45rem'}
        >
        <Rowtable
            ifEmpty={"Tidak ada data Riwayat Pemilihan!"}          
            data={exampleData}
            totalRow={3}
            totalCol={8}
            renderItem={(data, index) => {
                return (
                <tr
                    // onClick={() => onNavigate(data)}
                    // className="text-nowrap cursor-pointer"
                    // key={index}
                >
                    <td>{data?.id}</td>
                    <td>{data?.nama}</td>
                    <td>{data?.email}</td>
                </tr>
                );
            }}
            />

        </UserTable>
    )
}