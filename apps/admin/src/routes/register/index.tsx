import { Route, Routes } from 'react-router-dom'
import { Typography, TypographySize } from 'ui-react'
import { useRegisterStore } from './store'
import { WeeklyWorkDayHours } from './store/working.slice'

export const RegisterApp = (): JSX.Element => {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
    </Routes>
  )
}

export const Home = (): JSX.Element => {
  const setName = useRegisterStore((state) => state.setName)
  const setEmail = useRegisterStore((state) => state.setEmail)
  const name = useRegisterStore((state) => state.name)
  const email = useRegisterStore((state) => state.email)

  const workHours = useRegisterStore((state) => state.workHours)
  const setWorksHours = useRegisterStore((state) => state.setWorksHours)

  return (
    <div>
      <Typography size={TypographySize.titleSmall}>Register app</Typography>
      <label>
        <span>Nombre</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Working hours (weekly)</span>
        <select
          onChange={(e: any) =>
            setWorksHours(e.target.value as WeeklyWorkDayHours)
          }
          name=""
          id=""
          value={workHours ?? ''}
        >
          <option value="" disabled>
            Select Work Hours (Weekly)
          </option>
          <option value={WeeklyWorkDayHours.FEW}>
            {WeeklyWorkDayHours.FEW} hours
          </option>
          <option value={WeeklyWorkDayHours.PARTIAL}>
            {WeeklyWorkDayHours.PARTIAL} hours
          </option>
          <option value={WeeklyWorkDayHours.FULL}>
            {WeeklyWorkDayHours.FULL} hours
          </option>
        </select>
      </label>
    </div>
  )
}
