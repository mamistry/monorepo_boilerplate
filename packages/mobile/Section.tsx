
 import React from "react";
 import { Text, SafeAreaView, FlatList } from "react-native";
 import { useQuery, gql } from '@apollo/client';

 interface Props {};

 export const Section: React.FC<Props> = () => {
    const EXCHANGE_RATES = gql`
       query GetExchangeRates {
         rates(currency: "USD") {
           currency
           rate
         }
       }
     `;
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
 
   if (loading) return <Text>Loading...</Text>;
   if (error) return <Text>Error :(</Text>;
    return (
     <SafeAreaView>
         <FlatList
        data={data && data.rates ? data.rates : []}
        keyExtractor={item => item.currency + item.rate}
        renderItem={({ item }) => (
          <Text>
            {item.currency} by {item.rate}
          </Text>
        )}
      />
      </SafeAreaView>
    );
  };