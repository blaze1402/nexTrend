import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DevicesIcon from '@mui/icons-material/Devices';
import CurrencyIND from '@mui/icons-material/CurrencyRupee';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';

const salesData = [
    {
        stats: '24K',
        title: 'Sales',
        color: '#9155fd',
        icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '7.6K',
        title: 'Customers',
        color: '#66bb6a',
        icon: <PermIdentityIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '1.2K',
        title: 'Products',
        color: '#ffa726',
        icon: <DevicesIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '53K',
        title: 'Revenue',
        color: '#29b6f6',
        icon: <CurrencyIND sx={{ fontSize: "1.75rem" }} />
    }
]

const renderState = () => {
    return salesData.map((item, index) => (
        <Grid key={index} item xs={12} sm={3}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
            }}>
                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    backgroundColor: `${item.color}`
                }}>
                    {item.icon}
                </Avatar>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
    return (
        <Card sx={{backgroundColor: "#0d0d22", color: "white" }}>
            <CardHeader title='Monthly Overview'
                action={
                    <IconButton size='small'>
                        <MoreVert />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600, color: 'white' }}>
                            Total 32.7% growth 📈
                        </Box> than last month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important',
                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderState()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview