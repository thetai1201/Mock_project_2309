export const getAuthorizationHeader = () => {
    const accessToken = localStorage.getItem('accessToken');
  
    if (!accessToken) {
      console.error('Access token not available.');
      return {};
    }
  
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  };