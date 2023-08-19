import { useEffect, useState } from 'react'
import { Spin, Button } from 'antd'
import './App.css'
import { logicGet, logicSet } from './interface/request';
import { usergetAddress } from './interface/deploy';
import MnemonicModal from './components/Modal';
import HomeStyle from './components/home';
import { validateMnemonic } from 'js-moi-sdk'

function App() {
  const [isChecked, setIsChecked] = useState(true);
  const [ready, setReady] = useState(false)
  const [mnemonic, setMnemonic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [click, setClick] = useState(false);

  
  const handleMnemonicChange = async (event) => {
    if (mnemonic) {
      try {
        const address = await usergetAddress();
        console.log('mnemonic', mnemonic);
        console.log('address', address, typeof address);
        window.location.href ="https://moi-nocode-hack-ay12ygran-nagipragalathan.vercel.app/home/"+address
      } catch (error) {
        setError('Error getting user address');
        console.error(error);
      }
    }
  };
  handleMnemonicChange()

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (mnemonic) => {
    if(validateMnemonic(mnemonic))
      {
        setMnemonic(mnemonic)
        setIsModalOpen(false);
        setError("")
        setClick(true)
      }
    else{
      setError("Incorrect mnemonic")
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false)
    setError("")
  };

  const handleCheckboxChange = async() => {
    setClick(false)
    const returnVal = await logicSet(!isChecked)
    if(returnVal !== null){
      setIsChecked(!isChecked);
      document.body.style.background = !isChecked ? "#0288D1": "#090D23"
      setClick(true)
    } else {
      console.log("Interaction failed")
      alert("Interaction failed! Try again")
      setClick(false)
    }
  };

  const handleLogout = () => {
    setMnemonic("")
    setError("")
  }

  useEffect(() => {
    const getValue = async () => {
      const value = await logicGet()
      setIsChecked(value)
      setReady(true)
      document.body.style.background = value ? "#0288D1": "#090D23"
    };
  
    getValue();
  },[])

  return (
      (!ready ? (
      <div className='loader'>
        <Spin size="large" />
      </div> 
      ):(
      <div className=''>
        <div className="modal">
          <Button onClick={!mnemonic ? showModal : handleLogout}>{!mnemonic ? "Login" : "Logout"}</Button>
          <MnemonicModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} error={error}/>
        </div>
          <HomeStyle/>
      </div>
      )
  ));
}

export default App
