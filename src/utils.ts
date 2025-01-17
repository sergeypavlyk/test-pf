export const handleError = async (response: Response): Promise<void> => {
  const errorMessage =
    (await response.json().catch(() => null))?.message ||
    `HTTP error! Status: ${response.status}`;
  throw new Error(errorMessage);
};
