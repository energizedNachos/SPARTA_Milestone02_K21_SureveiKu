import {
    Box,
    Text,
    Image,
    Spacer,
    Stack,
    SimpleGrid,
    Button,
    VStack,
    Flex,
    UnorderedList,
    ListItem,
  } from '@chakra-ui/react';
  import FormalHeading from "../FormalHeading";
  
  const MySurvey = () => {
    function Surveybox(){
      return(
        <Box
          w='300px'
          h='700px'
          bg='white'
          boxShadow='0 4px 12px 0 black'
          borderRadius={20}
          padding={5}
        >
          <Stack w='100%' h='100%'>
            <Spacer></Spacer>
            <Box boxSize={'15em'} w='100%'>
              <Spacer></Spacer>
              <Image src='./AvailableSurveys.png' />
            </Box>
            <Box>
              <Text
                fontSize='1em'
                fontWeight='bold'
                color='black'
                align='left'
              >
                Judul
              </Text>
              <Text align='left'>Kaitan Gawai dan Jam Tidur</Text>
            </Box>
            <Spacer></Spacer>
            <Box>
              <Text
                fontSize='1em'
                fontWeight='bold'
                color='black'
                align='left'
              >
                Deskripsi
              </Text>
              <Text align='left'>
                Survei ini dibuat untuk menganalisis kaitan antara penggunaan
                gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah
                penggunaan gawai yang berlebih sebelum tidur akan
                mengakibatkan waktu jam tidur yang berkurang dan kualitas
                tidur yang tidak baik
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box>
              <Text
                fontSize='1em'
                fontWeight='bold'
                color='black'
                align='left'
              >
                Syarat Khusus
              </Text>
              <Flex paddingLeft='10px'>
                <UnorderedList>
                  <ListItem align='left'>Merupakan mahasiswa</ListItem>
                  <ListItem align='left'>Berumur di bawah 25 tahun</ListItem>
                </UnorderedList>
              </Flex>
            </Box>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Box align='center'>
              <Button
                bgColor='#EA8238'
                color='white'
                _hover={{ bg: '#d66a1e' }}
                w='80%'
                fontWeight='bold'
                borderRadius={20}
              >
                ANALYSYS
              </Button>
            </Box>
            <Box align='center'>
              <Button
                bgColor='#EA8238'
                color='white'
                _hover={{ bg: '#d66a1e' }}
                w='80%'
                fontWeight='bold'
                borderRadius={20}
              >
                EDIT SURVEY
              </Button>
            </Box>
          </Stack>
        </Box>
      )
    }
    return (
      <VStack align='center' h='100%'>
        <FormalHeading title='My Surveys'/>
        <SimpleGrid columns={3} spacingX={20} spacingY='10' overflowY={'scroll'} w='auto' h='full' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
              <Surveybox/>
              <Surveybox/>
              <Surveybox/>   
              <Surveybox/>
              <Surveybox/>
              <Surveybox/>
              <Spacer/>
        </SimpleGrid>
      </VStack>
    );
  };
  
  export default MySurvey;
  