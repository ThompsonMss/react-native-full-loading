import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

import PropTypes from 'prop-types';

const heightDevice = Dimensions.get('screen').height;

const FullLoading = (props) => {

    const {
        backgroundColor,
        colorIndicator,
        sizeIndicator,
        colorText,
        text,
        visible
    } = props;

    return (
        <>
            {visible && (
                <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                    <ActivityIndicator style={styles.activityIndicator} color={colorIndicator} size={sizeIndicator} />
                    <Text style={[styles.text, { color: colorText }]}>{text}</Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: heightDevice,
        justifyContent: 'center',
        alignItems: 'center',
        top: -60,
    },
    activityIndicator: {
        marginTop: 60
    },
    text: {
        fontSize: 14,
        marginTop: 15
    }
});

FullLoading.prototype = {
    backgroundColor: PropTypes.string,
    colorIndicator: PropTypes.string,
    sizeIndicator: PropTypes.string,
    colorText: PropTypes.string,
    text: PropTypes.string,
    visible: PropTypes.bool.isRequired
};

FullLoading.defaultProps = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    colorIndicator: '#FFF',
    sizeIndicator: 'large',
    colorText: "#FFF",
    text: "Loading"
};

export default FullLoading;