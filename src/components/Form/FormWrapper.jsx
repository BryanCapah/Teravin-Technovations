
export default function FormWrapper({ children }) {
    const height = document.documentElement.clientHeight
    const screenHeight = height - 300
    return <div style={{ minHeight: screenHeight, maxHeight: screenHeight }} className='w-full md:flex mt-10 overflow-y-scroll'>
        <div className='w-full'>
            {children}
        </div>
    </div>
}