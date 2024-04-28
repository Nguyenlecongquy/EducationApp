import api from "../ConfigApi";

const getCourseList = async (type) => {
  try {
    const response = await api.get(
      `course-lists?filters[type][$eq]=${type}&populate=*`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { getCourseList };
