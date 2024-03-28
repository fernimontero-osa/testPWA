import React from 'react';


const Pwamodal = ({show, onClose, onInstall}: any) => {

  const blurBackground = show ? "background-blu" : "";
  return (
    show &&(
      <div className=" fixed bottom-5 px-5 flex items-center justify-center z-50">
          <div className="bg-white  rounded-xl w-94 p-4 roundend-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2 text-black"> Installa App</h2>
              <p className="text-sm mb-4 text-black">Clicca installa per salvare questa applicazione sul tuo cellulare.</p>
              <div className="flex">
                <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg mr-4'>Chiudi</button>
                <button onClick={onInstall} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ">Installa</button>
              </div>
          </div>
          <div className={`fixed inset-0 bg-gray-900 opacity-80 -z-10 ${blurBackground}`}></div>
        
      </div>
    )
  )
}

export default Pwamodal;