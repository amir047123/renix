import React, { useEffect, useState } from 'react';

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupShown = localStorage.getItem('popupShown');
    if (!hasPopupShown) {
      setShowPopup(true);
      localStorage.setItem('popupShown', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full md:w-1/2 lg:w-1/3 transition-opacity duration-500 opacity-100">
            <h2 className="text-xl font-semibold mb-4">Hot Setup</h2>
            <p>Welcome to our website! We are currently setting up and improving our services. Please bear with us during this time.</p>
            <div className="flex justify-end mt-4">
              <button className="bg-primary text-white py-2 px-4 mr-2" onClick={handleClosePopup}>
                Agree
              </button>
              <button className="text-primary py-2 px-4" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${showPopup ? 'opacity-50' : 'opacity-0'}`}
        onClick={handleClosePopup}
      ></div>
    </>
  );
};

export default PopupMessage;
