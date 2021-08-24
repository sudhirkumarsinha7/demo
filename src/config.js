export const DEV_URL = 'http://54.164.66.73:3001';
export const global = {
  supportMail: 'sudhirkumarsinha7@gmail.com',
  supportPh: '+919059687874',
  GoogleMapsApiKey: 'AIzaSyBLwFrIrQx_0UUAIaUwt6wfItNMIIvXJ78',
    latitude: 17.4295865,
    longitude: 78.368776,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};
export function config() {
  const confs = {
    test: {
      loginUrl: `${DEV_URL}/usermanagement/api/auth/login`,
      registerUrl: `${DEV_URL}/usermanagement/api/auth/register`,
    },
  };

  const conf = confs.test;
  // const conf = confs.prod;

  return conf;
}
