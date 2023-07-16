import React, { useState } from 'react';
import SelectBox from '../../components/Input/SelectBox';
import axios from 'axios';
import { openModal } from '../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { useDispatch } from 'react-redux';

const AddTeacherInput = ({fetchTeachersData}) => {
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [designation, setDesignation] = useState('Lecturer');
    const [status, setStatus] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()
    const designationOptions = [
        { name: 'Professor', value: 'Professor' },
        { name: 'Associate Professor', value: 'Associate Professor' },
        { name: 'Assistant Professor', value: 'Assistant Professor' },
        { name: 'Lecturer', value: 'Lecturer' },
    ];

    const statusOptions = [
        { name: 'Active', value: 1 },
        { name: 'Inactive', value: 0 },
    ];

    const updateSelectBoxStatus = ({ value }) => {
        setStatus(value);
    };

    const updateSelectBoxDesignation = ({ value }) => {
        setDesignation(value);
    };

    const handleAddTeacher = async () => {
        setErrorMessage('');

        if (teacherEmail.trim() === '') {
            setErrorMessage('Teacher Email is required!');
            return;
        }

        if (teacherName.trim() === '') {
            setErrorMessage('Teacher Name is required!');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/addTeacher', {
                teacherEmail,
                teacherName,
                designation,
                status,
            });
            const { error, message } = response.data; // Return the response data
            if (!error) {
                fetchTeachersData()
                dispatch(openModal({ title: "Success", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW, error: false, errormsg: message }))
            }
            setTeacherEmail('');
            setTeacherName('');
            setDesignation('Lecturer');
            setStatus(1);
        } catch (error) {

            setErrorMessage('Failed to add teacher. Please try again.');
        }
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-4 justify-center">
                <div className="flex justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Teacher Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input
                                type="text"
                                className="input input-bordered"
                                value={teacherEmail}
                                onChange={(e) => setTeacherEmail(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Teacher Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input
                                type="text"
                                className="input input-bordered"
                                value={teacherName}
                                onChange={(e) => setTeacherName(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Teacher Designation</span>
                        </label>
                        <SelectBox
                            options={designationOptions}
                            labelTitle="Designation"
                            placeholder="Select Designation"
                            containerStyle="w-72"
                            labelStyle="hidden"
                            defaultValue="Lecturer"
                            updateFormValue={updateSelectBoxDesignation}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <SelectBox
                            options={statusOptions}
                            labelTitle="Status"
                            placeholder="Select Status"
                            containerStyle="w-72"
                            labelStyle="hidden"
                            defaultValue="Active"
                            updateFormValue={updateSelectBoxStatus}
                        />
                    </div>
                </div>
            </div>
            {errorMessage && <div className="text-red-500 mt-2 text-center">{errorMessage}</div>}
            <div className="text-center mt-5">
                <button className="btn btn-primary" onClick={handleAddTeacher}>
                    Add Teacher
                </button>
            </div>
        </>
    );
};

export default AddTeacherInput;
