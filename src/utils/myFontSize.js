import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default myFontSize = {
    // h1:{
    //   fontFamily:"DMSans-Bold",
    //   fontSize:24,
    //   LineHeight:32
    // },
    // h2:{
    //   fontFamily:"DMSans-Bold",
    //   fontSize:18,
    //   LineHeight:24
    // },
    // h3:{
    //   fontFamily:"DMSans-Bold",
    //   fontSize:16,
    //   LineHeight:22
    // },
    // body:{
    //   fontFamily:"DMSans-Regular",
    //   fontSize:14,
    //   LineHeight:24
    // },
    // labels:{
    //   fontFamily:"DMSans-Bold",
    //   fontSize:14,
    //   LineHeight:24
    // },
    // small:{
    //   fontFamily:"DMSans-Regular",
    //   fontSize:12,
    //   LineHeight:16
    // },

    //RESPONSIVE

    h1:{
      fontFamily:"DMSans-Bold",
      fontSize:hp('2.9%'),
      LineHeight:hp('3.9%'),
    },
    h2:{
      fontFamily:"DMSans-Bold",
      fontSize:hp('2.2%'),
      LineHeight:hp('2.4%'),
    },
    h3:{
      fontFamily:"DMSans-Bold",
      fontSize:hp('2%'),
      LineHeight:hp('2%'),
    },
    body:{
      fontFamily:"DMSans-Regular",
      fontSize:hp('1.7%'),
      LineHeight:hp('1.8%'),
    },
    labels:{
      fontFamily:"DMSans-Bold",
      fontSize:hp('1.7%'),
      LineHeight:hp('1.8%'),
    },
    small:{
      fontFamily:"DMSans-Regular",
      fontSize:hp('1.44%'),
      LineHeight:hp('1.7%')
    },

  }