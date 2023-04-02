import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { IoCalendarOutline, IoCalendar, IoStatsChartOutline, IoStatsChart, IoRocketOutline, IoRocket, IoHomeOutline, IoHome, IoSettingsOutline, IoSettings } from "react-icons/io5";
// timeline, analytics, quests, add entry, settings

export default function Nav() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="4" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={selected === 0 ? <IoCalendarOutline /> : <IoCalendar />} color="white" />
              <Text color="white" fontSize="12">
                Timeline
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="4" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={selected === 1 ? <IoStatsChartOutline /> : <IoStatsChart />} color="white" />
              <Text color="white" fontSize="12">
                Analytics
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="4" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={selected === 2 ? <IoHomeOutline /> : <IoHome />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="4" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={selected === 3 ? <IoRocketOutline /> : <IoRocket />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Quests
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 4 ? 1 : 0.5} py="4" flex={1} onPress={() => setSelected(4)}>
            <Center>
              <Icon mb="1" as={selected === 4 ? <IoSettingsOutline /> : <IoSettings />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Settings
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;
}