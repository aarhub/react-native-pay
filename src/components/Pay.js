import React from 'React'
import { StyleSheet, View, Text, Button, NativeModules } from 'react-native'

const { Alipay, PayPal } = NativeModules;

export default class Pay extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            radio: 0
        }
    }

    render() {
        const radio_props = [
            { label: 'PayPal', value: 0 },
            { label: 'Alipay', value: 1 }
        ];

        return (
            <View style={styles.container}>
                <Text style={{ width: '100%',textAlign: 'center' }}>React Native integrate the APIs of mobile pay.</Text>

                <Button onPress={this.onPressPayPal} title="Confirm Pay" style={styles.confirm} />
            </View>
        )
    }

    onPressPayPal = () => {
        PayPal.initialize(PayPal.NO_NETWORK, "AbtbfDb7XIveXS3CnE1yY6vuU3EgvSUblWTf9K_knEsWvuhV1nP1zjX1TPGnnnTrFY7xi88Dm8E0rtK7");
        PayPal.pay({
            price: '1.00',
            currency: 'USD',
            description: 'Test Order',
        }).then(confirm => console.log(confirm))
            .catch(error => console.log(error));
    }

    /**
     *  Alipay
     */
    onPressAlipay = async () => {
        //let res = await call(getOrderInfo, params); 
        let ret = await call(Alipay.pay, {});
        if (ret.resultStatus === '9000') {
        } else {
        }
    }

    /**
     * Wechat Pay
     */
    onPressWechat = () => {

    }
}

const styles = StyleSheet.create({
    container: {
        margin: 6,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    confirm: {
        margin: 20
    }
})