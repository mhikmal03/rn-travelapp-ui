import React, { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../config/COLORS'
import CATEGORIES from '../config/CATEGORIES'
import ADVENTURES from '../config/ADVENTURE'
import Icon from 'react-native-vector-icons/FontAwesome5';



const LOVE = <Icon name='heart' size={25} color={COLORS.primary} light />
const WIDTH = Dimensions.get('screen').width

const HomeScreen = () => {

    const [active, setActive] = useState(0)


    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <View style={style.flex}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.dark
                    }}>
                        Discover
                    </Text>
                    <Image
                        style={{ height: 50, width: 50, borderRadius: 50 }}
                        source={require("../assets/profile.png")} />
                </View>
                <ScrollView horizontal style={style.scrollview}>
                    {CATEGORIES.map((category, index) => {
                        return (
                            <TouchableOpacity onPress={() => setActive(index)} style={{ marginRight: 10 }} key={category.id}>
                                <Text style={[{
                                    fontSize: 20, color: COLORS.dark
                                },
                                active === index && { color: COLORS.primary },]}>
                                    {category.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <Text style={{ fontSize: 15, color: COLORS.dark }}>
                    {CATEGORIES[active].tours.length + " "}
                    {CATEGORIES[active].title}
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={WIDTH * 0.7}
                    decelerationRate='fast'
                    pagingEnabled
                    style={{ marginVertical: 20 }}>
                    {CATEGORIES[active].tours.map((item, idx) => {
                        return (
                            <TouchableOpacity style={{
                                width: WIDTH * 0.7,
                                height: WIDTH * 0.9,
                                overflow: 'hidden',
                                borderRadius: 20,
                                marginRight: 20,
                            }}
                                key={idx}>
                                <View style={{
                                    position: 'absolute',
                                    zIndex: 10,
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: COLORS.transparent,
                                    justifyContent: 'space-between',
                                    padding: 10,
                                }}>
                                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                                        <View style={{ 
                                            padding: 10,
                                            borderRadius: 50,                                            
                                            backgroundColor: COLORS.light,
                                            alignItems: 'center'
                                            }}>
                                            {LOVE}
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, color: COLORS.white, fontWeight: '700', marginLeft: 10 }}>
                                        {item.title}
                                    </Text>
                                </View>
                                <Image
                                    style={{ width: '100%', height: '100%', position: 'relative', }}
                                    source={item.image} />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.dark }}>
                        Wanna Explore?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.primary }}>
                            Show all
                        </Text>
                    </TouchableOpacity>
                </View>


                <ScrollView
                    horizontal
                    pagingEnabled
                    style={{ marginVertical: 20 }}
                    showsHorizontalScrollIndicator={false}
                >

                    {ADVENTURES.map((each, idx) => {
                        return (
                            <TouchableOpacity key={each.id} style={{ marginRight: 30, padding: 10, alignItems: 'center' }}>
                                <View style={{ width: 30, height: 30, }}>
                                    <Image source={each.image} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                                </View>
                                <Text style={{ textTransform: 'uppercase', fontSize: 10, marginTop: 10, }}>
                                    {each.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>



            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    scrollview: {
        marginVertical: 20,
    }

})










export default HomeScreen