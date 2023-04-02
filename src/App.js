import React, { useState, useEffect } from 'react';
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack, NativeBaseProvider, Divider } from "native-base";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2Caf5qtlM4SnJ5zjBU5Pl4GsRiI6fbOA", // TODO: obfuscate
  authDomain: "hack-princeton-s23.firebaseapp.com",
  projectId: "hack-princeton-s23",
  storageBucket: "hack-princeton-s23.appspot.com",
  messagingSenderId: "673819601662",
  appId: "1:673819601662:web:8c392436b85f6e827893af",
  measurementId: "G-TMC34ZQD9Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [emailx, setEmailx] = useState("");
  const [password, setPassword] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [data, setData] = useState([]);

  const auth = getAuth();
  const handleSignup = async () => {
    console.log("signing up");
    if (pass1 === pass2) {
    createUserWithEmailAndPassword(auth, email, pass2)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        } // TODO: repeats itself after signup?
        if (error === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        else {
          console.error(error);
        }
        // TODO: add password requirements, eg not just numbers bc it won't work
      });
    } else {
      console.log("Passwords don't match!");
    }
  }

  const handleLogin = async () => {
    console.log("logging in");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch((error) => { // TODO: it's logging in even when the account doesn't exist
        console.log(error);
      });
    console.log("logged in");
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      const snapshot = await db.collection('functions').get();
      const docs = snapshot.docs.map(doc => doc.data());
      setData(docs);
    };
    fetchData();
    console.log(data);
    
  }, []);

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input 
              placeholder="hello@isa23.tech" 
              onChangeText={setEmail} 
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input 
              placeholder="********"
              secureTextEntry
              onChangeText={setPass1}
              value={pass1} 
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input 
              placeholder="********"
              secureTextEntry
              onChangeText={setPass2}
              value={pass2}
            />
          </FormControl>
          <Button 
            mt="2" 
            colorScheme="indigo"
            onPress={handleSignup}
          >
            Sign up
          </Button>
        </VStack>
        </Box>
      </Center>
      <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Center>
      <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input 
              placeholder="hello@isa23.tech" 
              onChangeText={setEmailx} 
              value={emailx}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input 
              placeholder="********"
              secureTextEntry
              onChangeText={setPassword}
              value={password} 
            />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button 
            mt="2" 
            colorScheme="indigo"
            onPress={handleLogin}>
            Sign in
          </Button>
          {/* <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack> */}
        </VStack>
      </Center>
      <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Center>
        {data.map((item, index) => (
          <Text key={index}>{item.name}</Text>
        ))}
      </Center>
    
    </NativeBaseProvider>
  );
};
