const useError = (error: any): string | null => {
  if (error && error.message && typeof error.message === "string") {
    const errorMessageArray = error.message.split(":");
    if (errorMessageArray.length > 0 && errorMessageArray[0] === "Controller") {
      return errorMessageArray[errorMessageArray.length - 1];
    }
  }

  return null;
};

export { useError };
