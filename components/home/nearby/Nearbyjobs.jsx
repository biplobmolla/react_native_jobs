import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
// import useFetch from "../../../hook/useFetch";
import data from "../../../data/jobData2";

import styles from "./nearbyjobs.style";
import { useState } from "react";

const NearbyJobs = () => {
  const router = useRouter();
  // const { data, isLoading, error, refetch } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: 1,
  // });
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          data?.data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearbt-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
