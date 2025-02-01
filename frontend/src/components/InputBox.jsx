export function InputBox({ label, placeholder, onChange, type = "text" }) {
    return (
        <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-300 mb-1.5 mt-1">
                {label}
            </label>
            <input 
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 text-white border border-zinc-600 
                          focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                          transition-colors placeholder-gray-400" 
                type={type}
                placeholder={placeholder}
                onChange={onChange} 
            />
        </div>
    )
}