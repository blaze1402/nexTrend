import { Button, Card, CardContent, Typography, styled } from '@mui/material'

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 200,
    position: "absolute"
})

const TrophyImg = styled("img")({
    right: 40,
    bottom: 30,
    height: 100,
    position: "absolute"
})

const Achievement = () => {
    return (
        <Card sx={{ position: "relative", backgroundColor: "#0d0d22", color: "white" }}>
            <CardContent className='space-y-1.5'>
                <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
                    Shop with nexTrend!
                </Typography>
                <Typography variant='body2'>Congratulations 🥳 </Typography>
                <Typography variant='h5' className='py-4'>48.3k</Typography>
                <Button size='small' variant='contained'>View Sales</Button>
                <TriangleImg src='./triangle-dark.png' />
                <TrophyImg src='./trophy.png' />
            </CardContent>
        </Card>
    )
}

export default Achievement