import React from 'react'
import Layout from '@/components/layout';
import FileUploadComponent from '@/components/ui/FileUpload';


const infinityChatBot = () => {
  return (
    <Layout>
        <div className="text-white mx-auto flex flex-col space-y-4 h-[100vh]"> 
          <FileUploadComponent />
        </div>
    </Layout>
  )
}

export default infinityChatBot