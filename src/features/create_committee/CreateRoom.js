import React, { useState } from 'react';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { openModal } from '../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { useEffect } from 'react';
import RoomTable from '../Teams/RoomTable';
import RoomSelectionSelectBox from '../Teams/Utilities/RoomSelectionSelectBox';

const CreateRoom = ({fetchRoomsData}) => {
  
    const dispatch = useDispatch()

    const handleFormSubmit=async (course,batch)=>{
        let response;
        try {
          
              response = await axios.post('http://127.0.0.1:5000/api/create_room', {
                batch_no:batch,
                 course_type:course
              }, {
                  headers: {
                    'Content-Type': 'application/json'
                  }
              });
              const { error,message, roomId } = response.data
              if(!error){
                fetchRoomsData()
                dispatch(openModal({title : "Success", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW,error:false,errormsg:message}))
              }
        } catch (error) {
            console.error(error);
         
        }
    }
    return (
        <>
            <CommonTitleCard title="Create Room">
              <RoomSelectionSelectBox handleFormSubmit={handleFormSubmit}></RoomSelectionSelectBox>
            </CommonTitleCard>
        </>
    );
};

export default CreateRoom;