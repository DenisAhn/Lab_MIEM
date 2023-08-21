import { $api } from '.'

export const getBookingsRequest = async () => {
  return $api.post('/getUserBookings', { userId: 12345432 })
}

export const deleteBookingRequest = async ({ accessСode }) => {
  return $api.post('/deleteBooking', {
    userId: 12345432,
    accessСode,
  })
}

export const createBookingRequest = async ({ boardName, interval, date }) => {
  return $api.post('/addBooking', {
    boardName,
    userId: 12345432,
    interval,
    date,
  })
}
