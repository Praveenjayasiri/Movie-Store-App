import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const home = () => {
    navigation.navigate('HomeScreen');
  };

  const search = () => {
    navigation.navigate('SearchScreen');
  };

  const profile = () => {
    navigation.navigate('ProfileScreen');
  };

  const popularonFilmFindimages1 = () => {
    navigation.navigate('PopularonFilmFind_images1');
  };

  const popularonFilmFindimages2 = () => {
    navigation.navigate('PopularonFilmFind_images2');
  };

  const popularonFilmFindimages3 = () => {
    navigation.navigate('PopularonFilmFind_images3');
  };

  const topIMDBRatedimages1 = () => {
    navigation.navigate('TopIMDBRated_images1');
  };

  const topIMDBRatedimages2 = () => {
    navigation.navigate('TopIMDBRated_images2');
  };

  const topIMDBRatedimages3 = () => {
    navigation.navigate('TopIMDBRated_images3');
  };

  const uPCOMMINGimages1 = () => {
    navigation.navigate('UPCOMMING_images1');
  };

  const uPCOMMINGimages2 = () => {
    navigation.navigate('UPCOMMING_images2');
  };

  const uPCOMMINGimages3 = () => {
    navigation.navigate('UPCOMMING_images3');
  };

  const recommendedimages1 = () => {
    navigation.navigate('Recommended_images1');
  };

  const recommendedimages2 = () => {
    navigation.navigate('Recommended_images2');
  };

  const recommendedimages3 = () => {
    navigation.navigate('Recommended_images3');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.titleimage}
          />
          <TouchableOpacity onPress={home}>
            <Text style={styles.homescreenText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={search}>
            <Text style={styles.searchscreenText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={profile}>
            <Text style={styles.profilescreenText}>Profile</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Popular on FilmFind</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.touchableImage}  onPress={popularonFilmFindimages1}>
              <Image
                source={require('../assets/PopularonFilmFind/images(1).jpg')}
                style={styles.popularImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage} onPress={popularonFilmFindimages2}>
              <Image
                source={require('../assets/PopularonFilmFind/images(2).jpg')}
                style={styles.popularImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage} onPress={popularonFilmFindimages3}>
              <Image
                source={require('../assets/PopularonFilmFind/images(3).jpg')}
                style={styles.popularImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage}>
              <Image
                source={require('../assets/PopularonFilmFind/images(4).jpg')}
                style={styles.popularImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage}>
              <Image
                source={require('../assets/PopularonFilmFind/images(5).jpg')}
                style={styles.popularImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage}>
              <Image
                source={require('../assets/PopularonFilmFind/images(6).jpg')}
                style={styles.popularImage}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Text style={styles.text2}>Top IMDB Rated</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer2}>
            <TouchableOpacity style={styles.touchableImage2} onPress={topIMDBRatedimages1}>
              <Image
                source={require('../assets/TopIMDBRated/images(1).jpg')}
                style={styles.popularImage2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage2} onPress={topIMDBRatedimages2}>
              <Image
                source={require('../assets/TopIMDBRated/images(2).jpg')}
                style={styles.popularImage2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage2} onPress={topIMDBRatedimages3}>
              <Image
                source={require('../assets/TopIMDBRated/images(3).jpg')}
                style={styles.popularImage2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage2}>
              <Image
                source={require('../assets/TopIMDBRated/images(4).jpg')}
                style={styles.popularImage2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage2}>
              <Image
                source={require('../assets/TopIMDBRated/images(5).jpg')}
                style={styles.popularImage2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage2}>
              <Image
                source={require('../assets/TopIMDBRated/images(6).jpg')}
                style={styles.popularImage2}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={styles.text3}>Up Comming</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer3}>
            <TouchableOpacity style={styles.touchableImage3} onPress={uPCOMMINGimages1}>
              <Image
                source={require('../assets/UPCOMMING/images(1).jpg')}
                style={styles.popularImage3}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage3} onPress={uPCOMMINGimages2}>
              <Image
                source={require('../assets/UPCOMMING/images(2).jpg')}
                style={styles.popularImage3}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage3} onPress={uPCOMMINGimages3}>
              <Image
                source={require('../assets/UPCOMMING/images(3).jpg')}
                style={styles.popularImage3}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage3}>
              <Image
                source={require('../assets/UPCOMMING/images(4).jpg')}
                style={styles.popularImage3}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage3}>
              <Image
                source={require('../assets/UPCOMMING/images(5).jpg')}
                style={styles.popularImage3}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage3}>
              <Image
                source={require('../assets/UPCOMMING/images(6).jpg')}
                style={styles.popularImage3}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={styles.text4}>Recommended</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer4}>
            <TouchableOpacity style={styles.touchableImage4} onPress={recommendedimages1}>
              <Image
                source={require('../assets/Recommended/images(1).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4} onPress={recommendedimages2}>
              <Image
                source={require('../assets/Recommended/images(2).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4} onPress={recommendedimages3}>
              <Image
                source={require('../assets/Recommended/images(3).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(4).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(5).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(6).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09212e',
  },
  titleContainer: {
    backgroundColor: '#09212e',
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    left: 40,
  },
  homescreenText: {
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 8,
    fontSize: 16,
  },
  searchscreenText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
    padding: 8,
  },
  profilescreenText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
    padding: 8,
  },
  titleimage: {
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 5,
    marginHorizontal: 15,
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 5,
    marginHorizontal: 15,
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 5,
    marginHorizontal: 15,
  },
  text4: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 5,
    marginHorizontal: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 1,
    marginBottom: 10,
  },
  imageContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 1,
    marginBottom: 10,
  },
  imageContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 1,
    marginBottom: 10,
  },
  imageContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 1,
    marginBottom: 10,
  },
  touchableImage: {
    width: 100,
    height: 200,
    marginHorizontal: 5,
    padding: 5,
  },
  touchableImage2: {
    width: 100,
    height: 200,
    marginHorizontal: 5,
    padding: 5,
  },
  touchableImage3: {
    width: 100,
    height: 200,
    marginHorizontal: 5,
    padding: 5,
  },
  touchableImage4: {
    width: 100,
    height: 200,
    marginHorizontal: 5,
    padding: 5,
  },
  popularImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  popularImage2: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  popularImage3: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  popularImage4: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default HomeScreen;
