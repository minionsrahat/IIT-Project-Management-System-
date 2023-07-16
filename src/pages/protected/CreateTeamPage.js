import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CreateTeam from '../../features/Teams/CreateTeam'

function CreateTeamPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Create Project Teams"}))
      }, [])


    return(
        <CreateTeam></CreateTeam>
    )
}

export default CreateTeamPage