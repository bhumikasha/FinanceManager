import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

    //When done, change this to functional component
 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Mr.Ashutosh Sinha",
              text: "Winner",
              img:  <Image
              style= {{ width: 220, height: 290, marginLeft: 17}}
              source={require('../../assets/Winner.jpg')}/>,
              budget: "Saved 10k from budget",
              invested: "20k more than declared"
          },
          {
              title:"Mrs.Priyanka Rawat",
              text: "Rank: 2",
              img:  <Image
              style= {{ width: 250, height: 250}}
              source={require('../../assets/runnerUp.jpeg')}/>,
                budget: "Saved 10k from budget",
                invested: "20k more than declared"
          },
          {
              title:"Mr.Rahul Goswami",
              text: "Rank 3",
              img:  <Image
              style= {{ width: 250, height: 250}}
              source={require('../../assets/runnerUp.jpeg')}/>,
                budget: "Saved 10k from budget",
                invested: "20k more than declared"
          },
          {
              title:"Miss.Ankita Rajput",
              text: "Rank 4",
              img:  <Image
              style= {{ width: 250, height: 250}}
              source={require('../../assets/award.jpg')}/>
          },
          {
              title:"Mr.Sanjit Tewari",
              text: "Rank 5",
              img:  <Image
              style= {{ width: 250, height: 250}}
              source={require('../../assets/award.jpg')}/>
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 550,
              paddingHorizontal: 8,
              paddingVertical: 15,
              marginLeft: 25,
              marginRight: 5 }}>
            <Text style={{fontSize: 30, textAlign:'center'}}>{item.text}</Text>
            <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 50}}>{item.title}</Text>
            {item.img}
            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.budget}</Text>
            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.invested}</Text>
          </View>

        )
    }

    render() {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let day = new Date();
        let today = month[day.getMonth()];
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'teal', paddingTop: 15 }}>
            <Text style={{marginLeft: '20%', fontSize: 30, marginBottom: '12%', fontWeight: 700, color: 'white'}}> {today} Winner Board</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center'}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index})}
                   />
            </View>
          </SafeAreaView>
        );
    }
}

