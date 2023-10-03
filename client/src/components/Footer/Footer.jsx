// import React from 'react'

import { Button, Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Jobs</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Partners</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Jobs</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Partners</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Press</Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography >
                        all company rights reserved
                    </Typography>
                </Grid>
            </Grid>
        </div >
    )
}

export default Footer
