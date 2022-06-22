import * as React from "react";
import { useState } from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Circle,
} from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../../environments";
import { Nav } from "./Nav";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
const { width, height } = Dimensions.get("window");
//31.481548630313945, 74.30302482687031
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUTDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const INITIAL_POSITION = {
  latitude: 31.481548630313945,
  longitude: 74.30302482687031,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUTDE_DELTA,
};

type inputAutoCompleteProps = {
  label: string,
  placeholder: string,
  onPlaceSelected: (details: GooglePlaceDetails | null) => void,
};

function InputAutoComplete({
  label,
  placeholder,
  onPlaceSelected,
}: inputAutoCompleteProps) {
  return (
    <>
      {/* <Text>{label}</Text> */}
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.inputSearch }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  );
}

export const Search = () => {
  const [pin, setPin] = useState({
    latitude: 31.481548630313945,
    longitude: 74.30302482687031,
  });
  const [region, setRegion] = useState({
    latitude: 31.481548630313945,
    longitude: 74.30302482687031,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUTDE_DELTA,
  });
  const [destination, setDestination] = useState({latitude: 31.481548630313945,
    longitude: 74.30302482687031});
  const onPlaceSelected = (
    details: GooglePlaceDetails | null,
    flag: "origin" | "destination"
  ) => {};

  return (
    <>
      <SafeAreaView style={styles.SafeAreaViewModify}>
        <View style={styles.root}>
          <View style={styles.c3}>
            <View style={styles.containerMap}>
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_POSITION}
              >

                <Marker coordinate={{latitude:region.latitude, longitude:region.longitude}} pinColor="hotpink"/>

                <Marker
                  coordinate={pin}
                  pinColor="blue"
                  draggable={true}
                  onDragStart={(e) => {
                    setPin({
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                    });
                  }}
                  onDragEnd={(e) => {
                    setPin({
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                    });
                  }}
                >
                  <Callout>
                    <Text>Fast NUCES</Text>
                  </Callout>
                </Marker>
                <Circle
                  center={pin}
                  radius={500}
                  fillColor={"rgba(128,128,128,0.1)"}
                />

                <MapViewDirections origin={pin} destination={destination} apikey={GOOGLE_API_KEY} strokeWidth={4} strokeColor="blue"/>

              </MapView>
              <View style={styles.searchContainer}>
                <GooglePlacesAutocomplete
                  placeholder="Search"
                  fetchDetails={true}
                  GooglePlacesSearchQuery={{ rankby: "distance" }}
                  onPress={(data, details = null) => {
                    setRegion({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: LATITUDE_DELTA,
                      longitudeDelta: LONGITUTDE_DELTA,
                    });
                    setDestination({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                    })
                  }}
                  query={{
                    key: GOOGLE_API_KEY,
                    language: "en",
                    components: "country:pk",
                    types: "establishment",
                    radius: 30000,
                    location: `${region.latitude},${region.longitude}`,
                  }}
                />
                {/* <InputAutoComplete label = "Destination"  onPlaceSelected = {()=>{}}/> */}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewModify: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  root: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    height: height,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
  c0: {
    flex: 0.25,
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  c1: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  h1: {
    color: "#2F3C98",
    fontSize: 25,
  },
  h2: {
    color: "#787A85",
    fontSize: 40,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginVertical: 15,
    borderColor: "#DEDEDE",
    width: 320,
  },
  buttonStyle: {
    backgroundColor: "#2F3C98",
    width: 210,
    paddingVertical: 18,
    borderRadius: 50,
    marginTop: 73,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  c2: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "5%",
    justifyContent: "center",
  },
  link: {
    color: "#2F3C98",
    fontWeight: "bold",
  },
  c3: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#2F3C98",
    borderRadius: 100,
    backgroundColor: "#2F3C98",
  },
  searchBarStyle: {
    borderRadius: 10,
    shadowColor: "white",
    borderWidth: 1,
    borderColor: "#DEDEDE",
  },
  containerMap: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 2,
    borderRadius: 8,
    top: 30,
  },
  inputSearch: {
    borderColor: "#888",
    // borderWidth:1,
  },
});
