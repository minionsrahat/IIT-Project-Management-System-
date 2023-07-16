import React, { useState } from 'react';
import SelectBox from '../../../components/Input/SelectBox';

const RoomSelectionSelectBox = ({handleFormSubmit}) => {
    const [course,setCourse]=useState(1)
    const [batch,setBatch]=useState(1)
    const updateSelectBoxCourseValue = ({ value}) => {
        setCourse(value)
    }
    const updateSelectBoxBatchValue = ({ value}) => {
        setBatch(value)
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
    return (
       <>
       <div className=' mt-5 flex justify-center'>
                    <div className='mr-3'>
                    <SelectBox
                        options={batchOptions}
                        labelTitle="Batch"
                        placeholder="Select Batch"
                        containerStyle="w-72"
                        labelStyle="hidden"
                        defaultValue="BSSE 1ST"  
                        updateFormValue={updateSelectBoxBatchValue}   
                    />
                    </div>
                    <div>
                    <SelectBox
                        options={courseTypeOptions}
                        labelTitle="Course Title"
                        placeholder="Select Course"
                        containerStyle="w-72"
                        labelStyle="hidden"
                        defaultValue="SPL-1"
                        updateFormValue={updateSelectBoxCourseValue}
                    />
                    </div>  
                    <button className='ml-2 btn btn-primary' onClick={()=>handleFormSubmit(course,batch)}>Submit</button>  
                </div>
       </>
    );
};

export default RoomSelectionSelectBox;