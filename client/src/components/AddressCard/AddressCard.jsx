import { PropTypes } from 'prop-types'

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className='space-y-2'>
        <p className='font-semibold'>{address?.firstName + " " + address?.lastName} </p>
        <p>{address?.streetAddress}, {address?.city}, {address?.state}, {address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

AddressCard.propTypes = {
  address: PropTypes.object.isRequired
}

export default AddressCard