import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import VideoCourseListApi from "../api/videoCourseList/VideoCourseListApi";

const VideoCourseList = () => {
  const [videoCourseList, setVideoCourseList] = useState([]);

  const fetchVideoCourseList = async () => {
    const result = await VideoCourseListApi.getVideoCourseList();
    if (result) {
      const list = result.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        image: item.attributes.image.data.attributes.url,
        videoTopic: item.attributes.VideoTopic,
      }));
      setVideoCourseList(list);
    }
  };

  useEffect(() => {
    fetchVideoCourseList();
  }, []);

  return (
    <View className='mt-3.5'>
      <Text className='text-xl font-bold mb-0.5'>Video Courses</Text>
      <FlatList 
        data={videoCourseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image source={{uri: item.image}} className='w-44 h-24 mr-2.5 rounded' />
          </View>
        )}
      />
    </View>
  );
};

export default VideoCourseList;
