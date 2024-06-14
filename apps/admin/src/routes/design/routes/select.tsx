import React from 'react'
import { Select, Typography, TypographySize } from 'ui-react'

const Page = () => {
  return (
    <div className="flex flex-col gap-3">
            <Typography className='mb-4' size={TypographySize.titleMedium}>Select</Typography>      

      <Select placeholder='Select your role'>
        <option value="1">Frontend developer</option>
        <option value="2">Backend developer</option>
        <option value="3">Fullstack developer</option>
        <option value="4">Product owner</option>
        <option value="5">Project manager</option>
      </Select>
    </div>
  )
}

export default Page
