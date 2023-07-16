import React from 'react';
import ErrorText from '../../../components/Typography/ErrorText';

const FileInput = ({ handleSubmit, fileInputRef, handleFileChange, errorMessage,teamFormationType,handleTeamFormationTypeChange }) => {
   
   
    return (
        <>
            <>
                <h2 className='text-center text-2xl'>Upload Students File</h2>
                <form onSubmit={handleSubmit} className='py-6'>
                    <div className='container items-center justify-center flex'>
                       
                        <input
                            type='file'
                            className='file-input file-input-bordered w-full max-w-xs'
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                        <div className='flex items-center ml-3'>
                            <label htmlFor='cgpa' className='mr-2'>
                                <input
                                    type='radio'
                                    id='cgpa'
                                    name='uploadType'
                                    value='0'
                                    checked={teamFormationType === 0}
                                    onChange={handleTeamFormationTypeChange}
                                />
                                CGPA
                            </label>
                            <label htmlFor='random'>
                                <input
                                    type='radio'
                                    id='random'
                                    name='uploadType'
                                    value='1'
                                    checked={teamFormationType === 1}
                                    onChange={handleTeamFormationTypeChange}
                                />
                                Random
                            </label>
                        </div>
                        <button type='submit' className='btn ml-3'>
                            Create Team
                        </button>
                    </div>
                    <ErrorText styleClass='mt-8'>{errorMessage}</ErrorText>
                </form>
            </>
        </>
    );
};

export default FileInput;