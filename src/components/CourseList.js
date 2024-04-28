import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import CourseListApi from "../api/courseList/CourseListApi";
import { cn } from "../lib/utils";
import { useNavigation } from "@react-navigation/native";

const CourseList = ({ type }) => {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  const fetchCourseList = async () => {
    const result = await CourseListApi.getCourseList(type);
    if (result) {
      const list = result.data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        description: item.attributes.description,
        image: item.attributes.image.data.attributes.url,
        topic: item.attributes.Topic,
      }));
      setCourseList(list);
    }
  };

  useEffect(() => {
    fetchCourseList();
  }, []);

  const onNavigateCourseDetail = (course) => {
    // console.log("course", course);
    navigation.navigate("CourseDetail", {course: course})
  };

  return (
    <View className="mt-3.5">
      <Text className="text-xl font-bold mb-0.5 capitalize">
        {type} Courses
      </Text>
      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className={cn(
              "bg-white rounded border border-border",
              index !== courseList.length - 1 && "mr-2.5"
            )}
            onPress={() => {
              onNavigateCourseDetail(item);
            }}
          >
            <Image
              source={{ uri: item.image }}
              className="w-44 h-24 rounded-t"
            />
            <View className="p-2">
              <Text className="text-base font-medium">{item.name}</Text>
              <Text className="text-gray-500">
                {item.topic?.length > 1
                  ? String(item.topic?.length) + " Lessions"
                  : String(item.topic?.length) + " Lession"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;
