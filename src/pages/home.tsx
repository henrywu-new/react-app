import { useState } from 'react'
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const Home = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: any) => {
    setAge(event.target.value as string)
  }

  return (
    <>
      <Button variant='contained'>home page</Button>
      <input type='text' />
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Age'
          onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div>home page</div>
    </>
  )
}

export default Home
