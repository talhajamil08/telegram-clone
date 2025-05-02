import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../providers/auth-provider";
import ContactList from "../components/contacts-list";

const ContactsScreen = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = useCallback(async () => {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .neq("id", user?.id); // exclude current user
    setUsers(data || []);
  }, [setUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers()]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        contentContainerStyle={{ gap: 5}}
        renderItem={({ item: contacts }) => <ContactList contacts={contacts} />}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
