import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import ChildrenImg from './../../../assets/images/stock-photo-portrait-of-smiling-african-boy-showing-dance-elements-during-group-class-in-dance-center-1812354109.jpg'
import ChildrenImg2 from './../../../assets/images/stock-photo-positive-girl-dancing-modern-choreography-with-group-of-teenagers-on-city-street-on-summer-day-1822275761.jpg'
import TeenagerImg from './../../../assets/images/stock-photo-portrait-of-modern-teenager-performing-street-dance-with-group-of-friends-outside-in-summer-1821695423.jpg'
import AdultImg from './../../../assets/images/stock-photo-young-modern-dancing-group-practice-dancing-in-front-colorful-wall-431726581.jpg'
import CommunityImg from './../../../assets/images/stock-photo-group-of-young-hip-hop-dancers-in-studio-625893809.jpg'

const ClassPackagesSection = () => {

    const classes: any = [
        {
            id: '1',
            title: 'Children Ages (7 - 10)',
            image: ChildrenImg,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.'
        },
        {
            id: '2',
            title: 'Children Ages (11 - 14)',
            image: ChildrenImg2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.'
        },
        {
            id: '3',
            title: 'Children Ages (15+)',
            image: TeenagerImg,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.'
        },
        {
            id: '4',
            title: 'Adults',
            image: AdultImg,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.'
        },
        {
            id: '5',
            title: 'Community',
            image: CommunityImg,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.'
        }
    ];

    const rows = classes.map((item: any, i: number) => {
        return (
            <Grid container spacing={6} key={i}>
                <Grid item md={4} xs={12} className="mobile">
                    <div className="image even">
                        <img src={item.image} />
                    </div>
                </Grid>
                {(i % 2 == 0) && 
                <Grid item md={4} xs={12} className="desktop">
                    <div className="image odd">
                        <img src={item.image} />
                    </div>
                </Grid>
                }                
                <Grid item md={8} xs={12}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <Button className={(i % 2 == 0) ? "odd" : "even"} variant="outlined" color="success" component={Link} to={"/classes/"+item.id}>View Prices</Button>
                </Grid>
                {(i % 2 > 0) && 
                    <Grid item md={4} xs={12} className="desktop">
                        <div className="image even">
                            <img src={item.image} />
                        </div>
                    </Grid>
                }
            </Grid>
        )   
    })

    return (
        <section id="class-packages-section">
           {rows}
        </section>
    )
}

export default ClassPackagesSection