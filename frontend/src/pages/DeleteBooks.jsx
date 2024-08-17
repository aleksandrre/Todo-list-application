import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteAllBooks = () => {
    setLoading(true);
    axios
      .delete(`https://todo-list-application-dym4.onrender.com/books`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("All books deleted successfully", {
          variant: "success",
        });

        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error deleting all books", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete All Books</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete all books?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteAllBooks}
        >
          Yes, Delete All
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
