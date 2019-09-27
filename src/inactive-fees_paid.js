//'use strict';
//
////import { React } from 'react'
//
//class FeesPaid extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            loading: true,
//            billFieldLoadingMessage: 'Loading...',
//            feesPaid: 0
//        };
//        let that = this;
//        function getFeesPaid() {
//            $.get('fees-paid.json').then(function(data) {
//                that.setState(
//                    {
//                        feesPaid: data.feesPaid,
//                        loading: false
//                    }
//                )
//            });
//        }
//        getFeesPaid();
//        setTimeout(function() {
//            that.setState({
//                billFieldLoadingMessage: that.state.feesPaid
//            });
//        }, 2500);
//    }
//
//    render() {
//        return React.createElement(
//            'span',
//            { onClick: () => this.setState({ billAmount: 300 }) },
//            this.state.billFieldLoadingMessage
//        );
//    }
//}