import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions, Text } from "react-native";
import SliderApi from "../api/slider/SliderApi";
import { cn } from "../lib/utils";

const widthScreen = Dimensions.get("screen").width;
const paddingHome = widthScreen * 0.04;
const widthSlider = widthScreen - paddingHome * 2;

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
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            className={cn(
              "rounded-xl  mt-3",
              index !== slider.length - 1 && "mr-3"
            )}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: widthSlider, height: widthSlider * 0.5 }}
              className="rounded-xl"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
