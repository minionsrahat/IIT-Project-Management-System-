import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { openModal } from '../common/modalSlice';
import { useDispatch } from 'react-redux';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';

const RoomTableAdmin = ({ rooms,fetchRoomsData }) => {

    const dispatch = useDispatch()
    const getNameFromValue = (dict, value) => {
        const dictOption = dict.find(option => option.value === value);
        return dictOption ? dictOption.name : null;
    }
    const courseTypeOptions = [
        { name: "SPL-1", value: 1 },
        { name: "SPL-2", value: 2 },
        { name: "Final Year Project", value: 3 },
    ]
    const batchOptions = [
        { name: "BSSE-1ST", value: 1 },
        { name: "BSSE-2ND", value: 2 },
        { name: "BSSE-3RD", value: 3 },
        { name: "BSSE-4TH", value: 4 },
        { name: "BSSE-5TH", value: 5 },
        { name: "BSSE-6TH", value: 6 },
    ]
    const navigate = useNavigate();

    const handleNavigationToAddCommitteeMembers = (room_id) => {
        navigate(`${room_id}`);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const roomPerPage = 5;

    // Logic to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Logic to calculate the current jobs to display
    const indexOfLastRoom = currentPage * roomPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomPerPage;
    const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
    // Calculate total number of pages
    const totalPages = Math.ceil(rooms.length / roomPerPage);
    // Generate an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);


    const deleteRoom = async (room_id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/api/deleteRoom/${room_id}`);
            // Perform any additional actions after successful deletion
            const { error, message, rowsAffected } = response.data; // Return the response data
            if (!error) {
                fetchRoomsData()
                dispatch(openModal({ title: "Success", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW, error: false, errormsg: message }))
            }
        } catch (error) {
            console.error('Error deleting room:', error);

        }
    };

    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* Table headers */}
                    <thead>
                        <tr>
                            <th>Batch</th>
                            <th>Course</th>
                            <th>Create Committee</th>
                            {
                                deleteRoom &&
                                <th>Action</th>
                            }

                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {currentRooms.map((row) => {
                            return (
                                <tr key={row.room_id}>
                                    <td>{getNameFromValue(batchOptions, row.batch)}</td>
                                    <td>{getNameFromValue(courseTypeOptions, row.course_type)}</td>
                                    <td>

                                        <button onClick={() => handleNavigationToAddCommitteeMembers(row.room_id)} className="btn mr-1" >
                                            {row.table_created === 0 ? "Create" : "Edit"}</button>
                                    </td>
                                    {
                                        deleteRoom &&
                                        <td>
                                            <button onClick={() => deleteRoom(row.room_id)} className="btn mr-1" >Delete</button>
                                        </td>
                                    }

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="text-center mt-5">
                <div className="btn-group">
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`btn ${pageNumber === currentPage ? 'btn-active' : ''}`}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>


        </>
    );
};

export default RoomTableAdmin;