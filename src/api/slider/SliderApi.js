import api from "../ConfigApi";

const getSlider = async () => {
  try {
    const response = await api.get("api/sliders?populate=*");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { getSlider };
