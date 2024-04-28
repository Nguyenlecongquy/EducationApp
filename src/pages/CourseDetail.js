import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CourseDetail = (props) => {
  const courseData = props.route.params.course;
  const [course, setCourse] = useState();

  useEffect(() => {
    setCourse(courseData);
  }, [courseData]);

  return (
    <SafeAreaView>
      <View>
        <Text>Course Detail</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default CourseDetail;
