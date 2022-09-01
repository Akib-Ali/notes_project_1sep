import { useEffect, useState } from "react"
import axios from "axios";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Grid,
    GridItem,
    Skeleton, SkeletonCircle, SkeletonText
  } from '@chakra-ui/react';

//   import { Grid, GridItem } from '@chakra-ui/react'
  

export const Home=()=>{

     const [data,setData] = useState([]);
     const [error,setError] = useState(false)
     const [loading, setloading] = useState(false)


     useEffect(()=>{
        fetchdata()
        setloading(true)
        
     },[])

     const fetchdata=()=>{
        axios({
            method:"get",
            url:"https://doctor-patient123.herokuapp.com/users",
            

        }).then((res)=>{
            setData(res.data);
            setloading(false)

        }).catch((err)=>{
            setError(err)
            setloading(false)

        })

     }



    //  if(loading){
    //     return  <h1 className='loading'>...Loading</h1>
      
    //    }
      
       
      




    return(
        <div> 

        {/* <div>{data.map((e)=>  <div> {e.title_note}</div>)}</div> */}
        {loading && <Skeleton startColor='pink.500' endColor='orange.500' height='15px' pt="50px" />}
        
        

        <Grid templateColumns='repeat(4, 1fr)' gap={4}>



        {data.map((e)=>{
            return(

           

        <Center py={6} key={e.id}>
      <Box
    
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            // 'https://cdn4.vectorstock.com/i/1000x1000/24/03/notes-vector-19192403.jpg'
            'https://images.unsplash.com/photo-1598379232411-d670d6872193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5vdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {/* Lindsey James */}
          {e.title_note}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {/* @lindsey_jam3s */}
          {e.date}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {/* Actress, musician, songwriter and artist. PM for work inquires or{' '} */}
          {e.decription}
          {/* <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '} */}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {/* <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge> */}
          {/* <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge> */}
          {/* <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge> */}
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Delete
          </Button>
        </Stack>
      </Box>
    </Center>

    )
        })}


        </Grid>


        </div>
    )
}