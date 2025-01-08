 export function extractTime(createdAt) {
    // Ensure createdAt is a valid Date object
    const date = new Date(createdAt);
  
    // Check if the date is valid
    if (isNaN(date)) {
      throw new Error('Invalid date');
    }
  
    // Extract the time in HH:mm:ss format
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    // Return the formatted time
    return `${hours}:${minutes}:${seconds}`;
  }
  