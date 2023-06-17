import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message:String, type:String) => {
    if(type === 'error'){
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }else if(type === 'success'){
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };