import React from 'react'
import Layout from '@/components/layout';
import FileUploadComponent from '@/components/ui/FileUpload';
import useAuth from '../hooks/useAuthentication';
import ErrorComponent from '../components/ui/Error';

const infinityChatBot = () => {
  const { user, loading, router } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
        <div className="mx-auto flex flex-col h-screen items-center"> 
          {user ? 
            <FileUploadComponent />
          : <ErrorComponent rt={router} message="Please create you're account to access this page"/>
          }
        </div>
    </Layout>
  )
}

export default infinityChatBot