import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../Styles/globalStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

function VisitorForm() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    purpose: "",
    description: "",
    selectedUserId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowModal(false);
    setErrorMessage("");

    try {
      await axios.post("users/send-visitor-form", {
        ...formData,
        userId: formData.selectedUserId,
      });
      alert("Visitor form submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form. Please try again.");
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="VisitorForm">
      <Navigation />
      <div className="VisitorFormContainer md:pt-20 pt-14 ">
        <div className="mt-2">
          <div className="container max-w-screen-sm m-auto pt-20 p-5">
            <form onSubmit={handleSubmit}>
              <h1 className="text-orange mb-5 md:text-2xl font-bold text-xl">
                Send a request to a Staff
              </h1>
              <div className="flex flex-col gap-7">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="p-3 bg-lightBlue outline-none"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 bg-lightBlue outline-none"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="purpose"
                  placeholder="Purpose of visit"
                  className="p-3 bg-lightBlue outline-none"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                />
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="4"
                  placeholder="Purpose description"
                  className="p-3 bg-lightBlue outline-none"
                  required
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
                <p className="text-orange -mt-2 -mb-5">Select Staff</p>
                <select
                  name="selectedUserId"
                  value={formData.selectedUserId}
                  onChange={handleChange}
                  className="p-3 bg-lightBlue outline-none"
                  required
                >
                  <option value="" disabled>
                    Choose a staff
                  </option>
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.name}
                    </option>
                  ))}
                </select>
                {showModal && (
                  <div>
                    <div className="flex items-center gap-3 p-3 bg-red-100 mt-4 rounded">
                      <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                      <p className="text-xs">{errorMessage}</p>
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-orange text-white font-bold rounded p-3 hover:bg-darkOrange duration-200 ease-in-out"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
                <p>
                  Go back to{" "}
                  <Link
                    to="/"
                    className="border-b-2 text-orange hover:text-darkOrange"
                  >
                    Home
                  </Link>{" "}
                  page
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VisitorForm;
