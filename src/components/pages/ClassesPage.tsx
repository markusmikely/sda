import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Image from "../shared/Image"
import Content from "../shared/Content"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'
import { Link } from "react-router-dom"
import moment from 'moment'

const ClassesPage = () => {

    const getNextSaturday = () => {
        
        // const dow: any = moment.now()
        // const day: any = dow.day()

        // console.log('day', dow)

        const date:any = moment(); // Thursday Feb 2015
        const dow = date.day();
        console.log(6-dow);

        const daysToadd: number = 6 - dow;
        const nextSaturday: any = moment(date).add(daysToadd, 'days').format('LLL')  
        
        console.log(nextSaturday);
        // const today = new Date();
        // const first = today.getDate() - today.getDay() + 1;
        // const sixth = first + 5;
      
        // const saturday = new Date(today.setDate(sixth));
      
        return '' //saturday.toString();
    }

    const items: any[] = [
        {
            title: "Children's Classes (Ages 4 - 7) ",
            image: "http://localhost:3000/static/media/stock-photo-portrait-of-smiling-african-boy-showing-dance-elements-during-group-class-in-dance-center-1812354109.b5a558b2ab86ecf9a269.jpg",
            content: "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus.",
            price: {
                walkIn: 30,
                termPrice: 200
            },
            next: getNextSaturday(),
            time: {
                start: "10:30",
                end: "11:30"
            },
            group: "7 - 10"
        },
        {
            title: "Children's Classes (Ages 8 - 14) ",
            image: "http://localhost:3000/static/media/stock-photo-positive-girl-dancing-modern-choreography-with-group-of-teenagers-on-city-street-on-summer-day-1822275761.40a42c7e8df5ab75e0dd.jpg",
            content: "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus.",
            price: {
                walkIn: 30,
                termPrice: 200
            },
            next: getNextSaturday(),
            time: {
                start: "11:45",
                end: "12:45"
            },
            group: "11 - 14"
        },
        {
            title: "Children's Classes (Ages 15+) ",
            image: "http://localhost:3000/static/media/stock-photo-portrait-of-modern-teenager-performing-street-dance-with-group-of-friends-outside-in-summer-1821695423.0263aa344f177b7364da.jpg",
            content: "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus.",
            price: {
                walkIn: 30,
                termPrice: 200
            },
            next: getNextSaturday(),
            time: {
                start: "13:00",
                end: "14:30"
            },
            group: "15+"
        },
        {
            title: "Adults",
            image: "http://localhost:3000/static/media/stock-photo-young-modern-dancing-group-practice-dancing-in-front-colorful-wall-431726581.14e3af2166e43f79a23b.jpg",
            content: "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus.",
            price: {
                walkIn: 30,
                termPrice: 200
            },
            next: getNextSaturday(),
            time: {
                start: "14:45",
                end: "16:15"
            },
            group: "18+"
        },
        {
            title: "Community",
            image: "http://localhost:3000/static/media/stock-photo-group-of-young-hip-hop-dancers-in-studio-625893809.efa9ab9a8c80dac02691.jpg",
            content: "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus.",
            price: {
                walkIn: 30,
                termPrice: 200
            },
            next: getNextSaturday,
            time: {
                start: "16:30",
                end: "17:30"
            },
            group: "All ages welcome"
        }   
    ]

    const classes = items.map((item: any, index: number) => {

        return (
            <Grid container spacing={3} key={index}>
                <Grid item md={4}>
                    <Image image={item.image} direction="even" />
                </Grid>
                <Grid item md={8} xs={12}>
                    <div className="inner-content">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <Button className={"even"} variant="outlined" color="success" component={Link} to={"/classes/"+item.id}>Buy Passes</Button>
                    </div>
                </Grid>
                <Grid item md={12}>
                    <h3>Class Details</h3>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Age Group</b></TableCell>
                                    <TableCell><b>Day</b></TableCell>
                                    <TableCell><b>Start - Finish</b></TableCell>
                                    <TableCell><b>Next Class</b></TableCell>                                
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="td" scope="row">
                                        {item.group}
                                    </TableCell>
                                    <TableCell component="td" scope="row">
                                        Saturday
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.time.start} - {item.time.end}
                                    </TableCell>
                                    <TableCell align="left">
                                        <p>{getNextSaturday()}</p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
        </Grid>
        )
        
    })
    return (
        <div id="classes-page">
            <PageHeader title="Classes" video={Video} />
            <Content page="classes">
                {classes}
            </Content>
        </div>
    )
}

export default ClassesPage