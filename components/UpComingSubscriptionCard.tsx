import { formatCurrency } from "@/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpComingSubscriptionCard = ({ ...item }: UpcomingSubscription) => {
  const { name, price, daysLeft, icon, currency } = item;
  return (
    <View className="upcoming-card">
      <Image source={icon} className="upcoming-icon" />
      <View>
        <Text className="upcoming-price">
          {formatCurrency(price, currency)}
        </Text>
        <Text className="upcoming-meta" numberOfLines={1}>
          {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
        </Text>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpComingSubscriptionCard;
