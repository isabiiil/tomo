import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

export default App() {
  return (
    <Text>hello</Text>
  );
}