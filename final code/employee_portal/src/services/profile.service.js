import Axios from "axios";

import config from "../util/config.json";
import { getCurrentUser } from "./auth.service";

const UpdateProfile = data => {
  const user = getCurrentUser();
  const token = user.access_token;
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("data", JSON.stringify(data.profileData));

  return Axios.put(`${config.SERVER_URI}/employee/${user.user.id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  });
};

const ViewProfile = () => {
  const user = getCurrentUser();
  const token = user.access_token;

  return Axios.get(`${config.SERVER_URI}/employee/${user.user.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/form-data"
    }
  });
};

export { UpdateProfile, ViewProfile };
