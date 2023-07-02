import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import Moment from 'moment';

const URL = 'https://649e8167245f077f3e9c759b.mockapi.io/staffManagement';

const Dashboard = () => {

    const [staffs, setStaffs] = useState([]);

    const getListStaff = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setStaffs(res.data);
        }
    }

    useEffect(() => {
        getListStaff();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a staff with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListStaff();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div className="staff-table">
            <div className="btn-add">
                <Link to={'/add/'}>
                    <button className='add-staff-btn'>ADD NEW STAFF</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {staffs && staffs.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td><img src={staff.avatar} alt={staff.id}/></td>
                            <td>{staff.name}</td>
                            <td>{staff.age}</td>
                            <td>{staff.address}</td>
                            <td>{Moment(new Date(staff.createdAt).toString()).format("YYYY-MM-DD")}</td>
                            <td>
                                <Link to={`/update/${staff.id}`}><button style={{backgroundColor:'orange'}}>Edit</button></Link>
                                <button style={{backgroundColor:'red'}} onClick={() => handleDelete(staff.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;