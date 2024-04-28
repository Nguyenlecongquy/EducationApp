import api from "../ConfigApi";

const getVideoCourseList = async () => {
  try {
    const response = await api.get("video-courses?populate=*");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { getVideoCourseList };
