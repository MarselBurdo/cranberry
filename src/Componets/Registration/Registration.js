import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../../redux/actions";
// import { getUserName } from "../../redux/selectors";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function Registration() {
  const [formData, setFormData] = useState(initialState);
  // const user = useSelector(getUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) navigate("/");
  // }, [user]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /**async request */
    dispatch(registration(formData));
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Login
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={onChange}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
}
