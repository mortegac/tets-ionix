import axios from 'axios';
import _ from 'lodash';
import CONFIG from '../constants/config';

export const getDNI = async (params) => {
    
    const headerSpecific = 
    {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'accept-encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
    };

    // console.log(' -+ getWeatherList -+', CONFIG.uri_weather);
    let res = await axios.get(`CONFIG.uri_ionix${params}`, headerSpecific);
    
    console.log('<res>', res);
    
    // const dataPronostico = Array.of(...res);
    
    return res;
   
};


// export const getWeatherList = async (data) => {
//     try{

//         console.log('<URL->getBeneficiariesList: ', URL);
         
//         const headerSpecific = {
//             'Content-Type': 'application/json',
                // 'Accept': '*/*',
                // 'Cache-Control': 'no-cache',
                // 'accept-encoding': 'gzip, deflate',
                // 'Connection': 'keep-alive',
//         };
     

//     }catch(e){
//         console.log('<getWeatherList->error: ', e);
//     }
    
//     //await http.get( uri_weather , headerSpecific );
//     return  { nada:'nada' }; 

// };


export default { getWeatherList };