import { Step, Stepper, StepLabel } from '@mui/material'
import PropTypes from 'prop-types'

const steps = [
    "Order Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = ({ activeStep }) => {
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>

                {steps.map((label) => <Step key={label}>
                    <StepLabel sx={{ color: '#9155FD', fontSize: '44px' }}>{label}</StepLabel>
                </Step>)}
            </Stepper>

        </div>
    )
}

// Add propTypes validation
OrderTracker.propTypes = {
    activeStep: PropTypes.number.isRequired
};

export default OrderTracker