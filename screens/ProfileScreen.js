import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Dropdown = ({ icon, selectedOption, onValueChange, isVisible, toggleVisibility, options, dropdownLabel }) => {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableWithoutFeedback onPress={() => toggleVisibility(!isVisible)}>
        <View style={styles.dropdownHeader}>
          <Icon name={icon} size={20} color="black" style={styles.icon} />
          <Text style={styles.selectedOptionText}>{selectedOption === '' ? dropdownLabel : selectedOption}</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => toggleVisibility(false)}
      >
        <View style={styles.modalContainer}>
          <Picker
            selectedValue={selectedOption}
            style={styles.dropdown}
            onValueChange={(itemValue) => {
              onValueChange(itemValue);
              toggleVisibility(false);
            }}
          >
            <Picker.Item label="" value="" />
            {options.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
        </View>
      </Modal>
    </View>
  );
};

export default function ProfileScreen({ navigation }) {
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [name, setName] = useState('');

  const [dropdowns, setDropdowns] = useState([
    { icon: 'graduation-cap', selectedOption: 'year', isVisible: false, options: ['freshman', 'sophomore', 'junior', 'senior'], dropdownLabel: 'year' },
    { icon: 'book-open', selectedOption: 'major', isVisible: false, options: ['art','biology','chemistry/biochemistry','computing',
    'marine science','mathematics','music—composition','physics','writing and literature','chemical engineering','computer engineering',
    'computer science','electrical engineering','mechanical engineering','actuarial science','anthropology','applied mathematics',
    'aquatic biology','black studies','cell and developmental biology','chicana and chicano studies','chinese',
    'classics','communication','comparative literature','dance','earth science','ecology and evolution','economics & accounting',
    'economics','english','environmental studies','feminist studies','film and media studies','financial mathematics and statistics',
    'mathematics/statistics','french','geography','german','global studies','history','history of public policy and law','history of art and architecture',
    'hydrologic sciences and policy','interdisciplinary studies','italian studies','japanese','language, culture & society','latin american and iberian studies',
    'linguistics','mathematics','medieval studies','microbiology','middle east studies','music','music studies','pharmacology','philosophy',
    'physics','physiology','political science','portuguese','psychological & brain sciences','religious studies','renaissance studies',
    'russian & east european studies','sociology','spanish','statistics and data science','theater—acting','theater','zoology'], dropdownLabel: 'major' },
    { icon: 'music', selectedOption: 'fav genre', isVisible: false, options: ['hip-hop', 'pop', 'country', 'latin', 'rock', 'dance/electronic', 'indie', 'r&b', 'k-pop', 'metal', 'jazz', 'classical', 'folk & acoustic', 'soul', 'afro', 'funk & disco'], dropdownLabel: 'fav genre' },
    { icon: 'heart', selectedOption: 'hobbies', isVisible: false, options: ['reading','watching movies',
    'listening to music','playing video games','cooking','gardening','traveling','photography','exercising',
    'hiking','painting','drawing','crafting','playing sports','writing','dancing','playing musical instruments',
    'collecting','bird watching','volunteering'], dropdownLabel: 'hobbies' },
    { icon: 'hamburger', selectedOption: 'fav cuisine', isVisible: false, options: ['chinese','italian','mexican','indian',
    'japanese','american','french','thai','spanish','korean','greek','vietnamese','mediterranean','german','cuban',
    'brazilian','turkish','lebanese','filipino','caribbean'], dropdownLabel: 'fav cuisine' },
  ]);

  // const handleInputChange = (text) => {
  //   setSocialMediaHandle(text);
  // };

  const handleDropdownChange = (index, itemValue) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index].selectedOption = itemValue;
    setDropdowns(updatedDropdowns);
  };

  const toggleDropdownVisibility = (index, isVisible) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index].isVisible = isVisible;
    setDropdowns(updatedDropdowns);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../images/snoopy.jpg")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.editButton}>
          <Icon name="pen" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Adding a vertical line */}
      <View style={styles.line}></View>

      <View style={styles.header}>
        <TextInput
          style={styles.userName}
          placeholder="name"
          value={name}
          onChangeText={text => setName(text)}
        />

        {/* Adding a vertical line */}
        <View style={styles.verticalLine}></View>

        <TextInput
          style={styles.input}
          placeholder="@social media handle"
          value={socialMediaHandle}
          // onChangeText={handleInputChange}
          onChangeText={text => setSocialMediaHandle(text)}

        />

      </View>

      {dropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          icon={dropdown.icon}
          selectedOption={dropdown.selectedOption}
          onValueChange={(itemValue) => handleDropdownChange(index, itemValue)}
          isVisible={dropdown.isVisible}
          toggleVisibility={(isVisible) => toggleDropdownVisibility(index, isVisible)}
          options={dropdown.options}
          dropdownLabel={dropdown.dropdownLabel}
        />
      ))}

      <View style={styles.homeButtonContainer}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "flex-start", // Align everything to the left
    margin: 20,
    position: "relative",
  },
  userName: {
    fontSize: 20,
    margin: 10,
    alignSelf: "flex-start", // Align the user name to the left
  },
  image: {
    width: 330,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
    margin: 10,
  },
  editButton: {
    backgroundColor: "transparent",
    borderRadius: 100,
    padding: 10,
    position: "absolute",
    top: 10,
    right: 10,
    marginLeft: 20,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    marginLeft: 10,
    padding: 5,
    flex: 1,
    fontSize: 16,
  },
  dropdownContainer: {
    marginTop: 30,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  selectedOptionText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dropdown: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
  homeButtonContainer: {
    marginTop: 30, // Add marginTop to create space above the button
  },
});

