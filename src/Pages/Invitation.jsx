import React, { useState, useEffect } from "react";
import axios from "../axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function Invitation() {
  const [invitations, setInvitations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchInvitations();
  }, []);

  useEffect(() => {
    return () => {
      setShowModal(false);
      setShowSuccessModal(false);
      setErrorMessage("");
      setSuccessMessage("");
    };
  }, []);

  const fetchInvitations = async () => {
    try {
      const response = await axios.get("/users/visitor-requests");
      setInvitations(response.data);
    } catch (error) {
      console.error("Error fetching invitations:", error);
    }
  };

  const handleResponse = async (requestId, status) => {
    setShowModal(false);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      await axios.post(`/users/respond-to-invitation/${requestId}`, { status });
      setSuccessMessage("Response submitted successfully!");
      setShowSuccessModal(true);
      console.log("Response submitted");
      fetchInvitations();
      setTimeout(() => {
        setShowSuccessModal(false);
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error responding to invitation:", error);
      setErrorMessage("Error submitting response. Please try again.");
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="Invitation">
      <Navigation />
      <div className="pt-20">
        <div className="sm:pt-20 pt-10 px-4 max-w-4xl m-auto" style={{height:"67vh"}}>
          <h1 className="text-orange font-bold text-xl md:text-3xl mb-6 text-center">
            Pending Invitations
          </h1>
          {showModal && (
            <div className="m-auto max-w-md">
              <div className="flex items-center gap-3 p-3 bg-red-100 mt-4 rounded">
                <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                <p className="text-xs">{errorMessage}</p>
              </div>
            </div>
          )}
          {showSuccessModal && (
            <div className="m-auto max-w-md">
              <div className="flex items-center gap-3 p-3 bg-green-100 mt-4 rounded">
                <i className="fa-solid fa-circle-check text-green-500"></i>
                <p className="text-xs">{successMessage}</p>
              </div>
            </div>
          )}
          <div className="overflow-y-auto max-h-[400px] p-3 flex flex-wrap  gap-2 items-center justify-center w-full">
            {invitations.length === 0 ? (
              <p className="text-center">No pending invitations.</p>
            ) : (
              invitations.map((invitation) => (
                <div
                  key={invitation._id}
                  className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-[370px]"
                >
                  <h2 className="text-xl font-semibold">
                    {invitation.fullName}
                  </h2>
                  <p className="text-gray-600">{invitation.email}</p>
                  <p className="mt-2">
                    <strong>Purpose:</strong> {invitation.purpose}
                  </p>
                  <p>
                    <strong>Description:</strong> {invitation.description}
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <button
                      onClick={() => handleResponse(invitation._id, "accepted")}
                      className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out text-center cursor-pointer"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleResponse(invitation._id, "declined")}
                      className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out text-center cursor-pointer"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Invitation;
