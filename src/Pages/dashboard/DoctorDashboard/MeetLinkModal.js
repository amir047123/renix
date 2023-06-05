import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { server_url } from "../../../Config/API";

const MeetLinkModal = ({ closeModal, isOpen, id, refresh, setRefresh }) => {
  const [meetLink, setMeetLink] = useState("");
  const handelAccept = async () => {
    const BASE_URL = `${server_url}/appointment/appointmentStatus/${id}`;
    if (meetLink) {
      await UpdateHooks(
        BASE_URL,
        { appointmentStatus: "confirmed", meetLink: meetLink },
        true,
        "Appointment Confirmed"
      );
    } else {
      alert("please provide a meet link");
    }
    setRefresh(!refresh);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full backdrop-blur py-20">
                <Dialog.Panel className="w-full max-w-md mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Icon
                    onClick={closeModal}
                    className="text-3xl -mt-4 -mr-4 text-[#FF0000]/60 hover:text-[#FF0000]/70 cursor-pointer ml-auto"
                    icon="gridicons:cross-circle"
                  />
                  {/* modal body */}
                  <form onSubmit={handelAccept}>
                    <label className="block">
                      <span className=" block text-sm font-medium">
                        Please Provide a Meet Link
                      </span>
                      <input
                        type="text"
                        name="meetLink"
                        onChange={(e) => setMeetLink(e.target.value)}
                        required
                        className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                        placeholder="Please Provide a Meet Link"
                      />
                    </label>
                    {/* action btn */}
                    <div className="mt-7 flex w-full justify-end gap-5">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-primary/70 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white outline-none"
                        onClick={async () => {
                          await handelAccept();
                          if (meetLink) {
                            closeModal();
                          }
                        }}
                      >
                        Confirm Appointment !
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MeetLinkModal;
