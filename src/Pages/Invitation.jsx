import React, { useState, useEffect, useCallback } from "react";
import axios from "../axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

function Invitation() {
  const [invitations, setInvitations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const user = useSelector((state) => state.user.user);

  const fetchInvitations = useCallback(async () => {
    try {
      const response = await axios.get(`/users/visitor-requests/${user._id}`);
      setInvitations(response.data);
    } catch (error) {
      console.error("Error fetching invitations:", error);
    }
  }, [user._id]);

  useEffect(() => {
    fetchInvitations();
  }, [fetchInvitations]);

  const handleResponse = async (requestId, status, reason) => {
    setShowModal(false);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      await axios.post(`/users/respond-to-invitation/${requestId}`, {
        status,
        reason,
      });
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
        <div
          className="sm:pt-20 pt-10 px-4 max-w-4xl m-auto"
          style={{ height: "67vh" }}
        >
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
                <InvitationCard
                  key={invitation._id}
                  invitation={invitation}
                  onRespond={handleResponse}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InvitationCard({ invitation, onRespond }) {
  const [reason, setReason] = useState("");

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-[370px]">
      <h2 className="text-lg font-semibold">{invitation.fullName}</h2>
      <p className="text-gray-600 text-sm">{invitation.email}</p>
      <p className="mt-2 text-sm">
        <strong>Purpose:</strong> {invitation.purpose}
      </p>
      <p className="text-sm">
        <strong>Description:</strong> {invitation.description}
      </p>
      <div className="mt-4">
        <textarea
          className="w-full p-2 bg-lightBlue outline-none rounded mb-4"
          rows="2"
          placeholder="Enter your reason (optional)"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onRespond(invitation._id, "accepted", reason)}
            className="bg-green-500 text-white font-bold rounded p-2 text-xs hover:bg-green-600 duration-200 ease-in-out text-center cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={() => onRespond(invitation._id, "declined", reason)}
            className="bg-red-500 text-white font-bold rounded p-2 text-xs hover:bg-red-600 duration-200 ease-in-out text-center cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
