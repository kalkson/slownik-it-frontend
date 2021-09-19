const trimRoute = (route: string): string => {
  const splited = route.split('/');
  return splited[splited.length - 1];
};

export default trimRoute;
