import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const initialData = [
  {
    id: 1,
    views: 15000,
    prog_name: 'Movie A',
    date_telecast: '2024-09-01',
    income_of_ad: 5000,
    expenses: 3000,
  },
  {
    id: 2,
    views: 22000,
    prog_name: 'IPL 2024 Match 1',
    date_telecast: '2024-04-05',
    income_of_ad: 12000,
    expenses: 4000,
  },
  {
    id: 3,
    views: 18000,
    prog_name: 'Drama Series B',
    date_telecast: '2024-08-15',
    income_of_ad: 8000,
    expenses: 2000,
  },
  {
    id: 4,
    views: 50000,
    prog_name: 'IPL 2024 Final',
    date_telecast: '2024-05-29',
    income_of_ad: 20000,
    expenses: 7000,
  },
];

const JioCinema = () => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);

  // Show all records
  const showAllRecords = () => {
    setFilteredData(data);
  };

  // Filter IPL records
  const showIPLRecords = () => {
    const iplRecords = data.filter(record => record.prog_name.includes('IPL'));
    setFilteredData(iplRecords);
  };

  // Find record with max views
  const showMaxViewRecord = () => {
    const maxViewRecord = data.reduce((max, record) =>
      record.views > max.views ? record : max
    , data[0]);
    setFilteredData([maxViewRecord]);
  };

  // Filter records with loss (expenses > income)
  const showLossRecords = () => {
    const lossRecords = data.filter(record => record.expenses > record.income_of_ad);
    setFilteredData(lossRecords);
  };

  // Add a new record
  const addNewRecord = () => {
    const newRecord = {
      id: data.length + 1,
      views: 70000,
      prog_name: 'New Program',
      date_telecast: '2024-09-15',
      income_of_ad: 4000,
      expenses: 3000,
    };
    setData([...data, newRecord]);
    setFilteredData([...data, newRecord]);
  };

  // Delete third record
  const deleteThirdRecord = () => {
    const updatedData = data.filter(record => record.id !== 3);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  // Update expenses by 10%
  const updateExpensesBy10Percent = () => {
    const updatedData = data.map(record => ({
      ...record,
      expenses: record.expenses * 1.1,
    }));
    setData(updatedData);
    setFilteredData(updatedData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>JioCinema Records</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showAllRecords}>
          <Text style={styles.buttonText}>Show All Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showIPLRecords}>
          <Text style={styles.buttonText}>Show IPL Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showMaxViewRecord}>
          <Text style={styles.buttonText}>Show Max View Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showLossRecords}>
          <Text style={styles.buttonText}>Show Loss Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addNewRecord}>
          <Text style={styles.buttonText}>Add Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteThirdRecord}>
          <Text style={styles.buttonText}>Delete 3rd Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={updateExpensesBy10Percent}>
          <Text style={styles.buttonText}>Update Expenses by 10%</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.prog_name}</Text>
            <Text>Views: {item.views}</Text>
            <Text>Date Telecast: {item.date_telecast}</Text>
            <Text>Income of Ad: {item.income_of_ad}</Text>
            <Text>Expenses: {item.expenses.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '30%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default JioCinema;
