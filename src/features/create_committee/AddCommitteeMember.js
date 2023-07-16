import React from 'react';
import MemberSelectionSelectBox from './MemberSelectionSelectBox';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommitteMembersTable from './CommitteeMemberTable';

const AddCommitteeMember = () => {

    const [committeeMembers, setCommitteeMembers] = useState(null);
    const { room_id } = useParams();
   

    const fetchCommitteeMembers = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/committee_members/${room_id}`);
            const { committeeMembers } = response.data;
            setCommitteeMembers(committeeMembers);
        } catch (error) {
            console.error('Error fetching committee members:', error);
        }
    };

    useEffect(() => {
    
        fetchCommitteeMembers();
    }, []);

    return (
        <>
            <CommonTitleCard title={"Add Committe Memebers"}>
                <MemberSelectionSelectBox  fetchCommitteeMembers={fetchCommitteeMembers} room_id={room_id}></MemberSelectionSelectBox>
            </CommonTitleCard>
            {
                committeeMembers &&
                <CommonTitleCard title={"Committee Members"}>
                <CommitteMembersTable fetchCommitteeMembers={fetchCommitteeMembers} committeMembers={committeeMembers}></CommitteMembersTable>
                </CommonTitleCard>

            }

        </>
    );
};

export default AddCommitteeMember;