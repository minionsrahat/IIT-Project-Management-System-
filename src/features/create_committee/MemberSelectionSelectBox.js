import React, { useState } from 'react';
import SelectBox from '../../components/Input/SelectBox';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { openModal } from '../common/modalSlice';


const MemberSelectionSelectBox = ({room_id,fetchCommitteeMembers}) => {
   console.log("Room ID",room_id)
    const [teachersOptions, setTeachersOptions] = useState([]);
    const [teacher,setTeacher]=useState(1)
    const [role,setRole]=useState(2)
    const dispatch = useDispatch()
    const updateSelectBoxTeacherValue = ({ value}) => {
        setTeacher(value)
    }
    const updateSelectBoxRoleValue = ({ value}) => {
        setRole(value)
    }
 
    const roleOptions = [
        { name: "Chairman", value: 1 },
        { name: "Member", value: 2 }
    ]

    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:5000/api/getTeachers');
            const { teachers} = response.data
            const options = teachers.map((teacher) => ({
              name: teacher.name,
              value: teacher.tcr_id,
            }));
            setTeachersOptions(options);
          } catch (error) {
            console.error('Error fetching teachers:', error);
          }
        };
    
        fetchTeachers();
      }, []);

      const handleFormSubmit = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/add_committee_members', {
            tcr_id:teacher,
            room_id,
            role,
          });
          const { error,message } = response.data
          if(!error){
            fetchCommitteeMembers()
            dispatch(openModal({title : "Success", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW,error:false,errormsg:message}))
          }
        } catch (error) {
          console.error('Error adding committee member:', error);
          // Handle error response here
        }
      };

    return (
       <>
       <div className=' mt-5 flex justify-center'>
                    <div className='mr-3'>
                    <SelectBox
                        options={teachersOptions}
                        labelTitle="Teachers"
                        placeholder="Select Teacher"
                        containerStyle="w-72"
                        labelStyle="hidden"
                        defaultValue={teachersOptions} 
                        updateFormValue={updateSelectBoxTeacherValue}   
                    />
                    </div>
                    <div>
                    <SelectBox
                        options={roleOptions}
                        labelTitle="Member Role"
                        placeholder="Select Role"
                        containerStyle="w-72"
                        labelStyle="hidden"
                        defaultValue={role}
                        updateFormValue={updateSelectBoxRoleValue}
                    />
                    </div>  
                    <button className='ml-2 btn btn-primary' onClick={()=>handleFormSubmit()}>Add</button>  
                </div>
       </>
    );
};

export default MemberSelectionSelectBox;