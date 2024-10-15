import React from 'react';
import styled from 'styled-components/native';
import CustomText from '../atoms/CustomText';
import { scale, moderateScale } from '../../../utils/Scale';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useFormContext } from 'react-hook-form';


const LocationSearch: React.FC = () => {
    const { setValue } = useFormContext();

    return (
        <Container>
            <CustomText>Address</CustomText>
            <GooglePlacesAutocomplete
                minLength={2}
                placeholder="Cari lokasi!"
                query={{
                    key: 'AIzaSyAqcGBl-o7vEpBZSv03qzrKLq4zGVl7zA4',
                    language: 'ko', //id
                    components: 'country:kr', //country:id 
                }}
                keyboardShouldPersistTaps={'handled'}
                fetchDetails={true}
                onPress={(data, details) => {
                    if (details) {
                        setValue('location', details.formatted_address);
                        console.log('location selected:', details.formatted_address);
                    }
                }}
                onFail={(error) => console.log(error)}
                onNotFound={() => console.log('no results')}
                keepResultsAfterBlur={true}
                enablePoweredByContainer={false}
                styles={styles.search}
            />
        </Container>
    );
};

const styles = {
    search: {
        textInputContainer: {
            borderWidth: 2,
            borderColor: '#4C4C4C',
            borderRadius: 8, 

        },
        predefinedPlacesDescription: {
            color: '#1faadb',
        },
    },
};

const Container = styled.View`
    flex: 1;
    width: ${moderateScale(250, 0.3)}px;
`;

export default LocationSearch;
