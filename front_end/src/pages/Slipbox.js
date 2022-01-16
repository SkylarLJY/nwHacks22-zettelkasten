import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router-dom'
import boxService from '../services/boxes'
import Masonry from 'react-masonry-css'
import SlipBoxCard from '../components/SlipboxCard'


const useStyles = makeStyles({

})

export default function Slipbox() {

    // const [slipboxes, setSlipboxes] = useState([])

    // setSlipboxes([
    //     { name: "Big box" },
    //     { name: "Medium Box" },
    //     { name: "Small Box" }
    // ])

    // const breakpoints = {
    //     default: 3,
    //     1100: 2,
    //     700: 1
    // };

    // const handleDelete = id => {
    //     const slipbox = slipboxes.find(n => n.id === id)
    //     const changedNote = slipboxes.filter(note => note.id !== id)

    //     boxService
    //         .deleteVal(id)
    //         .then(() => {
    //             setSlipboxes(changedNote)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    return (
        <Container size="sm">
            {/* <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Slipbox
            </Typography>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {slipboxes.map(box => (
                    <div key={box.id}>
                        <SlipBoxCard box={box} handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonry>

 */}

        </Container>
    )

}
