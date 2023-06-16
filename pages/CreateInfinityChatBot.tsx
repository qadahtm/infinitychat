import React from 'react'
import Layout from '@/components/layout';
import FileUploadComponent from '@/components/ui/FileUpload';


const infinityChatBot = () => {
  return (
    <Layout>
        <div className="mx-auto flex flex-col"> 
          <FileUploadComponent />
        </div>
    </Layout>
  )
}

export default infinityChatBot