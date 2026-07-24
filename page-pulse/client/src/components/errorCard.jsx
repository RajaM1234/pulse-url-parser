const ErrorCard = ({ message }) => {
    return (
        <div className="error-card">
            <h3>❌ Error</h3>
            <p>{message}</p>
        </div>
    );
};

export default ErrorCard;