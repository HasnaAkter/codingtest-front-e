import Slider from './components/Slider';
import {ComingSoon} from './components/ComingSoon';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Slider />
      <ComingSoon />
      <ToastContainer/>
    </>
  );
}

export default App;
