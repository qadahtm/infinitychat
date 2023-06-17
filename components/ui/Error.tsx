import React from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai';

type NextRouter = /*unresolved*/ any

interface ErrorComponentProps {
    rt: NextRouter,
    message: string;
}



const ErrorComponent: React.FC<ErrorComponentProps> = ({ rt, message }) => {
    const handleGoHome = () => {
        rt.push("/")
    }
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline mx-1">{message}</span>
            <div className='flex justify-center my-3 py-3'>
                <button type='button' className='bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow' onClick={handleGoHome}>
                    <div className='flex items-center gap-2'>
                        <AiOutlineArrowLeft />
                        <span>Go Back</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ErrorComponent;
