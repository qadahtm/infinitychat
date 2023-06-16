import React, { ReactNode } from 'react';

interface ModalProps {
    closeModal: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-sm mx-auto">
        <div className="relative bg-white shadow-lg rounded-lg">
          <div className="px-4 py-4">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;



// import React from 'react';

// interface ModalProps {
//   closeModal: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="fixed inset-0 bg-black opacity-50"></div>
//       <div className="relative mx-auto my-6 max-w-sm">
//         <div className="relative bg-white shadow-lg rounded-lg text-gray-900">
//           <div className="px-4 py-4">
//             {/* Content of the modal */}
//             <h1 className="text-2xl font-bold">Modal Title</h1>
//             <p>Modal content goes here...</p>
//           </div>
//           <div className="px-4 py-2 bg-gray-100 text-right">
//             <button onClick={closeModal} className="text-blue-500 hover:text-blue-700">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


// import React from 'react'
// interface ModalProps {
//   closeModal: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ closeModal }) => {
//   return (
//     <div className="fixed z-10 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
//       <div className="relative mx-auto my-6 max-w-sm">
//         <div className="relative bg-white shadow-lg rounded-lg text-gray-900">
//           <div className="px-4 py-4">
//             {/* Content of the modal */}
//             <h1 className="text-2xl font-bold">Modal Title</h1>
//             <p>Modal content goes here...</p>
//           </div>
//           <div className="px-4 py-2 bg-gray-100 text-right">
//             <button onClick={closeModal} className="text-blue-500 hover:text-blue-700">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
