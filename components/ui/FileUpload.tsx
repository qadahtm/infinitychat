import { useState, useRef  } from 'react';
import QRCode from 'qrcode.react';
import Image from 'next/image';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {BsFillGearFill} from 'react-icons/bs';
import {notify} from '../../utils/helpers';
import {run} from '../../scripts/ingest-data';
import {storage }from "../../utils/Firebase";
import {
    ref,
    listAll,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { getDocument } from 'pdfjs-dist';
import lablabQR from '../../assets/LAblabmeBot.png';

const telegramBotUrl = 'https://t.me/lablabme_bot';


function FileUploadComponent() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedLogo, setSelectedLogo] = useState(null)
    const [name, setName] = useState("");
    const [generated, setGenerated] = useState(false);
    const fileInputRef:any = useRef(null);
    const logoInputRef:any = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [persent, setPercent] = useState(0);
    const [data, setData] = useState();

    function fileToBinary(file: File): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          
          reader.onloadend = () => {
            if (reader.readyState === FileReader.DONE) {
              resolve(reader.result as Buffer);
            }
          };
      
          reader.onerror = () => {
            reject(new Error('Failed to read file'));
          };
      
          reader.readAsArrayBuffer(file);
        });
    }

    const handleFileChange = async (event:any) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            console.log("file: ", file);
            // const binaryData = await fileToBinary(file);
            // console.log(binaryData);
            // setData(binaryData);
            // upload file to firebase
            // const storageRef = ref(storage, `/docs/${file.name}`);

            // const uploadTask = uploadBytesResumable(storageRef, file);
            // uploadTask.on(
            //     "state_changed",
            //     (snapshot) => {
            //         const percent = Math.round(
            //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //         );
            //         // update progress
            //         setPercent(percent);
            //     },
            //     (err) => console.log(err),
            //     () => {
            //         // download url
            //         getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
            //             // console.log(url);
            //             // const response = await fetch(url, {
            //             //     method: 'GET',
            //             //     mode: 'no-cors',
            //             // });
            //             // const arrayBuffer = await response.arrayBuffer();
            //             // console.log(arrayBuffer);
            //             // const pdf = await getDocument(arrayBuffer).promise;
            //             // console.log('Number of pages:', pdf.numPages);

            //             // setPath(arrayBuffer);
            //             const binaryData = await getBinaryDataFromURL(url);
            //             const blobURL = createBlobURL(binaryData);
            //             console.log('Blob URL:', blobURL);

            //         });
            //     }
            // );

            // sotre the path in a state
        } else {
            setSelectedFile(null);
            notify("Please select a valid PDF file.", 'error');
        }
    };

    const handleUploadFileClick = () => {
        fileInputRef.current.click();
    };

    const handleUploadLogoClick = () => {
        logoInputRef.current.click();
    };

    const handleLogoChange = (event:any) => {
        const file = event.target.files[0];
        const fileType = file.type;
        const validExtensions = ['image/jpeg', 'image/png', 'image/jpg'];

        if (validExtensions.includes(fileType)) {
            setSelectedLogo(file);
        } else {
            notify("Please select a valid JPG, PNG or JPEG file.", 'error');
            setSelectedLogo(null);
        }
    };

    const handleSubmit = async(event:any) => {
        event.preventDefault();
        setIsLoading(true);
        if (selectedFile && name!== '' && selectedLogo) {
            try{
                console.log("file: ", selectedFile);
                // run the run function give it the path
                // const binaryData = await fileToBinary(selectedFile);
                // await run(binaryData);
                // await run();
                setGenerated(true);
                notify('Bot Created', 'success');
            }catch(error){
                notify(JSON.stringify(error), 'error');
            }
            setName("");
            setSelectedFile(null);
            setSelectedLogo(null);
            setIsLoading(false);
        }
        else{
            notify('Please fill all the Data!', 'error');
            setIsLoading(false)
        }
    };

    const handleLogoName = (event: any) => {
        setName(event.target.value);
    }

    const handleRestTrain = () => {
        setGenerated(false)
        setName("");
        setSelectedFile(null);
        setSelectedLogo(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center h-screen">
                { !generated ?
                    <div className="bg-white p-8 rounded-lg shadow w-[500px]">
                        <div className="flex items-center gap-3 justify-center mb-4 text-black">
                            <span>Bot Name: </span>
                            <input className="p-2 border border-gray-300 rounded" type="text" placeholder='Bot Name' value={name}  accept=".png, .jpg" onChange={handleLogoName} />
                        </div>
                        <div className='flex justify-center gap-3 s:flex-wrap'>
                            <div className="flex justify-center my-1">
                                <input ref={logoInputRef} type="file" accept=".png, .jpg, .jpeg" className="hidden" onChange={handleLogoChange} />
                                <button type="button"  onClick={handleUploadLogoClick} className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
                                    <span>Upload Logo</span>
                                    <span className="inset-0">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="flex justify-center my-1">
                                <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                                <button type="button" onClick={handleUploadFileClick} className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
                                    <span>Upload Data</span>
                                    <span className="inset-0">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center gap-3 s:flex-wrap'>
                            <div className="flex justify-center my-1">
                                {selectedLogo && (
                                    <div className="mt-4">
                                        <Image src={URL.createObjectURL(selectedLogo)} alt="Selected Image" width={200} height={200} className="w-[200px] h-[200px] max-h-64 max-w-full" />
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center my-1">
                                {selectedFile && (
                                    <div className="mt-4">
                                        <embed src={URL.createObjectURL(selectedFile)} type="application/pdf" width={200} height={200} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex justify-center my-3 py-3'>
                            <button type="submit" className="flex gap-2 items-center bg-purple-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
                                <BsFillGearFill /> 
                                {!isLoading ? 
                                    <div>Train Your ChatBot</div>
                                :
                                    <div>Loading...</div>
                                }
                            </button>
                        </div>
                    </div>
                    :
                    null
                }

                {
                generated ?
                    <div className='flex'>
                        <div className="bg-white p-8 rounded-lg shadow w-[500px]">
                            <button type='button' className='bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow' onClick={handleRestTrain}>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineArrowLeft />
                                    <span>Go Back</span>
                                </div>
                            </button>
                            <div className='flex justify-center my-3 py-3'>
                                <div className=''>
                                    <div className='flex justify-center my-3'>
                                        {/* <QRCode value={telegramBotUrl}/> */}
                                        <Image src={lablabQR} alt="qrCode" width={200}/>
                                    </div>
                                    <div className='flex justify-center my-3'>
                                        <span className='text-sm text-gray-400'>Scan Your QR code with your Phone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :null
                }
            </div>
        </form>
    );
}

export default FileUploadComponent;
