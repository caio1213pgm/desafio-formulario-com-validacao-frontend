/* eslint-disable react/prop-types */
function ErrorMessage(props){
    return(
        <p className="text-red-500  font-medium text-start w-full md:text-center">{props.children}</p>
    )
}
export default ErrorMessage;