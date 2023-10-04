import { Button, Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Typography variant="body2" gutterBottom>About</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Blog</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Press</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Jobs</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Partners</Typography>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Typography variant="body2" gutterBottom>Marketing</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Analytics</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Commerce</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Insights</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Support</Typography>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Typography variant="body2" gutterBottom>Guides</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>API Status</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Typography variant="body2" gutterBottom>Claim</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Privacy</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Terms</Typography>
                    </div>
                </Grid>
                <Grid className="pt-20 space-y-1" item xs={12}>
                    <Typography >
                        © 2023 nexTrend. All rights reserved.
                    </Typography>
                    <Typography >
                        Made with ❤️ by nexTrend
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
