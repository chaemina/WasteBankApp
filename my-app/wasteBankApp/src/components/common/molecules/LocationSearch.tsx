import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearch: React.FC = () => {
    return (
        <View>
            <GooglePlacesAutocomplete
                minLength={2}
                placeholder="장소를 검색해보세요!"
                query={{
                    key: 'AIzaSyAqcGBl-o7vEpBZSv03qzrKLq4zGVl7zA4',
                    language: 'ko',
                    components: 'country:kr',
                }}
                keyboardShouldPersistTaps={'handled'}
                fetchDetails={true}
                onPress={(data, details) => {
                    console.log(data, details);
                }}
                onFail={(error) => console.log(error)}
                onNotFound={() => console.log('no results')}
                keepResultsAfterBlur={true}
                enablePoweredByContainer={false}  
            />
        </View>
    );
};

export default LocationSearch;
