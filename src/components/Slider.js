import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import SliderApi from "../api/slider/SliderApi";

const widthScreen = Dimensions.get("screen").width;

const Slider = () => {
  const [slider, setSlider] = useState([]);

  const fetchSlider = async () => {
    const result = await SliderApi.getSlider();
    if (result) {
      const list = result.data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        image: item.attributes.image.data.attributes.url,
      }));
      console.log("list", list);
      setSlider(list);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, []);

  return (
    <View>
      <FlatList
        data={slider}
        horizontal={true}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: widthScreen - 40, height: widthScreen * 0.45 }}
              className="rounded-xl mr-[20px] mt-3"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
