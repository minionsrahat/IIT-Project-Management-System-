import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';

const TeachersTable = ({ teachers,fetchTeachersData }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const ItemsPerPage = 10;
    const dispatch = useDispatch()
    // Logic to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const deleteTeacher = async (tcr_id) => {
        try {
          const response = await axios.delete(`http://127.0.0.1:5000/api/deleteTeacher/${tcr_id}`);
          const { error, message } = response.data; // Return the response data
          if(!error){
            fetchTeachersData()
            dispatch(openModal({ title: "Success", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW, error: false, errormsg: message }))
          }
          // Handle successful deletion
          console.log('Teacher deleted successfully');
        } catch (error) {
          // Handle error
          console.error('Error deleting teacher:', error);
        }
      };
      
    // Logic to calculate the current Items to display
    const indexOfLastItem = currentPage * ItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
    const currentItems = teachers.slice(indexOfFirstItem, indexOfLastItem);
    // Calculate total number of pages
    const totalPages = Math.ceil(teachers.length / ItemsPerPage);
    // Generate an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);


    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* Table headers */}
                    <thead>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Teacher Name</th>
                            <th className="px-4 py-2">Teacher Email</th>
                            <th className="px-4 py-2">Designation</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {currentItems.map((teacher, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">{teacher.name}</td>
                                    <td className="border px-4 py-2">{teacher.email}</td>
                                    <td className="border px-4 py-2">{teacher.designation}</td>
                                    <td className="border px-4 py-2">
                                        {teacher.active == 1 ? 'Active' : 'Inactive'}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button className="btn btn-red" onClick={()=>deleteTeacher(teacher.tcr_id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="text-center">
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

export default TeachersTable;
