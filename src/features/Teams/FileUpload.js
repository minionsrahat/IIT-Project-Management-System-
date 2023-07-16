import React from 'react';
import InputFileCard from '../../components/Cards/InputFileCard';
import FileInput from './Utilities/FileInput';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TeamTable from './TeamTable';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';

const FileUpload = () => {

    const { room_id } = useParams();
    const fileInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [teams, setTeams] = useState(null);
    const [error, setErrorMsg] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [teamFormationType, setTeamFormationType] = useState(0);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const allowedExtensions = ['csv', 'xlsx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        console.log(fileExtension)
        if (!allowedExtensions.includes(fileExtension)) {
            setErrorState(true)
            setErrorMsg('Invalid file format. Only csv and xlsx files are allowed.');
            fileInputRef.current.value = null;
        }
        else {
            setErrorState(false)
            setSelectedFile(event.target.files[0]);
            setErrorMsg('');
        }
    };

    const handleTeamFormationTypeChange = (event) => {
        setTeamFormationType(parseInt(event.target.value));
      };


    const handleStudentsFileSubmit = async (event) => {
        event.preventDefault();
        let response;
        try {
            if (!errorState && selectedFile) {
                const formData = new FormData();
                formData.append('students_file', selectedFile);
                formData.append('room_id', room_id);
                response = await axios.post('http://127.0.0.1:5000/api/make_team', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                const { error, message, teams } = response.data
                if (!error) {
                    console.log(teams)
                    setTeams(teams)
                }

            }
            else {
                setErrorMsg('Sorry you didnt select any students file');
            }

        } catch (error) {
            console.error(error);
            setSelectedFile(null);
            fileInputRef.current.value = null;
        }
        finally {
            setSelectedFile(null);
            fileInputRef.current.value = null; // Reset the input field
        }
    };
    return (
        <>
            <InputFileCard title="Current Jobs" InputComponent={<FileInput errorMessage={error} handleTeamFormationTypeChange={handleTeamFormationTypeChange}teamFormationType={teamFormationType} handleSubmit={handleStudentsFileSubmit}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange} />}></InputFileCard>
            {
                teams &&
                <CommonTitleCard title={"Teams Information"}>
                    <TeamTable teams={teams}></TeamTable>
                </CommonTitleCard>


            }
        </>

    );
};

export default FileUpload;