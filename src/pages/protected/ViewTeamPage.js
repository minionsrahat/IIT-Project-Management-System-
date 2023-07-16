import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ViewTeam from '../../features/Teams/ViewTeam'

function ViewTeamPage(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "View Teams"}))
      }, [])


    return(
       <ViewTeam></ViewTeam>
    )
}


export default ViewTeamPage