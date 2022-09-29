import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid, Box } from "@mui/material"

const TimetableSection = () => {

    const createData = (
        type: string,
        day: string,
        time: string
    ) => {
        return { type, day, time }
    }

    const rows: any = [
        createData("Children Ages (7 - 10)", "Saturday", "10:30am - 11:30am"),
        createData("Children Ages (11 - 14)", "Saturday", "11:45am - 12:45pm"),
        createData("Children Ages (15+)", "Saturday", "2:45pm - 4:15pm"),
        createData("Adults", "Saturday", "2:45pm - 4:15pm"),
        createData("Community", "Saturday", "4:30pm - 5:30pm")
    ]

    return (
        <section id="timetable-section">
            <Grid container spacing={2} paddingX={4}>
                <Grid item md={12} textAlign="center">
                    <h2>Class Timetable</h2>
                </Grid>
                <Grid item md={12}>
                    <Box sx={{ width: '100%' }}>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell><b>Day</b></TableCell>
                                        <TableCell><b>Start - Finish</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row : any) => (
                                    <TableRow
                                    key={row.type}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.type}
                                        </TableCell>
                                        <TableCell align="left">{row.day}</TableCell>
                                        <TableCell align="left">{row.time}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    
                </Grid>
            </Grid>
        </section>
    )
}

export default TimetableSection