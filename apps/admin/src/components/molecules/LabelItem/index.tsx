import React, { useContext, useState } from 'react'
import { Label } from '../../../models/label.model'
import { labelService } from '../../../services/label.service'
import { AuthContext } from '../../../context/AuthContext'
import { useGetLabels } from '../../organisms/ListOfLabels'
import { Link } from 'react-router-dom'
import './style.css'
import { Button, ButtonSizes } from '../../atoms/Button'
import { Typography, TypographySize } from '../../atoms/Typography'
type LabelProps = {
    data:Label,
    getLabels:any
    setFilteredLabels:any,
    filteredLabels:Label[]
}
export const LabelItem = ({data: label,setFilteredLabels,filteredLabels}:LabelProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const {token} = useContext(AuthContext)
    // const {getLabels} = useGetLabels()
 
    const handleDelete = async () => {
        setLoading(true);
        try {
          await labelService.deleteLabel(token as string,label.id);
          setFilteredLabels(filteredLabels.filter((item)=> item.id !== label.id))
          // await getLabels()
          setError(null)
        } catch (error) {
          setError(`${error}`);
        }
        setLoading(false);
      };
      return (
        <div className="labels-list__item" key={label.id}>
          <Typography size={TypographySize.bodyLarge}>{label.id}</Typography>
          <Typography size={TypographySize.bodyLarge}>{label.title}</Typography>
          <Typography size={TypographySize.bodyLarge}>{label.type}</Typography>
          <div className='w-10'>
            <img src={label.image} alt={label.title} />
          </div>
          <Typography size={TypographySize.bodyLarge}>{`${label.createdAt}`}</Typography>
          <div className="flex overflow-x-scroll">
            <Button actionType='button' onClick={handleDelete} label='Delete' size={ButtonSizes.SMALL} loading={loading}/>
            <Link to={`/labels/edit/${label.id}`}>Edit</Link>
          </div>
        </div>
      );
    
}
export const LabelSkeleton = () => {
  return (
    <div>LabelSkeleton</div>
  )
}
