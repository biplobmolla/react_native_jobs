import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
// import useFetch from "../../../hook/useFetch";
import data from "../../../data/jobData";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();
  // const { data, isLoading, error, refetch } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: 1,
  // });
  const [selectedJob, setSelectedJob] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
