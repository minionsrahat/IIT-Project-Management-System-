import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AssignSupervisor from '../../features/assign_supervisor/AssignSupervisor'

function AssignSupervisorPage(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "Assign Supervisor To Teams"}))
      }, [])


    return(
        <AssignSupervisor></AssignSupervisor>
    )
}

export default AssignSupervisorPage