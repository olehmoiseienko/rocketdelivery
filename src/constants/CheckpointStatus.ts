enum CheckpointStatus {
  REGISTERED = 'Registered',
  NEW_DELIVERY_DATE_SET = 'New delivery date set',
  IN_TRANSIT = 'In transit',
  FAILED_DELIVERY_ATTEMPT = 'Failed delivery attempt',
  READY_FOR_COLLECTION = 'Ready for collection'
}

export default CheckpointStatus;
