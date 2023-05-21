import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastexercise = currentPage * exercisesPerPage

  const indexOfirstExercise = indexOfLastexercise - exercisesPerPage
  const currentExercises = exercises.slice(
    indexOfirstExercise,
    indexOfLastexercise
  )

  const Paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: '1800px', behavior: 'smooth' })
  }
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        )
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography vataint='h3' mb='46px'>
        Showing Result
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={Paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
