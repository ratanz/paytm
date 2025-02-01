export function ButtonWarning({ label, buttonText, onClick }) {
    return (
        <div className="flex items-center justify-center space-x-2 text-sm">  
            <span className="text-gray-400">
                {label}
            </span>
            <button 
                onClick={onClick} 
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
                {buttonText}
            </button>
        </div>
    )
}