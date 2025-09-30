import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";

const getData = async (url) => {
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const ListTodo = (props) => {
  console.log(props);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const inputTaskRef = useRef();
  console.log("API DATA : ", apiData);

  let api = `https://api-database-1.onrender.com/ToDo`;

  const handleEdit = async (id) => {
    try {
      let updateData = {
        isEdit: true,
      };
      let res = await axios.patch(`${api}/${id}`, updateData);
      console.log(
        "REST API ==> PATCH (Basically Update or Modify 1 record at a time)"
      );
      console.log("RES : ", res);
      setApiData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isEdit: true } : item))
      );
      console.log("API DATA : ", apiData);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  const handleSaveEdit = async (id, inputTaskRef) => {
    try {
      const newTask = inputTaskRef.current.value.trim();
      if (!newTask) return;
      let updateData = {
        isEdit: false,
        todo: newTask, //This will save updated text
      };
      let res = await axios.patch(`${api}/${id}`, updateData);
      console.log(
        "REST API ==> PATCH (Basically Update or Modify 1 record at a time)"
      );
      console.log("RES : ", res);
      setApiData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isEdit: false, todo: newTask } : item
        )
      );
      console.log("API DATA : ", apiData);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  const handleCancelEdit = async (id) => {
    try {
      let updateData = {
        isEdit: false,
      };
      let res = await axios.patch(`${api}/${id}`, updateData);
      console.log(
        "REST API ==> PATCH (Basically Update or Modify 1 record at a time)"
      );
      console.log("RES : ", res);
      setApiData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isEdit: false } : item))
      );
      console.log("API DATA : ", apiData);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${api}/${id}`);
      console.log("REST API ==> DELETE");
      console.log("RES : ", res);
      setApiData((prev) => prev.filter((item) => item.id !== id));
      console.log("API DATA : ", apiData);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  useEffect(() => {
    // setApiData(getData(api));
    const fetchData = async () => {
      try {
        let res1 = await getData(api);
        setApiData(res1);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [props.props]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>404 Error</h1>;

  return (
    <>
      <br></br>
      <br></br>
      {/* <h1>ListTodo</h1> */}
      <div className="taskItems">
        {apiData?.map((el) => (
          <div className="todoListTask" key={el.id}>
            {el.isEdit ? (
              <>
                <input
                  type="text"
                  defaultValue={el.todo ?? ""}
                  ref={inputTaskRef}
                />
                <button
                  className="btn_save"
                  onClick={() => handleSaveEdit(el.id, inputTaskRef)}
                  disabled={inputTaskRef === ""}
                >
                  Save
                </button>
                <button
                  className="btn_cancel"
                  onClick={() => handleCancelEdit(el.id)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <input type="checkbox" />
                <h1>{el.todo}</h1>
                <button
                  className="btn_edit"
                  onClick={() => handleEdit(el.id, el.todo)}
                >
                  Edit
                </button>
                <button className="btn_del" onClick={() => handleDelete(el.id)}>
                  Delete
                </button>
              </>
            )}
            {/* <button className="btn_edit" onClick={() => handleEdit(el.id)}>
                Edit
            </button>
          <button className="btn_del" onClick={() => handleDelete(el.id)}>
            Delete
          </button> */}
          </div>
        ))}
      </div>
    </>
  );
};
