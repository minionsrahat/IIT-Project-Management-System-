import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AssignSupervisor from '../../features/assign_supervisor/AssignSupervisor'
import { useEffect } from 'react'
import FileUpload from '../../features/Teams/FileUpload'

function UploadExcelFilePage(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "Create Teams by Uploading Students File"}))
      }, [])
    return(
       <FileUpload></FileUpload>
    )
}

export default UploadExcelFilePage