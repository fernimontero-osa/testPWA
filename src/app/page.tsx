"use client";
import {useEffect, useState} from 'react';
import Sidebar from "./UI/Sidebar/Sidebar";
import Card from "./UI/Card/Card";
import Pwamodal from "./UI/Pwamodal";

export default function Home() {

  const [showInstallModal, setShowInstallModal] = useState<Boolean>(false);
  const [prompt, setPrompt] = useState<any>(null);


  useEffect(()=>{

    const handleBeforeInstallPrompt = (event: any) => {
      
      event.preventDefault();
      setPrompt(event);

      if(!window.matchMedia("(display-mode: standalone)").matches){
        setShowInstallModal(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    }
  }, []);


  const handleCloseModal = () => {
    setShowInstallModal(false);
  };

  const handleInstallClick = () =>{
    
    if(prompt){
      prompt.prompt();
      prompt.userChoice.then((choiceResult: any) =>{
        if(choiceResult.outcome === "acceppted"){
          console.log("Accettato");
        }else{
          console.log("Cancellata");
        }

        setPrompt(null);
        setShowInstallModal(false);
      })
    }
  }
  return (
   <div>
      <div className="flex flex-row p-10 h-[100vh]">
        <Sidebar/>
          <section className="flex-1 shadow-xl bg-white h-full overflow-scroll no-scrollbar">
            <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-4 gap-4 justify-center content-center p-4 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
          </section>
      </div>
      <Pwamodal show={showInstallModal} onClose={handleCloseModal} onInstall={handleInstallClick}/>
   </div>
  );
}
