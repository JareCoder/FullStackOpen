const ErrorPopup = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="errorPopup">
        {message}
      </div>
    )
  }

  export default ErrorPopup