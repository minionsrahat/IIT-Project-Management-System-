import { useDispatch } from "react-redux"
import ErrorText from "./Typography/ErrorText"




function ErrorModal({ error, errormsg }) {
    return (
        <>
            {
                error?
                <ErrorText styleClass="mt-16">{errormsg}</ErrorText>:<p>
                    {errormsg}
                </p>
            }
        </>
    )
}

export default ErrorModal