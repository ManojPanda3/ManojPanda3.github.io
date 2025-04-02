import { useState } from "preact/hooks"

const Vm = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  return (
    <>
      <span className="vm_icon" onClick={() => setIsPopup(true)}>Vm</span>
      {isPopup && <VmPopup />}
    </>
  )
}

const VmPopup = () => {
  return (
    <>
      <div className="popup_bg"></div>
      <div style="width:100vw;height:100vh;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;">
        <div className="popup_vm">
          <div style="display:flex;align-items:right; justify-content: flex-end; align-items: center; cursor:pointer;">
            <p>close</p>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;height:90%;margin:0px 1rem;">
            <p style="cursor:pointer;" >oldInstance</p>
            <p style="cursor:pointer;" >loadNew</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vm
